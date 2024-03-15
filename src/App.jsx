import "./App.css";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";
import { useEffect, useState } from "react";

const App = () => {
  const reviews = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [clicks, setClicks] = useState(() => {
    const savedClicks = window.localStorage.getItem("saved-clicks");

    if (savedClicks !== null) {
      return JSON.parse(savedClicks);
    }
    return reviews;
  });

  const updateFeedback = (feedbackType) => {
    setClicks({ ...clicks, [feedbackType]: clicks[feedbackType] + 1 });
  };
  const handleResetFeedback = () => {
    setClicks(reviews);
  };

  const totalFeedback = clicks.good + clicks.neutral + clicks.bad;
  const totalFeedbackPercent = Math.round(
    ((clicks.good + clicks.neutral) / totalFeedback) * 100
  );

  useEffect(() => {
    window.localStorage.setItem("saved-clicks", JSON.stringify(clicks));
  }, [clicks]);

  return (
    <div>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        handleResetFeedback={handleResetFeedback}
        totalFeedback={totalFeedback}
      />
      {clicks.good > 0 || clicks.neutral > 0 || clicks.bad > 0 ? (
        <Feedback
          clicks={clicks}
          totalFeedback={totalFeedback}
          totalFeedbackPercent={totalFeedbackPercent}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
};

export default App;
