import NavbarComponent from "./NavbarComponent"
import { Reveal } from "./Reveal"

const HeaderComponent = ()=>{
    return(<>
    <section className="w-full custom-container 2xl:h-full relative">
       <NavbarComponent/>
       <div className="gradient hidden sm:block absolute w-[75em] h-[39em] -top-[25em] -right-[35em]"></div>
        <div className="flex w-full flex-col h-full">
            <div className="container pt-20 sm:grow mx-auto">
                <div className="grid  sm:grid-cols-2 h-full content-center 2xl:translate-y-20">
                    <div className="text-white col-start-2 flex h-full sm:justify-end items-start flex-col text-center mb-10 sm:mb-8">
                        <h1 className="md:text-9xl text-6xl font-[Brittany]">Blazej</h1>
                    </div>
                </div>
             </div>
             <img src="src\assets\wave.svg"  className="block w-full -mb-1 "/>
        </div>
    </section>
    </>)
   }
   
   export default HeaderComponent