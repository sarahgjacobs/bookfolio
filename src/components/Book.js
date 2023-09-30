import React from 'react'
import thecircuit from '../images/thecircuit.jpeg';

const book = [
  {
    id: 1,
    title: "Services",
    description: "Tuter is a social network for tutors and students to share questions, homework details and more in an online, efficient platform. Now tutors can be accurately prepared to show up to sessions with the right materials and expectations in hand. It's as simple as uploading a picture of your homework, filling out a few questions and submitting it. Then you're done and on your way to better learning!",
    image: thecircuit,
    link: "https://sarahgjacobs.github.io/services/"
  },
  {
    id: 2,
    title: "BlogIt",
    description: "BlogIt is an interactive, modern blogging website that allows users to register, login, browse and upload articles. It provides an intuitive and user-friendly interface for individuals to share their thoughts, ideas, and experiences with the world.",
    image: thecircuit,
    link: "https://github.com/sarahgjacobs/blogit"
  },
  {
    id: 3,
    title: "Pete's Za",
    description: "Hey there, pizza enthusiasts! Get ready to dive into the world of flavor-packed goodness with Pete's Za, your go-to pizza haven since 2023. We're all about serving up pies that not only hit the spot but also leave you craving more.",
    image: thecircuit,
    link: "https://sarahgjacobs.github.io/petes-za/"
  },
  {
    id: 4,
    title: "Tuter",
    description: "Tuter is a social network for tutors and students to share questions, homework details and more in an online, efficient platform. Now tutors can be accurately prepared to show up to sessions with the right materials and expectations in hand. It's as simple as uploading a picture of your homework, filling out a few questions and submitting it. Then you're done and on your way to better learning!",
    image: thecircuit,
    link: "https://github.com/thebobfather2/tuterapp"
  },
  {
    id: 5,
    title: "PawPals",
    description: "Welcome to the Paw Pals! Our mission is to help find loving homes for animals in need. Whether you're looking for a cuddly cat, a playful pup, or a quirky rabbit, you'll find your perfect match here. Our extensive database of available pets includes detailed information on breed, age, personality, and more to help you find the right fit for your family. Adopting a pet is a big decision, and we're here to support you every step of the way. Our knowledgeable staff is available to answer any questions you may have, and our resources page includes information on pet care, training, and more. Start your search today and give an animal in need a second chance at a happy home!",
    image: thecircuit,
    link: "https://github.com/thebobfather2/pawpals"
  },
  {
    id: 6,
    title: "Sarah Jacobs Writes",
    description: "Sarah Jacobs is an aspiring author with an array of books and short stories in her portfolio. She uses this website as her landing page for friends and family to browse through her works as well as purchase products through Amazon links.",
    image: thecircuit,
    link: "https://github.com/sarahgjacobs/sarahjacobswrites"
  },
  {
      id: 7,
      title: "Carrot Calendar",
      description: "Gaining over $100k in revenue per year, Bobbys Rabbits needed a simple, efficient way to coordinate community events to boost interaction and sales. Carrot Calendar is a user-friendly calendar intended to handle online events, RSVPs and monetary transactions.",
      image: thecircuit,
      link: "https://github.com/thebobfather2/carrotcalendar"
    },
   
];

const Card = ({ title, description, image, link }) => {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
    <button className="card-button">Learn More</button>
  </a>
    </div>
  );
};


function Book() {
  return (
    <div className='w-full text-black bg-white py-16 px-4 '>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            {/* <img className='w-[500px] mx-auto my-1 pr-6' src={Web} alt="/" /> */}
            <div className='flex flex-col justify-center'>
                <p className='text-[#48d3e8]  font-bold '>
                    Website Development Process
                    {book.map((book) => (
        <Card
          key={book.id}
          title={book.title}
          description={book.description}
          image={book.image}
          link={book.link}
        />
      ))}</p>
                <button className='text-[#48d3e8] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 bg-black '>Get Started</button>

            </div>
        </div>
    </div>
  )
}

export default Book