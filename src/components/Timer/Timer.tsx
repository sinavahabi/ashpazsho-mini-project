import { useEffect, useState } from 'react'
import "./Timer.scss"

type IsDoneProp = {
  isDone: boolean
}

export default function Timer({ isDone }: IsDoneProp) {
  const initialTime = 120
  const [time, setTime] = useState<number>(initialTime)

  useEffect(() => {
    const resetTimer = () => {
      setTime(initialTime)
      localStorage.setItem('timer', initialTime.toString())
      localStorage.setItem('timerIsDone', 'false')
    }

    resetTimer() // Reset timer on mount or when isDone changes

    const timerInterval = setInterval(() => {
      setTime((prevTime) => {
        const newTime = prevTime - 1

        // Store the updated time in localStorage
        localStorage.setItem('timer', newTime.toString())

        // Check if the timer has reached zero
        if (newTime === 0) {
          clearInterval(timerInterval)
          localStorage.setItem('timerIsDone', 'true')
        } else {
          localStorage.setItem('timerIsDone', 'false')
        }

        return newTime
      })
    }, 1000)

    // Clear the timer when the component is unmounted
    return () => clearInterval(timerInterval)
  }, [initialTime, isDone])

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`
  }

  return <span className='timer'>{formatTime(time)}</span>
}
