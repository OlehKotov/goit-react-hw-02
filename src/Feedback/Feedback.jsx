

const Feedback = ({reviews, total}) => {
  return (
    <ul>
        <li>Good: {reviews.good}</li>
        <li>Neutral: {reviews.neutral}</li>
        <li>Bad: {reviews.bad}</li>
        {total > 0 && <li>Total: {total}</li>}
    </ul>
  )
}

export default Feedback