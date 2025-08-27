import msgico from '../assets/msgico.svg'
import statico from '../assets/statico.svg'
import analyico from '../assets/analyico.svg'

const WhyExplosive = () => {
  const leftItems = [
    {
      icon: msgico,
      text: 'Written by Experts: Authored/Co-authored by marketing professionals with over 15 years of experience helping SMEs succeed.'
    },
    {
      icon: statico,
      text: 'Easy to Implement: Primary steps, No jargon, just clear, actionable steps you can start using today.'
    },
    {
      icon: analyico,
      text: 'Proven Results: Strategies that have helped countless businesses achieve measurable growth.'
    },
    {
      icon: analyico,
      text: 'Affordable Investment: Get the knowledge of a marketing consultant at a fraction of the cost.'
    }
  ];

  const rightItems = [
    {
      icon: msgico,
      text: 'Small business owners looking to grow their customer base'
    },
    {
      icon: statico,
      text: 'Marketing managers in SMEs who want to improve their strategies.'
    },
    {
      icon: analyico,
      text: 'Entrepreneurs who want to build a strong brand from scratch.'
    },
    {
      icon: analyico,
      text: 'Anyone who wants to learn how to market effectively on a limited budget.'
    }
  ];

  return (
    <div className="hidden mdbg-[#F5F5F5] pt-24 pb-16 w-full">
      <div className="flex flex-col md:flex-row gap-8 max-w-7xl mx-auto">

        <div className="left flex-1 bg-white rounded-3xl p-12 border-[1px] border-[#E5E5E5] shadow-sm">
          <h3 className="text-[24px] md:text-[36px] font-raleway w-[528px] leading-[125%] font-bold text-[#001422] mb-8">
            Why Choose Explosive Marketing for SMEs
          </h3>
          <ul className="space-y-6">
            {leftItems.map((item, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <img src={item.icon} alt="" className="w-12 h-12 mt-1" />
                <p className="text-[#101828] text-[20px] fomt-inter font-medium leading-[30px]">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="right flex-1 bg-white rounded-3xl p-12 border-[1px] border-[#E5E5E5] shadow-sm">
          <h3 className="text-[24px] md:text-[36px] font-raleway w-[528px] leading-[125%] font-bold text-[#001422] mb-8">
            The steps in this book will work for:
          </h3>
          <ul className="space-y-8">
            {rightItems.map((item, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <img src={item.icon} alt="" className="w-12 h-12 mt-1" />
                <p className="text-[#101828] text-[20px] fomt-inter font-medium leading-[30px]">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WhyExplosive;
