import './App.css'
import Profile from "./assets/Photo.png"
import Project1 from "./assets/OnlineShopping.png"
import Project2 from "./assets/CSEC ASTU.png"


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
          <h2>Projects</h2>
          <div className='flex gap-10'>
            <div className='border rounded-md p-5'>
              <img src= {Project1}  />
              <h3 className='text-lg font-semi-bold mt-8'>Smart Shop Online Shopping</h3>
              <p className='text-gray-400 text-sm mt-2'>Responsive HTML/CSS Layout Project using Java Servlet,Jsp</p>
            </div>
            <div className='border rounded-md p-5'>
              <img src= {Project2}  />
              <h3 className='text-lg font-semi-bold mt-8'>Club Management System</h3>
              <p className='text-gray-400 text-sm mt-2'>Responsive HTML/CSS Layout Project using Nodejs, Expressjs</p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
