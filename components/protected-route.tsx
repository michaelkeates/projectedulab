import { useAuthenticationStatus } from '@nhost/nextjs'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

interface Props {
  // define the shape of the props object here
}

export function authProtected(Comp: React.FC<Props>) {
  return function AuthProtected(props: Props) {
    const router = useRouter()
    const { isLoading, isAuthenticated } = useAuthenticationStatus()
    console.log('Authentication guard: check auth status', { isLoading, isAuthenticated })

    useEffect(() => {
      if (isLoading || isAuthenticated) {
        return
      }
      router.push('/sign-in')
    }, [isAuthenticated, isLoading, router])

    if (isLoading) {
      return <div>Loading...</div>
    }
    return <Comp {...props} />
  }
}
