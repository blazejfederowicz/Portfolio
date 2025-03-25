import HeroSectionCode from "./HeroSectionCode"
import { Reveal } from "./Reveal"

const FeatureComponent = ()=>{
    return(<>
    <section id="projects" className="">
      <div className=" pb-10 md:pb-32">
        <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
          <div className="flex justify-center items-center">
          </div>
          <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
            <div className="relative lg:row-span-2">
            <Reveal>
              <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Mobile friendly</p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">Markdown previewer that allowes making pages even on the phone.</p>
                </div>
                <div className="@container relative overflow-y-visible min-h-[30rem] w-full grow max-lg:mx-auto max-lg:max-w-sm">
                  <div className="absolute cursor-pointer h-[500px] duration-300 ease-in-out hover:md:-mt-6 active:-mt-6 inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
                    <a href="https://markdown-landing-page.vercel.app" target="_blank">
                      <img className="size-full object-cover object-top" src="/src/assets/phone.jpg" alt="phone"/>
                    </a>
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 lg:rounded-l-[2rem]"></div>
              </Reveal>
            </div>
            <div className="relative max-lg:row-start-1">
              <Reveal>
              <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Performance</p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">Slow loading pages? Forget about it, here we don't waste time.</p>
                </div>
                <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                  <img className="w-full max-lg:max-w-xs" src="https://tailwindui.com/plus-assets/img/component-images/bento-03-performance.png" alt=""/>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-t-[2rem]"></div>
              </Reveal>
            </div>
            <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
              <Reveal>
              <div className="absolute inset-px rounded-lg bg-white"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Security</p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">You can login safely, without worring about your data being leaked.</p>
                </div>
                <div className="@container flex flex-1 items-center max-lg:py-6 lg:pb-2">
                  <img className="h-[min(152px,40cqw)] object-cover" src="https://tailwindui.com/plus-assets/img/component-images/bento-03-security.png" alt=""/>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5"></div>
              </Reveal>
            </div>
            <div className="relative lg:row-span-2">
              <Reveal>
              <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Powerful APIs</p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">A quote machine is a good example how to generate random quotes.</p>
                </div>
                <div className="relative min-h-[30rem] w-full grow">
                  <a href="https://quote-machine-rep.vercel.app" target="_blank">
                    <div className="absolute hover:md:-mt-6 hover:md:-ms-3 active:-mt-6 active:-ms-3 duration-300 ease-in-out cursor-pointer top-10 right-0 bottom-0 left-10 overflow-hidden rounded-tl-xl bg-gray-900 shadow-2xl">
                      <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                        <div className="-mb-px flex text-sm/6 font-medium text-gray-400">
                          <div className="border-r border-b border-r-white/10 border-b-white/20 bg-white/5 px-4 py-2 text-white">HomeComponent.jsx</div>
                          <div className="border-r border-gray-600/10 px-4 py-2">App.jsx</div>
                        </div>
                      </div>
                      <div className="px-6 pt-6 pb-14">
                        <HeroSectionCode/>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>)
   }
   
   export default FeatureComponent