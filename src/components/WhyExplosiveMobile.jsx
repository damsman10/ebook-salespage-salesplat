import { FaCheckCircle } from 'react-icons/fa';
import { FiArrowRightCircle } from 'react-icons/fi';

const WhyExplosiveMobile = () => {
  return (
    <div className="bg-white px-4 py-10 md:hidden text-[#00343A] font-raleway">
      <h2 className="text-[24px] font-bold leading-snug mb-6">
        Why Choose <span className="underline">Explosive Marketing for SMEs</span>
      </h2>

      <ul className="space-y-4 text-[16px] font-normal text-[#344054] mb-8">
        <li className="flex items-start gap-3">
          <span className="text-teal-500 mt-1"><FaCheckCircle size={16} /></span>
          Written by Experts: Authored/Co-authored by marketing professionals with over 15 years of experience helping SMEs succeed.
        </li>
        <li className="flex items-start gap-3">
          <span className="text-teal-500 mt-1"><FaCheckCircle size={16} /></span>
          Easy to Implement: Primary steps, no jargon, just clear, actionable steps you can start using today.
        </li>
        <li className="flex items-start gap-3">
          <span className="text-teal-500 mt-1"><FaCheckCircle size={16} /></span>
          Proven Results: Strategies that have helped countless businesses achieve measurable growth.
        </li>
        <li className="flex items-start gap-3">
          <span className="text-teal-500 mt-1"><FaCheckCircle size={16} /></span>
          Affordable Investment: Get the knowledge of a marketing consultant at a fraction of the cost.
        </li>
      </ul>

      <div className="border-2 border-[#00B9B9] rounded-xl p-4">
        <h3 className="text-[#00343A] text-[30px] font-bold mb-4">
          The steps in this book will work for:
        </h3>
        <ul className="space-y-4 text-[#00343A] text-[16px]">
          <li className="flex items-start gap-3">
            <FiArrowRightCircle className="text-[#00B9B9] mt-1" size={18} />
            Small business owners looking to grow their customer base.
          </li>
          <li className="flex items-start gap-3">
            <FiArrowRightCircle className="text-[#00B9B9] mt-1" size={18} />
            Marketing managers in SMEs who want to improve their strategies.
          </li>
          <li className="flex items-start gap-3">
            <FiArrowRightCircle className="text-[#00B9B9] mt-1" size={18} />
            Entrepreneurs who want to build a strong brand from scratch.
          </li>
          <li className="flex items-start gap-3">
            <FiArrowRightCircle className="text-[#00B9B9] mt-1" size={18} />
            Anyone who wants to learn how to market effectively on a limited budget.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WhyExplosiveMobile;
