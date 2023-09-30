import Book from './Card';

function TheCircuit() {
    return (
      <div className='w-full text-black bg-white py-16 px-4 '>
          <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
              {/* <img className='w-[500px] mx-auto my-1 pr-6' src={Web} alt="/" /> */}
              <div className='flex flex-col justify-center'>
                  <p className='text-[#48d3e8]  font-bold '>
                      Website Development Process
                      
        </p>
                  <button className='text-[#48d3e8] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 bg-black '>The Circuit</button>
  
              </div>
          </div>
      </div>
    )
  }
  
  export default TheCircuit