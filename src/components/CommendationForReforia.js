import Book from './Card';
import cfr from '../images/cfr.PNG'

function CommendationForReforia() {
  return (
    <div className='w-full text-black bg-white py-16 px-4 '>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-1 pr-6' src={cfr} alt="/" />
        <div className='flex flex-col justify-center'>
          <p className='text-[#48d3e8]  font-bold '>
            Step into the world of...
            <h1 className='md:text-4xl sm:text-3xl text-2xl text-black font-bold py-2'>Commendation for Reforia</h1>

          </p>
          <p className='text-black '>In the world of "Commendation for Reforia," strength
            isn't just physical; it's a manifestation of the values one holds dear. Kelcia,
            thrust into a perilous situation, manages to escape the clutches of a nefarious
            leader with only her life intact. However, her journey has just begun. To safeguard
            not only her existence but also the lives of others who share her plight, Kelcia
            embarks on a treacherous odyssey to the capital.

            There, she encounters a daunting crucible of rigorous education and relentless sparring.
            But as Kelcia immerses herself deeper into her core values, something extraordinary happens – her
            strength defies all conventional understanding. It's as though the more she adheres to her principles,
            the mightier she becomes. In a world that seems determined to undermine her at every turn, Kelcia's
            unwavering commitment to her beliefs serves as her compass, guiding her through challenges that
            surpass the bounds of comprehension.</p>

          <button className='text-[#48d3e8] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 bg-black '><a href="https://www.amazon.com/Circuit-Sarah-Jacobs/dp/B0B45C7KNS/ref=sr_1_8?crid=1XSC1CJX1UMM8&keywords=the+circuit+sarah+jacobs&qid=1696549916&s=books&sprefix=the+circuit+sarah+jacobs%2Cstripbooks%2C102&sr=1-8">More Info</a></button>

        </div>
      </div>
    </div>
  )
}

export default CommendationForReforia