import image from '../assets/vid.jpg'

const Order = () => {
  const cards = [
    {
      title: 'Instant E-Book Access',
      text: 'Download the PDF and start learning immediately',
    },
    {
      title: 'Bonus Resources',
      text: 'Templates, checklists, and tools to streamline your marketing',
    },
    {
      title: 'Lifetime Updates',
      text: 'Receive free eBook updates with new strategies and trends',
    },
  ]

  return (
    <div className="w-full mt-8 md:mt-0 py-10 bg-[#C0FEFF] md:py-[96px] px-6 md:px-[80px] md:bg-white text-center">
      <h2 className="text-[20px] md:text-[36px] font-raleway font-bold leading-[125%] max-w-[988px] mx-auto text-[#001422] mb-16">
        Order “Explosive marketing for SMEs” (eBook) for N7,500 or $7.5 today and enjoy all these Bonuses.
      </h2>

      <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 px-0 md:px-8 mb-16">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex-1 max-w-full md:max-w-[390px] bg-white border border-black md:border-0 md:bg-[#04585D] px-6 py-3 md:py-8 flex flex-col gap-6 text-[#006C72] md:text-white rounded-[20px] md:rounded-lg"
          >
            <h3 className="text-[20px] md:text-[24px] font-raleway font-bold text-center">
              {card.title}
            </h3>
            <p className="text-[16px] font-raleway font-medium leading-[150%] text-center text-black md:text-[#EDFFFE]">
              {card.text}
            </p>
          </div>
        ))}
      </div>

      <div className=" hidden md:flex justify-center px-0 md:px-8">
        <img
          src={image}
          alt="video"
          className="rounded-lg shadow-lg w-full max-w-[768px] h-auto md:h-[432px] object-cover"
        />
      </div>
    </div>
  )
}

export default Order
