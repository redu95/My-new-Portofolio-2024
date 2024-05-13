import './App.css'
import Profile from "./assets/Photo.png"
import Project1 from "./assets/OnlineShopping.png"
import Project2 from "./assets/CSEC ASTU.png"
import Project3 from "./assets/ASTU UI_UX.png"

function App() {
  return (
    <>
      <header>
        <div className='container m-auto px-4 py-6'>
          <div className='flex justify-between'>
            <div className='flex justify-between items-center'>
              <h1 className='font-bold text-xl'>Rediet Portofolio</h1>
            </div>
            <div>
              <ul className='flex gap-3'>
                <li>
                  <a className='text-gray-400 hover:text-white cursor-pointer'>Projects</a>
                </li>
                <li>
                  <a className='text-gray-400 hover:text-white cursor-pointer'>Technologies</a>
                </li>
                <li>
                  <a className='text-gray-400 hover:text-white cursor-pointer'>About me</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <main>
        {/* Intro/Banner section */}
        <section>
          <div className='container m-auto px-4 py-10 flex gap-6'>
            <div>
              <h1 className='font-bold text-4xl'>Hello, I am Rediet </h1>
              <h1 className='font-bold text-4xl mt-1 gradiant-text'>Frontend Developer.</h1>
              <p className='mt-4 text-gray-400'>A Software engineering student at Adama Science and Technology University
                    who is passionate about creating innovative solutions for real-world problems 
              </p>
            </div>
            <div>
              <img src={Profile} width={520} />
              <img src="" alt="" />
            </div>
          </div>
        </section>
        {/* Projects Section */}
        <section className='comtainer m-auto'>
          <h2 className='font-bold text-4xl mt-1'>Projects</h2>
          <div className='flex gap-10'>
            <div className='border border-gray-500 rounded-md p-5'>
              <img src= {Project1} className='w-full h-auto' />
              <h3 className='text-lg font-semi-bold mt-8'>Smart Shop Online Shopping</h3>
              <p className='text-gray-400 text-sm mt-2'>Responsive HTML/CSS Layout Project using Java Servlet,Jsp</p>
              <div className='flex justify-evenely mt-12'>
                <button className='px-6 py-3 bg-gradient-to-t from-purple-500 to-pink-500 hover:from-purple-700 hover:to-pink-700 border rounded-full'>Live Preview</button>
                <button className='px-6 py-3 border rounded-full hover:border-purple-500 hover:text-purple-500'>Checkout github</button>
              </div>
            </div>
            <div className='border border-gray-500 rounded-md p-5'>
              <img src= {Project2} className='w-full h-auto' />
              <h3 className='text-lg font-semi-bold mt-8'>Club Management System</h3>
              <p className='text-gray-400 text-sm mt-2'>Responsive HTML/CSS Layout Project using Nodejs, Expressjs</p>
              <div className='flex justify-evenely mt-12'>
                <button className='px-6 py-3 bg-gradient-to-t from-purple-500 to-pink-500 hover:from-purple-700 hover:to-pink-700 border rounded-full'>Live Preview</button>
                <button className='px-6 py-3 border rounded-full hover:border-purple-500 hover:text-purple-500'>Checkout github</button>
              </div>
            </div>
          </div>

          <div className='flex gap-10'>
            <div className='border border-gray-500 rounded-md p-5'>
              <img src= {Project3} className='w-full h-auto' />
              <h3 className='text-lg font-semi-bold mt-8'>Redesigning ASTU Official Website</h3>
              <p className='text-gray-400 text-sm mt-2'>Responsive UI/UX Design in Figma</p>
              <div className='flex justify-evenely mt-12'>
                <button className='px-6 py-3 bg-gradient-to-t from-purple-500 to-pink-500 hover:from-purple-700 hover:to-pink-700 border rounded-full'>Live Preview</button>
                <button className='px-6 py-3 border rounded-full hover:border-purple-500 hover:text-purple-500'>Checkout github</button>
              </div>
            </div>
            <div className='border border-gray-500 rounded-md p-5'>
              <img src= {Project2} className='w-full h-auto' />
              <h3 className='text-lg font-semi-bold mt-8'>Club Management System</h3>
              <p className='text-gray-400 text-sm mt-2'>Responsive HTML/CSS Layout Project using Nodejs, Expressjs</p>
              <div className='flex justify-evenely mt-12'>
                <button className='px-6 py-3 bg-gradient-to-t from-purple-500 to-pink-500 hover:from-purple-700 hover:to-pink-700 border rounded-full'>Live Preview</button>
                <button className='px-6 py-3 border rounded-full hover:border-purple-500 hover:text-purple-500'>Checkout github</button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
