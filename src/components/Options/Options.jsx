import css from "./Options.module.css";
const Options = ({ updateFeedback, handleResetFeedback, totalFeedback }) => {
  return (
    <div className={css.options}>
      <button
        className={css.optionsButton}
        onClick={() => {
          updateFeedback("good");
        }}
      >
        Good
      </button>
      <button
        className={css.optionsButton}
        onClick={() => {
          updateFeedback("neutral");
        }}
      >
        Neutral
      </button>
      <button
        className={css.optionsButton}
        onClick={() => {
          updateFeedback("bad");
        }}
      >
        Bad
      </button>
      {totalFeedback > 0 && (
        <button className={css.optionsButton} onClick={handleResetFeedback}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
