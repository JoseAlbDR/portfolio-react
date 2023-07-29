import emailjs from '@emailjs/browser'

export const sendEmail = async (formData) => {
  console.log(formData)
  try {
    const response = await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formData,
      import.meta.env.VITE_EMAILJS_KEY
    )
    if (!response.text === 'OK')
      throw new Error('Something went wrong, try again later.')
  } catch (error) {
    throw new Error(error.text)
  }
}
