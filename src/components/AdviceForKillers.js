import Book from './Card';
import afk from '../images/afk.PNG'
import Navbar from '../components/Navbar'

function AdviceForKillers() {
  return (
    <div className='w-full text-black bg-white py-16 px-4 '>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-1 pr-6' src={afk} alt="/" />
        <div className='flex flex-col justify-center'>
          <p className='text-[#48d3e8]  font-bold '>
            Step into the world of...
            <h1 className='md:text-4xl sm:text-3xl text-2xl text-black font-bold py-2'>Advice for Killers</h1>

          </p>
          <p className='text-black '>In "Advice for Killers," Peter and Juliette share a love that 
          runs deeper than words can convey. But when a chaotic and sinister plan shatters their world, 
          they find themselves on opposite sides of a deadly game. Peter's father, the head of Securos, 
          a globally renowned security giant, is brutally murdered, setting off a relentless race to 
          claim the throne and control the monopoly Securos has established over the world's security.

            Peter is thrust into a harrowing battle, not only against his power-hungry brother but also 
            to protect the security of the world's most influential organizations. To ascend to the throne 
            and safeguard the future of Securos, he must leave behind the woman he loves, Juliette. As 
            Peter embarks on this treacherous journey, he soon realizes that he will need more than just 
            cunning and strength to survive. He must seek advice from unlikely sources, navigate a 
            treacherous web of deceit, and make choices that could lead to either salvation or ruin. In 
            a world where trust is a rare commodity, Peter's quest for guidance takes him to the darkest 
            corners of his own morality.</p>

          <button className='text-[#48d3e8] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 bg-black '><a href="https://www.amazon.com/Circuit-Sarah-Jacobs/dp/B0B45C7KNS/ref=sr_1_8?crid=1XSC1CJX1UMM8&keywords=the+circuit+sarah+jacobs&qid=1696549916&s=books&sprefix=the+circuit+sarah+jacobs%2Cstripbooks%2C102&sr=1-8">More Info</a></button>

        </div>
      </div>
    </div>
  )
}

export default AdviceForKillers