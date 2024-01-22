import mobileSvg from "./assets/images/illustration-sign-up-mobile.svg"
import desktopSvg from "./assets/images/illustration-sign-up-desktop.svg"
import list from "./assets/images/icon-list.svg"
import Email from "./Email.tsx"


const App: React.FC = () => {
 

  return (
    <div className="text-[16px] container w-full mx-auto md:px-5 md:max-w-[1050px]  md:flex md:justify-between md:flex-row-reverse md: md:gap-[30px]">
      <div className='md:h-screen md:flex md:items-center md:align-middle ' >
        <img src={mobileSvg} alt="mobile image" className="md:hidden"/>
        <img src={desktopSvg} alt="desktop image" className="hidden md:block md:h-[90%]" />
      </div>
      <div className="p-5 mt-3 
      font-[600] md:mt-0 
      md:flex
      md:items-center 
      md:h-screen md:text-[20px] md:max-w-[500px]">
        <div>
          <h1 className="text-[38px] font-bold pb-3 md:text-[70px]">Stay updated!</h1>
          <p className="pb-5">Join 60,000+ product managers receiving monthly updates on:</p>
          <div className="space-y-2">
            <div className="flex items-start align-middle gap-3">
              <img src={list} alt="list" />
              <p>Product discovery and building what matters</p>
            </div>
            <div className="flex items-start align-middle gap-3">
              <img src={list} alt="list" />
              <p>Measuring to ensure updates are a success</p>
            </div>
            <div className="flex items-start align-middle gap-3">
              <img src={list} alt="list" />
              <p>And much more!</p>
            </div>
          </div>

          <Email />
        </div>
      </div>
    </div>
  )
}

export default App
