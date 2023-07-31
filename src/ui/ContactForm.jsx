import { useRef } from 'react'
import './ContactForm.scss'
import LinkButton from './LinkButton'
import ReCAPTCHA from 'react-google-recaptcha'
import { useSubmitForm } from '../hooks/useSubmitForm'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import Loader from 'react-loaders'

function ContactForm() {
  const { isSubmiting, submitForm } = useSubmitForm()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()
  const form = useRef()
  const captchaRef = useRef(null)

  function onSubmitForm(formData) {
    let token = captchaRef.current.getValue()
    if (token) {
      submitForm({ formData, token }, { onSuccess: () => reset() })
    } else {
      toast.error('You must confirm you are not a robot')
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
        className="contact-name"
        type="text"
        id="user_name"
        name="user_name"
        placeholder="Name"
        disabled={isSubmiting}
        {...register('user_name', {
          required: 'This field is required',
        })}
      />
      <input
        className="contact-mail"
        type="email"
        id="user_email"
        name="user_email"
        placeholder="Email"
        disabled={isSubmiting}
        {...register('user_email', {
          required: 'This field is required',
        })}
      />
      <input
        className="contact-subject"
        type="text"
        id="subject"
        name="subject"
        placeholder="Subject"
        disabled={isSubmiting}
        {...register('subject', {
          required: 'This field is required',
        })}
      />
      <textarea
        className="contact-message"
        name="message"
        id="message"
        placeholder="Message"
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
        SEND
      </LinkButton>
    </form>
  )
}

export default ContactForm
