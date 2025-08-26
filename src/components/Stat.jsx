import icon from '../assets/statico.svg'

const Stats = () => {
  return (
    <div className="w-full bg-white py-24 px-6 md:px-20 text-center">
      <div className="flex justify-center mb-6 font-raleway">
        <div className="w-12 h-12 bg-[#E6FAF9] rounded-full flex items-center justify-center">
          <img src={icon} alt="icon" className="w-[32px] h-[32px] md:w-[56px] md:h-[56px]" />
        </div>
      </div>

      <h2 className="text-[18px] md:text-[36px] font-bold leading-[125%] max-w-[768px] mx-auto text-[#001422] mb-12 px-2 md:px-0">
        We have worked with over 4,000 SMEs, Coached Hundreds and 3x to 10x their revenue, learn the steps we have seen to work even if you’re not a marketing expert.
      </h2>

      <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-16">
        {[
          { number: '4000+', label: 'SMEs Worked with' },
          { number: '600', label: 'SMEs coached' },
          { number: '10X', label: 'Revenue Increase' },
        ].map(({ number, label }, i) => (
          <div key={i} className="flex flex-col items-center">
            <span className="text-[#008C91] text-[48px] md:text-[62px] font-raleway font-bold">{number}</span>
            <p className="text-[#101828] text-center text-[16px] md:text-[18px] font-inter">{label}</p>
          </div>
        ))}

        {/* Vertical separators on desktop */}
        <div className="hidden md:flex flex-row justify-center items-center gap-16 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full max-w-[768px] pointer-events-none">
          <div className="w-px h-12 bg-gray-200"></div>
          <div className="w-px h-12 bg-gray-200"></div>
        </div>
      </div>
    </div>
  )
}

export default Stats
