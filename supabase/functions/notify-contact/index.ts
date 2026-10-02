import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, properties, message } = await req.json();

    console.log("New contact submission:", { name, email, properties, message });

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
          subject: `New Contact: ${name}`,
          html: `<h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Properties:</strong> ${properties || "Not specified"}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>`,
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
