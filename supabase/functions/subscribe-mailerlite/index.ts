import { corsHeaders } from '@supabase/supabase-js/cors'

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const MAILERLITE_API_KEY = Deno.env.get('MAILERLITE_API_KEY')
    if (!MAILERLITE_API_KEY) {
      throw new Error('MAILERLITE_API_KEY is not configured')
    }

    const { email } = await req.json()
    if (!email || typeof email !== 'string') {
      return new Response(JSON.stringify({ error: 'Email is required' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    // Find the "Checklist Leads" group
    const groupsRes = await fetch('https://connect.mailerlite.com/api/groups?filter[name]=Checklist Leads', {
      headers: {
        'Authorization': `Bearer ${MAILERLITE_API_KEY}`,
        'Content-Type': 'application/json',
      },
    })
    const groupsData = await groupsRes.json()
    const group = groupsData?.data?.[0]

    // Add subscriber
    const subscriberBody: Record<string, unknown> = {
      email,
    }
    if (group) {
      subscriberBody.groups = [group.id]
    }

    const subRes = await fetch('https://connect.mailerlite.com/api/subscribers', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${MAILERLITE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(subscriberBody),
    })

    const subData = await subRes.json()

    if (!subRes.ok) {
      console.error('MailerLite error:', JSON.stringify(subData))
      return new Response(JSON.stringify({ error: 'Failed to subscribe' }), {
        status: subRes.status,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  } catch (error) {
    console.error('Error:', error)
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }
})
