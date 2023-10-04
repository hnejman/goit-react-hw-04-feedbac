import { Statistics } from 'components/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions';
import { useState } from 'react';

export const App = () => {

  const [good, handleGood] = useState(0);
  const [neutral, handleNeutral] = useState(0);
  const [bad, handleBad] = useState(0);
  const [total, handleTotal] = useState(0);


  
    return (
      <div>
        <Section title="Please leave feedback"/>
          <FeedbackOptions 
            handleGood={handleGood}
            handleNeutral={handleNeutral}
            handleBad={handleBad}
            handleTotal={handleTotal}
            good={good} 
            neutral={neutral}
            bad={bad}
            total={total}
          />
          <h2>Statistics:</h2>
          <Statistics 
          good={good} 
          neutral={neutral}
          bad={bad}
          total={total}
          />
      </div>
    );
};
