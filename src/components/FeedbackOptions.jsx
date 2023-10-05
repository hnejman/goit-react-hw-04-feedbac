import { PropTypes } from 'prop-types';

export const FeedbackOptions = ({good, neutral, bad, total , handleBad, handleGood, handleNeutral, handleTotal}) => {
  
    return (
      <div>
        <button
          onClick={() => {
             handleGood( good + 1);
             handleTotal((( good + 1)/( good +  bad +  neutral + 1))*100);
          }}
        >
          Good
        </button>
        <button
          onClick={() => {
             handleNeutral( neutral + 1);
             handleTotal(( good/( good +  bad +  neutral + 1))*100);
          }}
        >
          Neutral
        </button>
        <button
          onClick={() => {
             handleBad( bad + 1);
             handleTotal(( good/( good +  bad +  neutral + 1))*100);
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
  handleTotal: PropTypes.func.isRequired,
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired
}
