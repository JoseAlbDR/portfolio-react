import emailjs from '@emailjs/browser'
import { verifyToken } from './verifyToken'

export const sendEmail = async (formData, token) => {
  console.log(formData)
  try {
    if (token) {
      const validToken = await verifyToken(token)
      if (validToken.success) {
        const response = await emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          formData,
          import.meta.env.VITE_EMAILJS_KEY
        )
        if (!response.text === 'OK')
          throw new Error('Something went wrong, try again later.')
      } else {
        throw new Error('Sorry!! Token was not valid')
      }
    }
  } catch (error) {
    throw new Error(error.text)
  }
}
