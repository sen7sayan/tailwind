import { ChevronDown } from "lucide-react";

export default function Navbar() {
   return (
      <nav className='bg-white shadow-md flex py-4 px-6 justify-between items-center'>
          <h1 className="text-2xl font-bold text-blue-600">MyBrand</h1>
          <div className='flex items-center gap-8'>
              <a href='/' className='hover:text-blue-600'>Home </a>
              <div className='group relative'>
                  <button className="flex items-center gap-2 hover:text-blue-600">
                      Products
                      <ChevronDown
                          size={18}
                          className="transition-transform duration-300 group-hover:rotate-180"
                      />
                  </button>
                 
                  <div className='absolute left-0 top-full bg-white w-48 shadow-md rounded-md py-2 hidden group-hover:block ' >
                      <a href='/web' className='px-4 py-2 block  hover:bg-gray-100'>Web Development</a>
                      <a href="/mobile"  className='px-4 py-2 block  hover:bg-gray-100'>Mobile Apps</a>
                      <a href='/api'  className='px-4 py-2 block hover:bg-gray-100'>Api Services</a>
                  </div>
              </div>
              <a href='/about' className='hover:text-blue-600'>About</a>
              <a href='/product' className='bg-blue-600 text-white px-4 py-2 rounded'>Contact</a>
          </div>
      </nav>
    )
}
