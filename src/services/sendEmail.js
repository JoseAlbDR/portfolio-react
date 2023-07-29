import emailjs from '@emailjs/browser'
import { toast } from 'react-hot-toast'

export const sendEmail = (e, form) => {
  e.preventDefault()

  emailjs
    .sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_KEY
    )
    .then(
      (result) => toast.success('Email sent.'),
      (error) => toast.error(error.text)
    )
}
