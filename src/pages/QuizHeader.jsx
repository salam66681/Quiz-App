import React from 'react'

const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  };

const QuizHeader = ({timer}) => {
  return (
    <div className='shadow-sm my-5 py-2 sticky top-0 bg-white z-10'>
        <div className='w-9/12 mx-auto flex flex-col md:flex-row justify-between items-center'>
            <div className='font-normal'>
            <span className="text-red-700">Attention!</span> You have 60 seconds to
          answer 6 questions.
          <br />
          Please keep an eye on the timer and make sure to answer all questions
          before time runs out.
            </div>

            <div>
                <h1 className='text-xl text-green-700'>{formatTime(timer)}
                <sub className="text-xs ml-1">sec</sub></h1>
                <p>Time Consumed</p>
            </div>
        </div>
    </div>
  )
}

export default QuizHeader