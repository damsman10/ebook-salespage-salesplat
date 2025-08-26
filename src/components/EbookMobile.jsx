import bookmobile from '../assets/bookmobile.png';

const EbookMobile = () => {
  return (
    <div className="md:hidden bg-white px-4 py-10 w-full max-w-[480px] mx-auto flex flex-col items-center text-center">
      <div className="bg-[#C9FBFF] text-[#001422] font-semibold text-sm px-4 py-2 rounded-[12px] mb-2">
        “Ignite Your Community, Fuel Your Tribe. Explode Your Growth.”
      </div>

      <img
        src={bookmobile}
        alt="Explosive Marketing eBook"
        className="w-[328px] h-[264px] mb-2 rotate-[22.59deg] drop-shadow-lg"
      />

      <div className="text-[#001422]">
        <h2 className="text-lg font-bold mb-4 leading-snug font-raleway">
          This eBook offers actionable insights, strategies, and real world examples to help you succeed.
        </h2>
        <p className="text-sm text-[#4B5563] font-inter mb-8 leading-relaxed">
          Easy to read. You can finish reading it at a short period of time irrespective of your reading pace.
        </p>
      </div>

      <button className="bg-[#00E1E2] hover:bg-[#00c9c9] transition-all px-6 py-3 rounded-full text-[#001422] font-semibold font-raleway text-base shadow-md">
        Grab your copy
      </button>
    </div>
  );
};

export default EbookMobile;
