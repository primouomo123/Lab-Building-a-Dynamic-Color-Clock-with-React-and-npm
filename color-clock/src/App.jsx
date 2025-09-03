import { useState, useEffect } from 'react'
import './App.css'
import { format } from "date-fns";

function App() {
  /* useState creates a state variable that React remembers.
  Updating the state triggers a re-render of the component. */
  const [currentDate, setCurrentDate] = useState(new Date());

  // useEffect runs side effects after the component renders.
 // Here, it sets up an interval to update the date/time every second.
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(interval); /* Cleanup function: stops the timer when the component is removed
    (unmounted) to prevent memory leaks. Runs automatically before unmounting. */
  }, []);
  
  // It renders the current date and time, updating every second.
  return (
    <div>
      <h1>Current Date & Time</h1>
      <br />
      <p className='date'><strong>Current Date:</strong> {format(currentDate, "EEEE, MMMM do yyyy")}</p>
      <p className='time'><strong>Current Time:</strong> {format(currentDate, "hh:mm:ss a")}</p>
    </div>
  )
}

export default App
