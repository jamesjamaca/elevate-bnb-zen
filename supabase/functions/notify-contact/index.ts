import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Escape user-supplied text before putting it in the HTML email
const esc = (v: unknown) =>
  String(v ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, company, location, phone, properties, message } = await req.json();

    console.log("New contact submission:", { name, email, company, location, phone, properties, message });

    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (RESEND_API_KEY) {
      const emailResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: "Elite BNB Hosts <onboarding@resend.dev>",
          to: "usa@elitebnbhosts.com",
          reply_to: email,
          subject: `New Contact: ${String(name ?? "").replace(/[\r\n]+/g, " ")}${company ? " — " + String(company).replace(/[\r\n]+/g, " ") : ""}`,
          html: `<h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${esc(name)}</p>
            <p><strong>Company:</strong> ${esc(company) || "Not specified"}</p>
            <p><strong>Location:</strong> ${esc(location) || "Not specified"}</p>
            <p><strong>Email:</strong> ${esc(email)}</p>
            <p><strong>Phone:</strong> ${esc(phone) || "Not specified"}</p>
            <p><strong>Number of listings:</strong> ${esc(properties) || "Not specified"}</p>
            <p><strong>Message:</strong></p>
            <p>${esc(message).replace(/\n/g, "<br>")}</p>`,
        }),
      });

      if (!emailResponse.ok) {
        const errText = await emailResponse.text();
        console.error("Resend API error:", emailResponse.status, errText);
      }
    } else {
      console.warn("RESEND_API_KEY not set — skipping email notification, submission still saved to database.");
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
