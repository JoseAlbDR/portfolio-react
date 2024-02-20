import { useRef, useState } from 'react'
import './ContactForm.scss'
import LinkButton from '../AppLayout/LinkButton'
import ReCAPTCHA from 'react-google-recaptcha'
import { useSubmitForm } from '../../hooks/useSubmitForm'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import Loader from 'react-loaders'

function ContactForm() {
  const [animation, setAnimation] = useState(true)
  const { isSubmiting, submitForm } = useSubmitForm()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const form = useRef()
  const captchaRef = useRef(null)

  function onSubmitForm(formData) {
    let token = captchaRef.current.getValue()
    if (token) {
      submitForm({ formData, token })
      setAnimation(false)
    } else {
      toast.error('Confirma que no eres un robot')
      // throw new Error('You must confirm you are not a robot')
    }
  }

  if (isSubmiting)
    return (
      <div className="spinner">
        <Loader type="ball-spin-fade-loader" />
      </div>
    )

  return (
    <form
      ref={form}
      onSubmit={handleSubmit(onSubmitForm)}
      className="contact-form"
    >
      <input
        className={`contact-name ${!animation ? 'form-animation' : ''}`}
        type="text"
        id="name"
        name="name"
        placeholder="Nombre"
        disabled={isSubmiting}
        {...register('name', {
          required: 'This field is required',
        })}
      />
      <input
        className={`contact-mail ${!animation ? 'form-animation' : ''}`}
        type="email"
        id="email"
        name="email"
        placeholder="Email"
        disabled={isSubmiting}
        {...register('email', {
          required: 'This field is required',
        })}
      />
      <input
        className={`contact-subject ${!animation ? 'form-animation' : ''}`}
        type="text"
        id="subject"
        name="subject"
        placeholder="Asunto"
        disabled={isSubmiting}
        {...register('subject', {
          required: 'This field is required',
        })}
      />
      <textarea
        className={`contact-message ${!animation ? 'form-animation' : ''}`}
        name="message"
        id="message"
        placeholder="Mensaje"
        cols="30"
        rows="10"
        disabled={isSubmiting}
        {...register('message', {
          required: 'This field is required',
        })}
      ></textarea>
      <ReCAPTCHA
        sitekey="6LdJXGYnAAAAAGhjLq6wplTaDc4Um_1NeBioHAA5"
        ref={captchaRef}
      />

      <LinkButton disabled={isSubmiting} className="send-button">
        ENVIAR
      </LinkButton>
    </form>
  )
}

export default ContactForm
