import { z } from 'zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const formSchema = z.object({
  username: z.string().min(1, 'Username is required'),
  email: z.string().email().min(1, 'Email is required'),
  age: z.coerce.number().min(1, 'Age is required'),
  password: z.string().min(1, 'Password is required'),
})

type FormSchemaType = z.infer<typeof formSchema>

const Validation = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormSchemaType>({ resolver: zodResolver(formSchema) })

  const submitForm: SubmitHandler<FormSchemaType> = (data) => console.log(data)
  return (
    <div className='flex justify-center'>
      <form
        onSubmit={handleSubmit(submitForm)}
        className='border w-[340px] p-6 flex flex-col gap-y-2 rounded-md shadow-sm'
      >
        <div className=''>
          <input
            className='w-full px-2 py-1 border rounded outline-none focus:outline-blue-400 focus:outline-1'
            type='text'
            placeholder='Username'
            {...register('username')}
          />
          {errors.username && (
            <span className='text-xs text-red-500'>{errors.username?.message}</span>
          )}
        </div>
        <div className=''>
          <input
            className='w-full px-2 py-1 border rounded outline-none focus:outline-blue-400 focus:outline-1 '
            type='email'
            placeholder='Email'
            {...register('email')}
          />
          {errors.email && <span className='text-xs text-red-500'>{errors.email?.message}</span>}
        </div>
        <div className=''>
          <input
            className='w-full px-2 py-1 border rounded outline-none focus:outline-blue-400 focus:outline-1'
            type='number'
            placeholder='Age'
            {...register('age')}
          />
          {errors.age && <span className='text-xs text-red-500'>{errors.age?.message}</span>}
        </div>
        <div className=''>
          <input
            className='w-full px-2 py-1 border rounded outline-none focus:outline-blue-400 focus:outline-1'
            type='password'
            placeholder='••••••••'
            {...register('password')}
          />
          {errors.password && (
            <span className='text-xs text-red-500'>{errors.password?.message}</span>
          )}
        </div>
        <div className=''>
          <input
            className='w-full px-2 py-1 text-white bg-blue-500 border rounded cursor-pointer hover:bg-blue-600'
            type='submit'
            value='Register'
            disabled={isSubmitting}
          />
        </div>
      </form>
    </div>
  )
}

export default Validation
