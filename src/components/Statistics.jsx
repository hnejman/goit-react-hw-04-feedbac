import { PropTypes } from 'prop-types';

export const Statistics = ({ good, neutral, bad}) => {

const total = good / (good + neutral + bad) * 100;

  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <div>
        <p>No f. given</p>
      </div>
    );
  } else {
    return (
      <div>
        <p>
          Good:<span>{good}</span>
        </p>
        <p>
          Neutral:<span>{neutral}</span>
        </p>
        <p>
          Bad:<span>{bad}</span>
        </p>
        <p>
          Positive feedback: <span>{total}%</span>
        </p>
      </div>
    );
  }
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired
};
