import { Statistics } from 'components/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions';
import { useState } from 'react';

export const App = () => {

  const [good, handleGood] = useState(0);
  const [neutral, handleNeutral] = useState(0);
  const [bad, handleBad] = useState(0);
  
    return (
      <div>
         <h2>Please leave feedback</h2>
          <FeedbackOptions 
            handleGood={handleGood}
            handleNeutral={handleNeutral}
            handleBad={handleBad}
            good={good} 
            neutral={neutral}
            bad={bad}
          />
          <h2>Statistics:</h2>
          <Statistics 
          good={good} 
          neutral={neutral}
          bad={bad}
          />
      </div>
    );
};
