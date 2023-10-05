import Book from './Card';
import lu from '../images/levelup.jpg'

function LevelUp() {
  return (
    <div className='w-full text-black bg-white py-16 px-4 '>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-1 pr-6' src={lu} alt="/" />
        <div className='flex flex-col justify-center'>
          <p className='text-[#48d3e8]  font-bold '>
            Step into the world of...
            <h1 className='md:text-4xl sm:text-3xl text-2xl text-black font-bold py-2'>Level Up</h1>

          </p>
          <p className='text-black '>In the dystopian world of "Level Up," secrets shroud the very 
          essence of existence, and the enigmatic tale begins with the awakening of Collette Gardner. 
          Emerging from a mysterious coma, Collette finds herself in a world where allies and adversaries 
          lurk behind every shadow, yet her own past remains shrouded in an impenetrable veil.

            High above, nestled upon a desolate mountain, Collette must navigate a treacherous path of 
            self-discovery, her memory a blank slate, and the weight of a destiny she can scarcely comprehend.

            In the chilling darkness of the mountain's embrace, something sinister stirs at the edge of 
            her consciousness. A lurking presence, an ominous secret that defies the boundaries of 
            comprehension. As the nights unfurl, the mountain yields haunting mysteries, inexplicable 
            apparitions—the relentless march of "bodies" whose origins defy logic.

            With the mountain as her crucible, Collette must embark on a perilous journey. Each day is 
            a step towards self-realization, as she labors to rebuild her strength, forging herself anew 
            with each passing moment. The path ahead is a daunting one, for Collette must ascend the next 
            mountain, growing stronger with every challenge, every revelation.

            Bound to the destiny she cannot escape, Collette's forgotten memories hold the key to the fate 
            of not only herself but also the entire mountain community. The future teeters on a precipice, 
            balanced between salvation and devastation, and Collette is the fulcrum upon which it all rests.

            In "Level Up," a gripping dystopian novel, the chilling secrets buried within Collette's past 
            will redefine the future. As she unravels the enigma of her own existence, she becomes the 
            arbiter of destiny, the bearer of hope, and the keeper of the mountain's darkest mysteries. 
            The path to the summit is fraught with peril, and only Collette can decide whether the light 
            of revelation will dawn or if the shadows will forever engulf the mountain, and all who call 
            it home.</p>

          <button className='text-[#48d3e8] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 bg-black '><a href="https://www.amazon.com/Level-Up-Sarah-Jacobs/dp/B09FNNQTYW/ref=sr_1_8?crid=3BDYB74BI96Q0&keywords=level+up+sarah+jacobs&qid=1696550008&s=books&sprefix=level+up+sarah+jacobs%2Cstripbooks%2C91&sr=1-8">More Info</a></button>

        </div>
      </div>
    </div>
  )
}

export default LevelUp