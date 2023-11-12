'use client'

import { useRouter, redirect } from 'next/navigation'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { signIn } from 'next-auth/react'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import Input from './Input'
import OAuthSignIn from '@/components/auth-button/SignIn'
import { Button } from '@/components/ui/button'

interface LoginData {
  email: string
  password: string
}

const schema = z.object({
  email: z
    .string()
    .email('Invalid email address')
    .nonempty('Email is required'),
  password: z.string().nonempty('Password is required'),
})

const SignIn = () => {
  const { data: session } = useSession()
  const router = useRouter()
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<LoginData>({ resolver: zodResolver(schema) })

  const onSubmit: SubmitHandler<LoginData> = async (data) => {
    try {
      signIn('credentials', {
        ...data,
        redirect: false,
      })
      router.push('/')
    } catch (error) {
      console.log(error)
    }
  }

  if (session) redirect('/')

  return (
    <main className="flex items-center justify-center text-center my-10">
      <div className="bg-card text-foreground shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full md:max-w-md">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="mb-4">Sign In</h1>
          <div className="mb-4">
            <Controller
              render={({ field }) => (
                <Input
                  type="text"
                  id="email"
                  placeholder="Email"
                  {...field}
                  error={errors.email?.message}
                />
              )}
              name="email"
              control={control}
              defaultValue=""
            />
          </div>

          <div className="mb-4">
            <Controller
              render={({ field }) => (
                <Input
                  type="password"
                  id="password"
                  placeholder="Password"
                  {...field}
                  error={errors.password?.message}
                />
              )}
              name="password"
              control={control}
              defaultValue=""
            />
          </div>

          <div>
            <Button
              type="submit"
              className="w-full"
            >
              Login
            </Button>
          </div>

          <div className="mt-8">
            Don&apos;t have an account?{' '}
            <Link
              href="/register"
              className="text-secondary-foreground underline mx-2"
            >
              Register
            </Link>
          </div>
        </form>
        <div>
        <h2 className="my-4">or continue with</h2>
          <OAuthSignIn />
        </div>
      </div>
    </main>
  )
}

export default SignIn