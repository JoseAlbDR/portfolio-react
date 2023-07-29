import emailjs from '@emailjs/browser'

export const sendEmail = async (e, form) => {
  e.preventDefault()
  console.log(form.current)

  try {
    const response = await emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_KEY
    )
    if (!response.text === 'OK')
      throw new Error('Something went wrong, try again later.')
  } catch (error) {
    throw new Error(error.text)
  }
}
