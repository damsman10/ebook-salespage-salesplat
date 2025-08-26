import logo from '../assets/ebook-logo.png'
import tw from '../assets/tw.svg'
import lin from '../assets/lin.svg'
import fb from '../assets/fb.svg'
import ins from '../assets/ins.svg'
import you from '../assets/you.svg'

const Footer = () => {
  return (
    <footer className="bg-[#F4F6F7] py-10 md:py-24 px-6 md:px-20">
      <div className="mx-auto rounded-[20px] bg-white py-8 px-6 md:px-12 max-w-full md:max-w-[1184px]">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 mb-10">
          <div className="space-y-3">
            <h4 className="font-medium font-raleway text-[#606E7A] leading-[20px] text-sm">Tech Tools & Solutions</h4>
            <ul className="space-y-2 text-[16px] font-raleway font-semibold leading-[24px] text-[#474F57]">
              <li>AuxHr</li>
              <li>Supportpro</li>
              <li>Incubate</li>
              <li>Incubate for Business</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-medium font-raleway text-[#606E7A] leading-[20px] text-sm">For you</h4>
            <ul className="space-y-2 text-[16px] font-raleway font-semibold leading-[24px] text-[#474F57]">
              <li>Become an Instructor</li>
              <li>Start Recruiting</li>
              <li>Become a Coach</li>
              <li>Learn about our pricing</li>
              <li>View Courses Catalog</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-medium font-raleway text-[#606E7A] leading-[20px] text-sm">Company</h4>
            <ul className="space-y-2 text-[16px] font-raleway font-semibold leading-[24px] text-[#474F57]">
              <li>About Us</li>
              <li>Careers</li>
              <li>Press & Media</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-medium font-raleway text-[#606E7A] leading-[20px] text-sm">Resources</h4>
            <ul className="space-y-2 text-[16px] font-raleway font-semibold leading-[24px] text-[#474F57]">
              <li>Blog</li>
              <li>Videos</li>
              <li>Podcasts</li>
              <li>Events</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-medium font-raleway text-[#606E7A] leading-[20px] text-sm">Legal</h4>
            <ul className="space-y-2 text-[16px] font-raleway font-semibold leading-[24px] text-[#474F57]">
              <li>Terms</li>
              <li>Privacy</li>
              <li>Cookies</li>
              <li>Licenses</li>
            </ul>
          </div>
        </div>

        <div className="bg-[#E4E7E9] rounded-lg p-6 flex flex-col md:flex-row items-center justify-between gap-6 mb-10">
          <div className="text-center md:text-left">
            <p className="font-semibold font-raleway text-[20px] leading-[30px] text-[#17191C] mb-1">Join our newsletter</p>
            <p className="text-[16px] font-normal font-raleway leading-[24px] text-[#474F57]">
              We'll send you a nice letter once per week. No spam.
            </p>
          </div>
          <form className="flex w-full md:w-auto gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="rounded-l-md border-[1.6px] border-[#101828] px-5 py-3 flex-grow md:flex-grow-0 focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
            <button
              type="submit"
              className="bg-[#101828] py-3 px-6 text-white font-semibold font-raleway text-[16px] leading-[100%] rounded-r-md"
            >
              Subscribe
            </button>
          </form>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <img
              src={logo}
              alt="Salesplat logo"
              className="w-[150px] h-[34px]"
            />
            <span className="text-[16px] font-raleway font-normal leading-[24px] text-[#606E7A] text-center md:text-left">
              © 2024 Salesplat Technologies. All rights reserved.
            </span>
          </div>

          <div className="flex gap-6 md:gap-8">
            <a href="#"><img src={tw} alt="twitter" /></a>
            <a href="#"><img src={lin} alt="linkedin" /></a>
            <a href="#"><img src={fb} alt="facebook" /></a>
            <a href="#"><img src={ins} alt="instagram" /></a>
            <a href="#"><img src={you} alt="youtube" /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
