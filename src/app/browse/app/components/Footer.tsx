import LinkedIn from "./icons/LinkedIn"
import WhatsApp from "./icons/WhatsApp"

const Footer = () => {
  return (
    <footer className="w-full h-full mt-[70px] pb-5">
      <div className="md:w-2/5 mx-auto px-[4%] md:px-0">
        <div className="flex h-6 gap-x-4 mb-[14px]">
          <a target="_blank" href="https://linkedin.com/in/eriickz">
            <LinkedIn />
          </a>
          <a target="_blank" href="https://wa.me/+18299026178">
            <WhatsApp />
          </a>
        </div>
        <ul className="flex flex-wrap text-1.5xs font-NetflixSansRegular text-app-footer-text [&>li]:basis-[50%] md:[&>li]:basis-[25%] hover:[&>li]:underline hover:[&>li]:cursor-pointer gap-y-3">
          <li>
            <a>Audio Description</a>
          </li>
          <li>
            <a>Help Center</a>
          </li>
          <li>
            <a>Gift Cards</a>
          </li>
          <li>
            <a>Media Center</a>
          </li>
          <li>
            <a>Investor Relations</a>
          </li>
          <li>
            <a>Jobs</a>
          </li>
          <li>
            <a>Terms of Use</a>
          </li>
          <li>
            <a>Privacy</a>
          </li>
          <li>
            <a>Legal Notices</a>
          </li>
          <li>
            <a>Cookie Preferences</a>
          </li>
          <li>
            <a>Corporate Information</a>
          </li>
          <li>
            <a>Contact Us</a>
          </li>
        </ul>
        <div className="flex flex-col">
          <button className="border border-app-footer-text w-fit font-NetflixSansRegular text-app-footer-text text-1.5xs p-[6px] mt-7 hover:text-white mb-5">
            Service Code
          </button>
          <a href="https://erickrm.com" target="_blank" className="text-[11px] text-app-footer-text font-NetflixSansRegular hover:underline">Created by @eriickz</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
