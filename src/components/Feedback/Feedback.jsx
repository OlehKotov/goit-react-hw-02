import css from "./Feedback.module.css";


const Feedback = ({ clicks, totalFeedback, positiveFeedbackPercentage }) => {
  return (
    <ul className={css.feedback}>
      <li>Good: {clicks.good}</li>
      <li>Neutral: {clicks.neutral}</li>
      <li>Bad: {clicks.bad}</li>
      <li>Total: {totalFeedback}</li>
      <li>Positive: {positiveFeedbackPercentage}%</li>
    </ul>
  );
};

export default Feedback;
