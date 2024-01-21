import mobileSvg from "./assets/images/illustration-sign-up-mobile.svg"
import desktopSvg from "./assets/images/illustration-sign-up-desktop.svg"
import list from "./assets/images/icon-list.svg"
import Email from "./Email.tsx"


const App: React.FC = () => {
 

  return (
    <div className="text-[16px] container w-full mx-auto">
      <div className='flex w-full' >
        <img src={mobileSvg} alt="mobile image" className=""/>
      </div>
      <div className="p-5">
        <h1 className="text-[30px] font-bold pb-3">Stay updated!</h1>
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
  )
}

export default App
