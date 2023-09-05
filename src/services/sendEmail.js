import { verifyToken } from './verifyToken'
import axios from 'axios'

export const sendEmail = async (formData, token) => {
  console.log(formData)
  try {
    if (token) {
      const validToken = await verifyToken(token)
      if (validToken.success) {
        await axios.post(`${import.meta.env.VITE_URL}/contact`, formData)
      } else {
        throw new Error('Sorry!! Token was not valid')
      }
    }
  } catch (error) {
    console.log(error)
    throw new Error(error.response.data.msg)
  }
}
