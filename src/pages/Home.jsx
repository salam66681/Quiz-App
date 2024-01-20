import React, { useState } from 'react'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import Loading from './Loading';


const Home = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()

    const handleStartQuiz = ()=> {
        setLoading(true);
        setTimeout(()=> {
            navigate('/quiz')
            setLoading(false)
        }, 2500)
    }
  return (
    <section  className='lg:w-9/12 md:w-[98%] px-4 mx-auto mt-12 flex flex-col md:flex-row-reverse 
    justify-between items-center'>
        {
            loading && <Loading/>
        }
         <div className='md:w-1/2 w-full'>
            <img src='/images/background.png' alt='banner' className='w-full mx-auto'/>
        </div>

        <div className='md:w-1/2 w-full space-y-8'>
            <h2 className='lg:text-3xl text-3xl font-medium text-[#333] md:w-4/6 lg:leading-normal 
            leading-normal mb-3 '>Your Gateway to Infinite Knowledge!</h2>
            <p className='py-2 mb-6 text-gray-600 pl-2 border-l-4 border-rose-400 
            text-base'>Spark Your Genius with the QuizFusion Experience</p>
            <div className='text-lg font-medium flex  flex-col  sm:flex-row gap-5'>
            <button onClick={handleStartQuiz} className='bg-red-800 px-6 py-2 text-white hover:bg-red-700 rounded'>
                    Start Quiz</button>
                <button className='inline-flex items-center px-6 py-2 rounded border text-red-800 ml-3
                hover:bg-red-800 hover:text-white transition-all duration-300 ease-in'>
                    <MdOutlineKeyboardArrowRight />Know More</button>
            </div>
        </div>
       
    </section>
  )
}

export default Home