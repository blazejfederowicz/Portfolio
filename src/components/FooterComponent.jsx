import { Reveal } from "../utils/Reveal"

const FooterComponent = ()=>{
    return(<>
    <section id="footer">
      <div className="container mx-auto">
        <footer className=" bg-[rgba(120,119,198,0.1)] sm:rounded-t-3xl p-10 xl:p-14">
          <div className="flex items-center justify-center">
            <blockquote className="relative mb-3">
                <svg className="absolute -top-2 -start-5 md:start-2 lg:-top-5 lg:-start-6 size-6 text-gray-100 dark:text-neutral-500" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z" fill="currentColor"></path>
                </svg>
              <div className="relative z-10">
                <Reveal>
                  <p className="text-gray-500 text-sm md:text-base text-center"><em>
                  Quality is a product of a conflict between programmers and testers. ― Yegor Bugayenk
                  </em></p>
                </Reveal>
              </div>
            </blockquote>
          </div>
          <hr className="text-gray-400"/>
          <div className="flex flex-1 items-start justify-between pt-2">
            <div className="text-xs text-gray-600 me-2">
            <Reveal>
              © Błażej Federowicz Inc. All Rights Reserved {new Date().getFullYear()}
            </Reveal>
            </div>
            <div className="text-xs flex flex-wrap gap-[1px] justify-end text-gray-600 ms-2">
              <a href="#home" className="me-2  cursor-pointer underline-offset-4 hover:underline active:underline">
              <Reveal>
                Home
              </Reveal>  
              </a>
              <a href="#about" className="me-2  cursor-pointer underline-offset-4 hover:underline active:underline">
                <Reveal>
                  About
                </Reveal>
              </a>
              <a href="#projects" className="me-2  cursor-pointer underline-offset-4 hover:underline active:underline">
              <Reveal>
                Projects
              </Reveal>
              </a>
              <a href="#expiriance" className="me-2  cursor-pointer underline-offset-4 hover:underline active:underline">
              <Reveal>
                Expertise
              </Reveal>
              </a>
              <a href="#contact" className="cursor-pointer  underline-offset-4 hover:underline active:underline">
              <Reveal>
                Contact
              </Reveal>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </section>
    </>)
   }
   
   export default FooterComponent