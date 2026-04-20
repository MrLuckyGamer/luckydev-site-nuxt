export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { name, email, message } = body

  if (!name || !email || !message) {
    throw createError({ statusCode: 400, statusMessage: 'All fields are required.' })
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw createError({ statusCode: 400, statusMessage: 'Invalid email address.' })
  }

  const accessKey = process.env.WEB3FORMS_ACCESS_KEY

  if (!accessKey) {
    throw createError({ statusCode: 500, statusMessage: 'Email service not configured.' })
  }

  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      access_key: accessKey,
      name,
      email,
      message,
      subject: `New contact from ${name} — Lucky Developments`,
      replyto: email,
      // redirect: 'https://luckydev.xyz/thank-you',
    }),
  })

  const data = await response.json()

  if (!data.success) {
    throw createError({ statusCode: 502, statusMessage: data.message || 'Failed to send message.' })
  }

  return { success: true }
})