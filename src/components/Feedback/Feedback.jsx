import css from "./Feedback.module.css";
const Feedback = ({ clicks, totalFeedback, totalFeedbackPercent }) => {
  return (
    <ul className={css.feedback}>
      <li>Good: {clicks.good}</li>
      <li>Neutral: {clicks.neutral}</li>
      <li>Bad: {clicks.bad}</li>
      {totalFeedback > 0 && <li>Total: {totalFeedback}</li>}
      {totalFeedbackPercent > 0 && <li>Positive: {totalFeedbackPercent}</li>}
    </ul>
  );
};

export default Feedback;
