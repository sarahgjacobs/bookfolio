import { Carousel } from "@material-tailwind/react";
import thecircuit from '../images/thecircuit.jpeg';
import inheritance from '../images/inheritance.jpeg';
import levelup from '../images/levelup.jpg';
 
export default function Home() {
  return (
   
  <div class="bg-[#ececec] relative isolate lg:px-8">
    <div class="mx-auto max-w-2xl py-22 sm:py-28 lg:py-36">
      <div class="hidden sm:mb-8 sm:flex sm:justify-center">
        <div class="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
          Currently preplanning my latest and greatest. <a href="/thecircuit" class="font-semibold text-[#48d3e8]"><span class="absolute inset-0" aria-hidden="true"></span>Read more <span aria-hidden="true">&rarr;</span></a>
        </div>
      </div>
      <div class="text-center">
        <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Dive into the mind of Sarah Jacobs</h1>
        <p class="mt-6 text-lg leading-8 text-grey-700">Step into the extraordinary realms of my storytelling craft, where I conjure intricate plots and fantastical worlds. As a writer of fiction, sci-fi, and fantasy, I invite you to share in my adventures, where each word carries a piece of my heart and every page is an invitation to explore the limitless depths of imagination.</p>
        
      </div>
    </div>
    <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
    </div>
  </div>


  );
}
