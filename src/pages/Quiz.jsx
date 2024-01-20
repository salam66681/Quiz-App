import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import QuizHeader from './QuizHeader';

const Loading = ()=> {
  
    return (<div className='h-[220px] w-[220px] mx-auto mt-8 flex flex-col justify-center items-center 
    border-2 rounded-tr-[50%] rounded-bl-[50%]'>
      <p className='text-xl text-gray-500'>Loading...</p>
    </div>)
  
}

const formatTime = (seconds) => {
  const minutes = Math.floor(seconds/60);

  const remainingSeconds = seconds % 60;

  const formatedTime = `${String(minutes).padStart(2, '0')}: ${String(remainingSeconds).padStart(2, '0')}`;

  return formatedTime;
}

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(false);
  const [timer, setTimer]= useState(60);
  const [timerIntervalId, setTimerIntervalId] =useState('');
  const [status, setStatus] = useState('');
  const navigate = useNavigate()


  useEffect(() => {
    fetch('/quiz.json')
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data)
      })
      .catch((error) => console.error("Error Fetching quiz data:", error));

      const intervalId = setInterval(() => {
        setTimer((prev) => {
          return prev > 0? prev-1 : prev ;
        });
      }, 1000);
      
      setTimerIntervalId(intervalId);
      
  
      return ()=> {
        clearInterval(intervalId);
        if (timer <= 0) {
          setShowResult(true);
        }
      };
  
  }, [timer])



  const handleAnswerSelect = (id, option) => {
    const updatedAnswers = { ...answers, [id]: option };

    setAnswers(updatedAnswers)
  }

  const handleSubmit =()=> {
    window.scrollTo({top: 0, behavior: 'smooth'});
    setLoading(true);

    clearInterval(timerIntervalId);

    setTimeout(()=> {
      const quizScore = calculateScore(answers);
      setScore(quizScore)
      const percentage = (quizScore/questions.length)*100;
      const newStatus = percentage >= 50? 'Passed' : 'Failed';
      setStatus(newStatus);
      setShowResult(true);
      setLoading(false);
    }, 5000)
  }

  const calculateScore = (userAnswers)=> {
    const correctAnswers = questions.map((item) => item.answer);
    let score = 0;

    for (const questionId in userAnswers){
      if(userAnswers[questionId] === correctAnswers[questionId-1]){
        score++;
      }
    }
    
    return score;
  }

  const restartQuiz = ()=> {
    setAnswers({});
    setScore(0);
    setShowResult(false);
    setLoading(false);
    setTimer(60);
    navigate("/quiz")
  };


  return (
    <section>
      <QuizHeader timer={timer}/>
      <div className='md:w-9/12 w-[90%] mx-auto flex mb-8 flex-col sm:flex-row justify-between'>
        <div className='md:w-[70%] w-full'>
          {
            questions.map((item, index) => (
              <div key={item.id} className='m-3 py-3 px-4 shadow-sm border border-gray-200 
                rounded'>
                <div className='flex items-center rounded text-xs p-2 cursor-pointer'>
                  <span className='h-8 w-8 bg-red-800 rounded-full flex items-center justify-center
                    text-green-500 mr-3 font-bold'>{index + 1}</span>
                  <p className='text-base'>{item.question}</p>
                </div>
                <div className='grid sm:grid-cols-2 grid-cols-1 gap-4 mt-5'>
                  {
                    item.options.map((option, index) => (
                      <div onClick={() => handleAnswerSelect(item.id, option)} key={index}
                        className={`p-2 border border-gray-200 rounded text-sx 
                      cursor-pointer ${answers[item.id] === option ? "bg-gray-300" : ""}`}>
                        <p className='text-[10px] mb-1'>option {index + 1}</p>
                        <p>{option}</p>
                      </div>
                    ))
                  }
                </div>
              </div>
            ))
          }
          <button className='bg-red-800 px-6 py-2 text-white hover:bg-red-700 rounded'
          onClick={handleSubmit}>Submit Quiz</button>
        </div>

        <div className='md:w-[30%] w-full p-4'>
          {
            showResult && (<div>
              <h3 className='text-2xl font-medium'>Your Score:</h3>
              <div className='h-[220px] w-[220px] mx-auto mt-8 flex flex-col justify-center items-center 
              border-2 rounded-tr-[50%] rounded-bl-[50%]'>
                <h3 className={`text-xl ${status === 'Passed'? "text-green-800" : "text-red-500"}`}>
                  {status}</h3>
                  <h1 className='text-3xl font-bold my-2'>{score * 10} <span className='text-slate-800'>/60</span>
                  </h1>
                  <p>Total Time: <span>{formatTime(60-timer)}<span> sec. </span></span></p>
              </div>
              <button onClick={restartQuiz} className='bg-red-800 px-6 py-2 text-white hover:bg-red-700 rounded mt-8 w-full'>Restart</button>
            </div>)}
          {loading && <Loading/>}
        </div>
      </div>
    </section>
  )
}

export default Quiz;

