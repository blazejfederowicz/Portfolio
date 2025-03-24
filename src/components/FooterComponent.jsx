const FooterComponent = ()=>{
    return(<>
    <section id="footer">
      <div className="container mx-auto sm:px-5">
        <footer className=" bg-slate-300 sm:rounded-t-3xl p-5 md:p-10 xl:p-14">
          <div className="grid grid-cols-6 mb-20 gap-3">
            <div className="flex flex-col sm:w-2/3 max-w-[350px] col-span-6 md:col-span-3">
              <div className="flex items-center mb-1 text-4xl text-sky-950">
                <i className="fa-brands  fa-html5"></i>
                <h1 className="md:text-4xl text-2xl font-[Brittany] ms-3 sm:ms-4 text-sky-950 ">Fabio</h1>
              </div>
              <p className="text-sm mb-2 text-sky-950">Stay in the loop and sign up for the newsletter:</p>
              <div className="relative">
                <input type="email" id="email" name="email" placeholder="Enter your email" className="bg-slate-50 text-xs rounded-3xl py-3 px-6 w-full text-zinc-500 border-2 border-zinc-300 focus:border-zinc-400 outline-none" />
                <button className="absolute top-[50%] right-1 translate-y-[-48%] cursor-pointer ">
                    <i class="bi bi-arrow-right-circle-fill text-sky-950 text-4xl duration-100 ease-in-out hover:md:text-blue-950 active:text-blue-950"></i>
                </button>
              </div>
            </div>
            <div className="flex flex-1 flex-col col-span-3 sm:col-span-2 md:col-span-1">
              <div className="mb-2">
                <h1 className="text-sky-950 font-bold text-sm">Company</h1>
              </div>
              <div className="flex flex-col">
                <div className="basis-0  mb-1">
                  <a href="#header" className="text-xs text-sky-950 duration-200 ease-in-out hover:md:ms-2 active:text-sky-900">Home</a>
                </div>
                <div className="mb-1 basis-0">
                  <a href="#about" className="text-xs text-sky-950 duration-200 ease-in-out hover:md:ms-2 active:text-sky-900">About</a>
                </div>
                <div className="mb-1 basis-0">
                  <a href="#projects" className="text-xs text-sky-950 duration-200 ease-in-out hover:md:ms-2 active:text-sky-900">Projects</a>
                </div>
                <div className="mb-1 basis-0">
                 <a href="#header" className="text-xs text-sky-950 duration-200 ease-in-out hover:md:ms-2 active:text-sky-900">Pricing</a>
                </div>
                <div className="mb-1 basis-0">
                  <a href="#header" className="text-xs text-sky-950 duration-200 ease-in-out hover:md:ms-2">Team</a>
                </div>
                <div className="mb-1 basis-0">
                  <a href="#header" className="text-xs text-sky-950 duration-200 ease-in-out hover:md:ms-2 active:text-sky-900">Career</a>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col col-span-3 sm:col-span-2 md:col-span-1">
              <div className="mb-2">
                <h1 className="text-sky-950 font-bold text-sm">Documentation</h1>
              </div>
              <div className="flex flex-col">
                <div className="basis-0 mb-1">
                  <a href="#header" className="text-xs text-sky-950 duration-200 ease-in-out hover:md:ms-2 active:text-sky-900">Help Centre</a>
                </div>
                <div className="mb-1 basis-0">
                  <a href="#footer" className="text-xs text-sky-950 duration-200 ease-in-out hover:md:ms-2 active:text-sky-900">Contact</a>
                </div>
                <div className="mb-1 basis-0">
                  <a href="#header" className="text-xs text-sky-950 duration-200 ease-in-out hover:md:ms-2 active:text-sky-900">FAQ</a>
                </div>
                <div className="mb-1 basis-0">
                 <a href="#header" className="text-xs text-sky-950 duration-200 ease-in-out hover:md:ms-2 active:text-sky-900">Privacy Policy</a>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col col-span-6 sm:col-span-2 md:col-span-1 md:ms-6 lg:ms-0">
              <div className="mb-2">
                <h1 className="text-sky-950 font-bold text-sm">Social</h1>
              </div>
              <div className="flex flex-col">
                <div className="mb-1 basis-0">
                  <a href="https://www.facebook.com/" target="_blank" className="text-xs text-sky-950 duration-200 ease-in-out hover:md:ms-2 active:text-sky-900">Facebook</a>
                </div>
                <div className="mb-1 basis-0">
                 <a href="https://www.instagram.com/" target="_blank" className="text-xs text-sky-950 duration-200 ease-in-out hover:md:ms-2 active:text-sky-900">Instagram</a>
                </div>
                <div className="mb-1 basis-0">
                  <a href="https://www.youtube.com/" target="_blank" className="text-xs text-sky-950 duration-200 ease-in-out hover:md:ms-2">Youtube</a>
                </div>
                <div className="mb-1 basis-0">
                  <a href="https://x.com/?lang=en&mx=2" target="_blank" className="text-xs text-sky-950 duration-200 ease-in-out hover:md:ms-2 active:text-sky-900">Twitter</a>
                </div>
              </div>
            </div>
          </div>
          <hr className="text-gray-400"/>
          <div className="flex flex-1 items-center justify-between pt-2">
            <div className="text-xs text-sky-900">© Fabio Inc. All Rights Reserved 2023</div>
            <div className="text-xs text-sky-900"><span className="hover:underline hover:underline-offset-2 cursor-pointer">Terms</span> & <span className="hover:underline hover:underline-offset-2 cursor-pointer">Conditions</span></div>
          </div>
        </footer>
      </div>
    </section>
    </>)
   }
   
   export default FooterComponent