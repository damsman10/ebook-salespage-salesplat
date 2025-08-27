import books from '../assets/books.png';

const ExplosiveMobile = () => {
  return (
    <div className="bg-white px-4 pt-10 pb-12 md:hidden ">
      <h2 className="text-[#00343A] font-raleway text-[16px] font-bold font-raleway leading-snug mb-2">
        Introducing <span className="underline">Explosive Marketing for SMEs</span>
      </h2>
      <p className="text-[#00343A] font-normal text-[16px] font-inter leading-[150%] mb-6">
        The ultimate guide to creating effective, affordable, and results-driven marketing campaigns tailored specifically for small and medium-sized businesses!
      </p>

      <div className="flex justify-center">
        <img
          src={books}
          alt="Explosive Marketing for SMEs book"
          className="w-[343px] h-[166px] mt-12 object-contain"
        />
      </div>
    </div>
  );
};

export default ExplosiveMobile;
