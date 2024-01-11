"use client"
import { useSession } from "next-auth/react"
import Link from "next/link"
import { usePathname, useRouter} from "next/navigation";



function Navigation() {
    const { data: session, status } = useSession();
    const pathname = usePathname()
    const router = useRouter()

    let linkClass = "flex flex-row gap-2 align-bottom p-2";
    let actualLink = linkClass + " bg-highlight rounded-lg "
    let openMenu = false;
    

    const menu = () => {
        const button = document.getElementById("menu");
        const div = document.getElementById("divMenu");

        if (openMenu) {openMenu = false} else { openMenu = true}
        if (openMenu) {
            button.style = "text-align: center; background-color: #73aefab3; border-radius: 10%; height:1.5rem; margin-top:1rem;";
            div.style="position: fixed; display: flex; flex-direction: column; row-gap: 3.5rem; background-color: rgb(191 219 254); width: 100vw; height: 18rem; padding: 3rem 0 3rem 0"
        } else {
            button.style = "";
            div.style = "display:hidden";
        }
    }
    
    if (session)
    return (
        <div>
            <div className="lg:hidden w-screen bg-blue-300 flex justify-evenly py-10 px-10 gap-6 border-white border text-white align-text-bottom">
                <Link href={"/"} className={(pathname == "/") ? (actualLink) : (linkClass)}> 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.0} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                </svg>
                <h1 className="text-lg font-semibold tracking-wide"> Administracion </h1></Link>

                
                <button onClick={menu} id="menu">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                </button>
                
                <Link href={"/api/auth/signout"} className=" flex justify-end">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-12 my-0" >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75 14.25 12m0 0 2.25 2.25M14.25 12l2.25-2.25M14.25 12 12 14.25m-2.58 4.92-6.374-6.375a1.125 1.125 0 0 1 0-1.59L9.42 4.83c.21-.211.497-.33.795-.33H19.5a2.25 2.25 0 0 1 2.25 2.25v10.5a2.25 2.25 0 0 1-2.25 2.25h-9.284c-.298 0-.585-.119-.795-.33Z" />
                </svg>
                </Link>
            </div>
            <div id="divMenu" className="hidden">
            <Link href={"/products"} onClick={menu}><h1 className="flex justify-center text-white bold text-lg"> Productos </h1></Link>
            <Link href={"/consults"} onClick={menu}><h1 className="flex justify-center text-white bold text-lg"> Consultas </h1></Link>
            <Link href={"/config"} onClick={menu}><h1 className="flex justify-center text-white bold text-lg"> Configuracion </h1></Link>
            </div>

            <div className="hidden lg:block">
            <div className="w-screen bg-blue-300 flex justify-evenly py-10 px-10 border-white border text-white">
            <Link href={"/"} className={(pathname == "/") ? (actualLink) : (linkClass)}> 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
            </svg>

            <h1 className="text-2xl font-semibold tracking-wide"> Administracion </h1></Link>
            <Link href={"/products"} className={(pathname.includes("/products")) ? (actualLink) : (linkClass)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 0 0 4.5 9v.878m13.5-3A2.25 2.25 0 0 1 19.5 9v.878m0 0a2.246 2.246 0 0 0-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0 1 21 12v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6c0-.98.626-1.813 1.5-2.122" />
            </svg> <h1>Productos</h1>
            </Link>
           
            <Link href={"/consults"} className={(pathname.includes("/consults")) ? (actualLink) : (linkClass)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
            </svg>
            <h1>Ordenes</h1>
            </Link>
            
            <Link href={"/config"} className={(pathname.includes("/config")) ? (actualLink) : (linkClass)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>

            <h1>Configuracion</h1>
            </Link>
            
            <div>
                <Link href={"/api/auth/signout"}><h2 className="flex flex-row gap-2 align-bottom p-2">Cerrar sesion</h2></Link>
            </div>
        </div>
        </div>
        </div>
        
    )
}

export default Navigation