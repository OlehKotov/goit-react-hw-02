import "./App.css";
import Description from "./Description/Description";
import Options from "./Options/Options";
import Feedback from "./Feedback/Feedback";
import { useState } from "react";
import Notification from "./Notification/Notification";

function App() {
  const reviews = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  const [clicks, setClicks] = useState(reviews);

  const updateFeedback = (feedbackType) => {
    setClicks({ ...clicks, [feedbackType]: clicks[feedbackType] + 1 });
  };
  const resetFeedback = () => {
    setClicks({...reviews})
  };

  const totalFeedback = clicks.good + clicks.neutral + clicks.bad;

  return (
    <div>
      <Description />
      <Options updateFeedback={updateFeedback} resetFeedback={resetFeedback} />
      {clicks.good > 0 || clicks.neutral > 0 || clicks.bad > 0 ? <Feedback reviews={clicks} total={totalFeedback}/> : <Notification />}

    </div>
  );
}

export default App;
