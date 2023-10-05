import { PropTypes } from 'prop-types';

export const FeedbackOptions = ({good, neutral, bad , handleBad, handleGood, handleNeutral}) => {
  
    return (
      <div>
        <button
          onClick={() => {
             handleGood( good + 1);
          }}
        >
          Good
        </button>
        <button
          onClick={() => {
             handleNeutral( neutral + 1);
          }}
        >
          Neutral
        </button>
        <button
          onClick={() => {
             handleBad( bad + 1);
          }}
        >
          Bad
        </button>
      </div>
    );
}

FeedbackOptions.propTypes = {
  handleGood: PropTypes.func.isRequired,
  handleNeutral: PropTypes.func.isRequired,
  handleBad: PropTypes.func.isRequired,
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired
}
