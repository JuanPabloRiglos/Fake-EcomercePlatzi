/* eslint-disable no-unused-vars */
import { Link, Navigate } from "react-router-dom"
import { useContext , useState , useRef } from "react"
import { ShoppingCartContext } from "../../Context/Index"
import Layout from "../../Components/Layout/Index"

function Signin() {

  const context = useContext(ShoppingCartContext)
  const [view, setView] = useState('user-info')
  const form = useRef(null)

  // data for account
  const account = localStorage.getItem('account')
  const parsedAccount = JSON.parse(account)


  const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true;
  const noAccountInLocalState = context.account ? Object.keys(context.account).length === 0 : true;
  const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState

  const handleSignIn = () => {
    const stringifiedSignOut = JSON.stringify(false)
    localStorage.setItem('sign-out', stringifiedSignOut)
    context.setSignOut(false)
    // Redirect
    return <Navigate replace to={'/'} />
  }


  const createAccount =()=>{
    const formData = new FormData(form.current)
    const data ={
      name : formData.get('name'),
      email : formData.get('email'),
      password : formData.get('password')
    }
    console.log(data)

      // Create account in Local Storage y Local State
      const stringifiedAccount = JSON.stringify(data)
      localStorage.setItem('account', stringifiedAccount)
      context.setAccount(data)
      // Sign In
      handleSignIn()
      }


  const renderLogin = () =>{
  return (
     <div className="flex flex-col w-80">
       <p>
        <span className="font-light text-sm"> Email : </span>
        <span>{parsedAccount?.email}</span>
       </p>
       <p>
        <span className="font-light text-sm"> Password : </span>
        <span>{parsedAccount?.password}</span>
       </p>
       <Link 
       to='/'>
        <button
         className="bg-black disabled:bg-black/40 text-white w-full rounded-lg py-3 mt-4 mb-2"
         onClick={()=> handleSignIn()}
          disabled={!hasUserAnAccount}> Log in </button>
       </Link>
       <div className="text-center">
        <a className="font-light text-xs underline underline-offset-4" href="/">Forgot my password</a> </div>
        <button 
        onClick={()=> setView('create-user-info')}
        className="border border-black  disabled:bg-black/40 rounded-lg py-3 mt-4 mb-2" disabled={hasUserAnAccount}
        >
        Sign up</button>
      
       </div>
  )
}
  const renderCreateUserView =()=>{
  return ( 
    <form ref={form} className="flex flex-col gap-4 w-80">
      <div className="flex flex-col gap-1">
    <label htmlFor="name" className="font-light text-sm"> Your name:</label>
    <input type="text"
     id="name"
    name="name"
    defaultValue={parsedAccount?.name} 
    placeholder="your name"
    className="rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4"
    />

      </div>
      <div className="flex flex-col gap-1">
    <label htmlFor="email" className="font-light text-sm"> Your email:</label>
    <input type="text"
     id="email"
    name="email"
    defaultValue={parsedAccount?.email} 
    placeholder="your@email"
    className="rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4"
    />
      </div>

      <div className="flex flex-col gap-1">
    <label htmlFor="password" className="font-light text-sm"> Your password:</label>
    <input type="text"
     id="password"
    name="password"
    defaultValue={parsedAccount?.password} 
    placeholder="********"
    className="rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4"
    />
      </div>
      <Link to='/'>
        <button className="bg-black text-white w-full rounded-lg py-3"
        onClick={() => createAccount()}>
          Create Account
        </button>
      </Link>
    </form>
  )
}
  const renderView=()=> view === 'create-user-info' ? renderCreateUserView() : renderLogin();
return (
    
      <Layout className='bg-teal-300'>
       <h1 className="font-meidum text-xl text-center mb-b w-full">Welcome </h1>
      {renderView()}
      </Layout>
  )
}

export default Signin