//this component is used to protect routes from unauthenticated users
//components/protected-route.tsx

//import dependencies
import { useAuthenticationStatus } from '@nhost/nextjs'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export function authProtected(Comp) {
  return function AuthProtected(props) {
    //declare router variable and initialize it with useRouter hook
    const router = useRouter()
    //useAuthenticationStatus hook to check if user is authenticated
    const { isLoading, isAuthenticated } = useAuthenticationStatus()
    console.log('Authentication Guard: Check Auth Status', { isLoading, isAuthenticated })

    //useEffect hook to redirect to sign-in page if user is not authenticated
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
