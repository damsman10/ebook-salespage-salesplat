import g1 from '../assets/g1.svg'
import g2 from '../assets/g2.svg'
import g3 from '../assets/g3.svg'

const Gettings = () => {
  const cards = [
    {
      image: g1,
      title: 'Build your marketing budget from scratch',
      text: 'Clear steps to create and manage a budget that fuels growth.',
    },
    {
      image: g2,
      title: 'Leverage Digital Marketing',
      text: 'Harness the power of social media, email marketing, and SEO to reach your target customers.',
    },
    {
      image: g3,
      title: 'Develop a Powerful Brand Identity:',
      text: 'Differentiate yourself from competitors and craft a memorable brand that connects with your audience.',
    },
    {
      image: g2,
      title: 'Cost-Effective Marketing:',
      text: 'Differentiate yourself from competitors and craft a memorable brand that connects with your audience.',
    },
    {
      image: g2,
      title: 'Overcome Common SME Challenges:',
      text: 'Differentiate yourself from competitors and craft a memorable brand that connects with your audience.',
    },
    {
      image: g2,
      title: 'Create Winning Campaigns',
      text: 'Differentiate yourself from competitors and craft a memorable brand that connects with your audience.',
    },
    {
      image: g2,
      title: 'Master how to use community to win the market',
      text: 'Differentiate yourself from competitors and craft a memorable brand that connects with your audience.',
    },
  ]

  return (
    <div className="w-full bg-[#F5F5F5] py-[96px] px-6 md:px-[80px]">
      <h1 className="text-center font-raleway font-bold text-[28px] md:text-[36px] leading-[125%] text-[#001422] mb-12">
        Here’s what you get from the book:
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-[1280px] mx-auto">
        {cards.map((card, index) => (
          <div
            key={index}
            className="p-6 rounded-md flex flex-col gap-4 font-raleway text-[#121212] shadow-sm"
          >
            <img src={card.image} alt="" className="w-[34px] h-[33px]" />
            <h3 className="font-semibold text-[18px] leading-[150%] rotate-[0.72deg]">{card.title}</h3>
            <p className="font-normal text-[16px] leading-[150%] rotate-[0.72deg]">{card.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Gettings
