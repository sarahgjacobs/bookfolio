import Book from './Card';
import inheritancePic from '../images/inheritance.jpeg'

function Inheritance() {
  return (
    <div className='w-full text-black bg-white py-16 px-4 '>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-1 pr-6' src={inheritancePic} alt="/" />
        <div className='flex flex-col justify-center'>
          <p className='text-[#48d3e8]  font-bold '>
            Step into the world of...
            <h1 className='md:text-4xl sm:text-3xl text-2xl text-black font-bold py-2'>Inheritance</h1>

          </p>
          <p className='text-black '>"Inheritance: Book One of Two" sweeps you into a breathtaking 
          epic fantasy world where destinies entwine and secrets lie in every shadow. Lessis, a brilliant 
          mind of the empire, finds himself unjustly accused of dark and perilous research. With no other 
          choice, he flees, unknowingly setting in motion a chain of events that will shape the fate of the 
          realm.

            But it is when he crosses paths with Alenia that the true magnitude of his powers is revealed. 
            With a single touch, he glimpses the astonishing potential and strength that reside within her. 
            Devoting his remaining days to her training, Lessis imparts his knowledge and wisdom, preparing 
            Alenia for a destiny she could never have imagined.

            However, tragedy strikes with Lessis's untimely death at the hands of a Deviant, those consumed 
            by uncontrollable powers. Separated from her brother, Alenia's journey leads her to the empire's
             capital in search of a new home and answers. As her powers grow and she draws closer to 
             unlocking her true potential, she becomes a coveted prize for those who once forced Lessis 
             into exile.

            Deviant attacks plague the empire, and whispers in the wind hint at a powerful leader behind 
            these dark forces—an enigma from Alenia's past. To restore balance and peace to the realm, 
            Alenia must harness the inherited powers within her, embarking on a quest that will reveal 
            the depths of her strength and the shocking truths concealed within her bloodline.</p>

          <button className='text-[#48d3e8] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 bg-black '><a href="https://www.amazon.com/Circuit-Sarah-Jacobs/dp/B0B45C7KNS/ref=sr_1_8?crid=1XSC1CJX1UMM8&keywords=the+circuit+sarah+jacobs&qid=1696549916&s=books&sprefix=the+circuit+sarah+jacobs%2Cstripbooks%2C102&sr=1-8">More Info</a></button>

        </div>
      </div>
    </div>
  )
}

export default Inheritance