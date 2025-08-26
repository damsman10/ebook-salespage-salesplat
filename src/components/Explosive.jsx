import msgico from '../assets/msgico.svg'
import statico from '../assets/statico.svg'
import analyico from '../assets/analyico.svg'

const Explosive = () => {
  return (
    <div className="bg-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        
        <div className="flex-1 min-w-0 flex flex-col gap-5">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-raleway font-bold text-[#001422] text-center md:text-left leading-tight break-words">
            Introducing Explosive <br /> Marketing for SMEs
          </h2>
          <p className="text-[#667085] font-inter text-center md:text-left text-base sm:text-lg md:text-lg leading-relaxed break-words max-w-full">
            The ultimate guide to creating effective, affordable, and results-driven marketing campaigns tailored specifically for small and medium-sized businesses!
          </p>
        </div>

        <div className="flex-1 min-w-0">
          <ul className="flex flex-col gap-6 text-[#001422] text-base sm:text-lg">
            {[{
              icon: msgico,
              text: "Discover the Step-by-Step Blueprint to Attract More Customers"
            }, {
              icon: statico,
              text: "Boost Sales, and"
            }, {
              icon: analyico,
              text: "Dominate Your Market; even on a Tight Budget!"
            }].map(({ icon, text }, i) => (
              <li key={i} className="flex items-start gap-4">
                <img src={icon} alt="" className="w-10 h-10 mt-1 flex-shrink-0" />
                <span className="font-inter font-medium text-base sm:text-lg text-[#101828] leading-relaxed break-words max-w-full">
                  {text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Explosive;
