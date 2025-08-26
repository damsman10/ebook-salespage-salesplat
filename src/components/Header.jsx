import { useState } from 'react';
import logo from '../assets/ebook-logo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-[#F8F7F4] pt-8 px-6 md:px-[80px]">
      <div className="flex justify-between items-center h-[61px] max-w-[1440px] mx-auto">
        <div className="logo">
          <img src={logo} alt="logo" className="h-[43px] w-[160px]" />
        </div>

        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            <svg
              className="w-6 h-6 text-[#252525]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        <nav className="hidden lg:flex items-center gap-[60px]">
          <ul className="font-raleway text-[20px] leading-[100%] text-[#252525] font-semibold flex gap-[60px]">
            <li>Home</li>
            <li>Preview</li>
            <li>Contact us</li>
          </ul>
        </nav>

        <div className="hidden lg:block">
          <button className="cta bg-[#00E1E2] pt-[20px] pr-[36px] pb-[20px] pl-[36px] rounded-[30px] border border-[#252525] font-raleway font-bold text-[18px] text-[#252525]">
            Buy Now
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden mt-6 space-y-4">
          <ul className="font-raleway text-[18px] text-[#252525] font-semibold flex flex-col gap-4">
            <li>Home</li>
            <li>Preview</li>
            <li>Contact us</li>
          </ul>
          <button className="w-full bg-[#00E1E2] py-3 rounded-[30px] border border-[#252525] font-raleway font-bold text-[18px] text-[#252525]">
            Buy Now
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
