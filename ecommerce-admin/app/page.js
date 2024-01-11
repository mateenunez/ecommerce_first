"use client"
import { useSession, signIn, signOut, getSession } from "next-auth/react"

export default function Home() {
  const { data: session, status } = useSession()
  
  if (!session)
    return (
  <div className="w-screen h-screen flex items-center">
    <div className="text-center w-full">
      <button className="bg-white p-4 rounded-lg text-black" onClick={() => signIn("google")}>  Iniciar sesion con Google </button>
    </div>
  </div>)
  else
  return(
    <div className="w-screen h-screen">
      <div className="flex flex-col p-5 gap-5">
      <h1>Bienvenido a la pagina de administrador</h1>
      <h2>Iniciaste sesion como: {session.user.name}</h2>
      </div> 
      


    </div>
)
}
