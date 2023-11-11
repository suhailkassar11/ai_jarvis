  import { Button } from "@/components/ui/button"
 import Link from 'next/link';
  const LandingPage= () => {
   return (
     <div>
       landing page(UnProtected)
        <Link href='/sign-in'>
            <Button>
              signIn
            </Button>
        </Link>
        <Link href='/sign-up'>
            <Button>
              Register
            </Button>
        </Link>
     </div>
   )
 }
 
 export default LandingPage
 