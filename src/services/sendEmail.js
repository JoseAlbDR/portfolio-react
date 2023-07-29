import emailjs from '@emailjs/browser'

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
      (result) => console.log(result.text),
      (error) => console.log(error.text)
    )
}
