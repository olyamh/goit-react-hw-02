import Description from './components/description/Description';
import Options from './components/options/Options';
import Notification from './components/notification/Notification';
import Feedback from './components/feedback/Feedback';

import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [feedbackType, setfeedbackType] = useState(() => {
    const savedFeedback = JSON.parse(localStorage.getItem("feedbackType"));
    return savedFeedback || { good: 0, neutral: 0, bad: 0 };
  });
  
  useEffect(() => {
    localStorage.setItem("feedbackType", JSON.stringify(feedbackType));
  }, [feedbackType]);

  const updateFeedback = (feedbackType) => {
    setfeedbackType((prev) => ({
      ...prev,
      [feedbackType]: prev[feedbackType] + 1,
    }));
  };

  const reset =() =>{
    setfeedbackType({ good: 0, neutral: 0, bad: 0 })
  }

  const totalFeedback =
    feedbackType.good + feedbackType.neutral + feedbackType.bad;
  const positiveFeedback = Math.round(
    (feedbackType.good / totalFeedback) * 100
  );

  return (
    <div>
      <Description />
      <Options
        feedbackType={feedbackType}
        updateFeedback={updateFeedback}
        total={totalFeedback}
        reset={reset}
      />
      {totalFeedback > 0 ? 
        <Feedback
          feedbackType={feedbackType}
          total={totalFeedback}
          positive={positiveFeedback}
        />
       : 
        <Notification />
      }
    </div>
  );
}

export default App;