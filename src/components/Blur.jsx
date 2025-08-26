import blur from '../assets/blur.jpg'
import ebook from '../assets/ebook.png'

const Blur = () => {
  return (
    <div className="relative h-screen max-h-[640px] w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-md scale-110"
        style={{ backgroundImage: `url(${blur})` }}
      ></div>
      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <img
          src={ebook}
          alt="Explosive Marketing For SMEs eBook"
          className="w-3/4 max-w-[340px] rounded shadow-lg"
        />
      </div>
    </div>
  )
}

export default Blur
