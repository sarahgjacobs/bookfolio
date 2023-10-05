import Book from './Card';
import tc from '../images/thecircuit.jpeg'

function TheCircuit() {
  return (
    <div className='w-full text-black bg-white py-16 px-4 '>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-1 pr-6' src={tc} alt="/" />
        <div className='flex flex-col justify-center'>
          <p className='text-[#48d3e8]  font-bold '>
            Step into the world of...
            <h1 className='md:text-4xl sm:text-3xl text-2xl text-black font-bold py-2'>The Circuit</h1>

          </p>
          <p className='text-black '>In the sprawling neon-lit labyrinth of the digital underworld, 
          Lily reigns supreme—a coding genius with a prickly personality. She's a loner, preferring 
          lines of code to human connection. Her singular obsession? Joining The Circuit, a legendary
           hacking collective that once dominated cyberspace, setting records with audacious takedowns 
           and lightning-fast hacks. But The Circuit vanished without a trace, leaving Lily hungering to 
           unearth their secrets.

            Then, in a mind-bending twist, The Circuit's dormant account flickers to life. Simultaneously, 
            Lily's impregnable digital fortress crumbles, leaving her vulnerable. Her only lifeline? A 
            mysterious hacker who, against all odds, seems to understand her. As their unlikely partnership 
            sparks, Lily discovers that this enigmatic figure and his ragtag crew are the last remnants of
             The Circuit, stripped of their power by a malevolent hacking syndicate.

            Lily's expertise lies in offensive hacking—an invaluable skill that The Circuit now lacks.
             Armed with her formidable talents, can they recapture their former glory and rise again to 
             become the unchallenged rulers of the digital realm? In a world where trust is scarce and 
             secrets hold the key to unimaginable power, Lily and The Circuit must navigate perilous 
             virtual landscapes to resurrect their legendary status.</p>

          <button className='text-[#48d3e8] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 bg-black '><a href="https://www.amazon.com/Circuit-Sarah-Jacobs/dp/B0B45C7KNS/ref=sr_1_8?crid=1XSC1CJX1UMM8&keywords=the+circuit+sarah+jacobs&qid=1696549916&s=books&sprefix=the+circuit+sarah+jacobs%2Cstripbooks%2C102&sr=1-8">More Info</a></button>

        </div>
      </div>
    </div>
  )
}

export default TheCircuit