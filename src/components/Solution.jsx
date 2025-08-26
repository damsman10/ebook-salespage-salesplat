import fruswoman from '../assets/fruswoman.jpg';

const Solution = () => {
  return (
    <>
      <div className="bg-white px-4 pt-10 pb-6 md:hidden text-center">
        <h2 className="text-[#00343A] text-[20px] font-bold font-raleway mb-4 leading-snug font-raleway ">
          We have worked with over 4,000 SMEs, Coached Hundreds and 3x to 10x their revenue, learn the steps we have seen to work even if you’re not a marketing expert.
        </h2>
        <div className="text-[#00343A] text-[20px] text-left font-raleway mb-4">
          In this book, you will
        </div>
        <ul className="text-left text-[#00343A] font-raleway space-y-2">
          <li>Discover the Step-by-Step Blueprint to Attract More Customers</li>
          <li>Boost Sales, and</li>
          <li>Dominate Your Market; even on a Tight Budget!</li>
        </ul>
      </div>

      <div className="bg-white md:bg-[#F5F5F5] py-[30px] md:py-[96px] px-4 md:px-8">
        <div className="flex flex-col-reverse md:flex-row gap-8 md:gap-16 items-center max-w-[1280px] mx-auto">
          <div className="left flex-1 text-[#101828]">
            <h2 className="text-[20px] font-normal md:text-[36px] md:font-semibold leading-[150%] mb-4 md:mb-6 font-raleway text-left">
              Are you struggling to get your small or medium-sized business noticed in a crowded market? Do you feel like you're wasting time and money on marketing strategies that just don't work?
            </h2>
            <p className="hidden md:block text-[#667085] font-inter text-sm md:text-[20px] leading-[24px] md:leading-[30px] text-center md:text-left">
              You're not alone. Most SMEs face the same challenges, but the good news is, there’s a solution.
            </p>
          </div>

          <div className="right flex-1 w-full">
            <img
              src={fruswoman}
              alt="Frustrated businesswoman"
              className="w-full max-w-[576px] h-[220px] md:h-[560px] object-cover rounded-md mx-auto"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Solution;
