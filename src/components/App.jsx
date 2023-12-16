import React, { useState } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Section from './Section';

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });

    const onLeaveFeedback = (type) => {
    setFeedback((prevFeedback) => ({ ...prevFeedback, [type]: prevFeedback[type] + 1 }));
  };


  const { good, neutral, bad } = feedback;
  const totalFeedback = good + neutral + bad;
  

    
        return (
          <>
            <div className="container">
           <div className="wrapper">
                <Section title="Please leave feedback">
        <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={onLeaveFeedback} />
      </Section>
      {totalFeedback > 0 ? (
        <Section title="Statistics">
          <Statistics good={good} neutral={neutral} bad={bad} total={totalFeedback} />
        </Section>
                          ) : (
                      <p>No feedback given</p>
                      )}

                </div>
               </div>
            </>
        );
    }
export default App;