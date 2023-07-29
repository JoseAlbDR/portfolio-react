import { useMutation } from '@tanstack/react-query'
import { sendEmail } from '../services/sendEmail'
import { toast } from 'react-hot-toast'

export const useSubmitForm = () => {
  const { isLoading: isSubmiting, mutate: submitForm } = useMutation({
    mutationFn: sendEmail,
    onSuccess: () => toast.success('Message sent successfully'),
    onError: (err) => toast.error(err.message),
  })

  return {
    isSubmiting,
    submitForm,
  }
}
