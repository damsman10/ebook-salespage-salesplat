import fruswoman from '../assets/fruswoman.jpg'

const Solution = () => {
  return (
    <div className="bg-[#F5F5F5] py-[96px] px-6 md:px-0">
      <div className="flex flex-col-reverse md:flex-row px-0 md:px-8 gap-16 items-center max-w-[1280px] mx-auto">

        <div className="left flex-1 text-[#101828]">
          <h2 className="text-[24px] text-center md:text-left md:text-[36px] font-semibold leading-[150%] mb-6 font-raleway">
            Are you struggling to get your small or medium-sized business noticed in a crowded market? Do you feel like you're wasting time and money on marketing strategies that just don't work?
          </h2>
          <p className="text-[#667085]  font-inter font-normal text-base md:text-[20px] leading-[30px]">
            You're not alone. Most SMEs face the same challenges, but the good news is, there’s a solution.
          </p>
        </div>

        <div className="right flex-1 w-full">
          <img
            src={fruswoman}
            alt="Frustrated businesswoman"
            className="w-full max-w-[576px] h-auto md:h-[560px] object-cover mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Solution;
