import axios from 'axios'
export const verifyToken = async (token) => {
  try {
    let response = await axios.post(
      `https://recaptcha.jadero.dev/verify-token`,
      // 'http://localhost:4000/verify-token',
      {
        secret: import.meta.env.VITE_RECAPTCHA_SECRET_KEY,
        token,
      },
      console.log(token)
    )
    return response.data
  } catch (error) {
    console.log('error ', error)
    throw new Error('Error verifying token: ' + error)
  }
}
