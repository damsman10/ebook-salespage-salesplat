import girl from '../assets/wm.png'

const Hero = () => {
  return (
    <div className="w-full min-h-screen md:h-[802px] px-6 md:px-[80px] pt-[7rem] pb-[96px] bg-[#F8F7F4]">
      <div className="w-full max-w-[1279px] mx-auto px-0 md:px-[32px] flex flex-col md:flex-row justify-between items-center gap-[64px] md:h-[549px]">
        
        <div className="w-full md:w-[60%] mb-10 md:mb-0">
          <h1 className="text-[36px] md:text-[60px] leading-[2.8rem] md:leading-[4rem] font-bold mb-4 font-raleway text-[#252525]">
            <span className="text-[#04585D]">Explosive Marketing </span><br className="hidden md:block" />For SMEs
          </h1>
          <p className="font-normal mb-12 text-[16px] md:text-[18px] font-raleway leading-[1.8rem] md:leading-[2.3rem] text-[#252525]">
            Unlock the simple but powerful Secrets to Explosive Growth <br className="hidden md:block" /> for Your Small Business with Proven Marketing Strategies!
          </p>
          <button className="cta bg-[#00E1E2] py-[16px] px-[32px] md:py-[20px] md:px-[36px] rounded-[30px] border border-[#252525] font-raleway font-bold text-[16px] md:text-[18px] text-[#252525]">
            Buy Now
          </button>
        </div>

        <div
          className="w-full md:w-[40%] h-[300px] md:h-full rounded-[20px] bg-cover bg-center"
          style={{ backgroundImage: `url(${girl})` }}
        ></div>
      </div>
    </div>
  )
}

export default Hero
