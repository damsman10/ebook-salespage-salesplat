import book from '../assets/book.png'

const BumperOffer = () => {
  return (
    <div className="py-24 px-6 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto">

        <h2 className="font-raleway text-[24px] md:text-[36px] leading-[125%] font-bold text-[#00343A] md:text-[#001422] mb-4 max-w-full md:max-w-[563px] break-words">
          GET THIS BUMPER OFFER FOR NOW
        </h2>

        <p className="text-[#00343A] font-raleway font-normal leading-[150%] text-[16px] md:text-[24px] mb-1 max-w-full md:max-w-[1141px] break-words">
          This will be the best N7,500 you will ever spend
        </p>
        <p className="text-[#00343A] font-raleway font-normal leading-[150%] text-[16px] md:text-[24px] mb-1 max-w-full md:max-w-[1141px] break-words">
          This deal is “as cheap as your lunch...” If you are outside Nigeria, you can pay with your card in your local currency.
        </p>
        <p className="text-[#00343A] font-raleway font-normal leading-[150%] text-[16px] md:text-[24px] mb-6 md:mb-12 max-w-full md:max-w-[1141px] break-words">
          Simply tap the Buy Now and then the Pay Now button, you can pay in many currencies
        </p>

        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-8 w-full max-w-[1280px]">

          <div className="left bg-[#003D3D] text-white rounded-[20px] md:rounded-l-[40px] p-8 md:p-18 w-full md:w-1/2 flex flex-col justify-center">
            <p className="text-[20px] md:text-[24px] leading-[1.8] mb-6 font-raleway font-medium max-w-full md:max-w-[514px] break-words">
              Don’t Miss Out on This Opportunity to Transform Your Business! Click the Button Below to Get Instant Access to <span className="text-[#00FFFF]">Explosive Marketing for SMEs</span> Now
            </p>

            <button className="bg-white mt-4 w-[130px] h-[50px] md:w-[177px] md:h-[76px] rounded-[30px] md:rounded-[20px] border-[1px] text-[#252525] font-bold text-[18px] md:text-[24px] font-raleway px-4 py-2 max-w-full">
              Buy Now
            </button>
          </div>

          <div className="w-full md:w-1/2">
            <img src={book} alt="book" className="max-w-full h-auto rounded-[20px] -ml-5 md:ml-0 overflow-hidden" />
          </div>

        </div>
        
      </div>
    </div>
  )
}

export default BumperOffer;
