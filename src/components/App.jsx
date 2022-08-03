import { useState } from 'react';
import Container from './Container/Container';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const handleGood = () => {
    setGood(state => state + 1);
  };
  const handleNeutral = () => {
    setNeutral(state => state + 1);
  };
  const handleBad = () => {
    setBad(state => state + 1);
  };

  const total = () => good + neutral + bad;

  const positive = () => {
    return Math.round((good * 100) / (good + neutral + bad));
  };
  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions
          goodFeedback={handleGood}
          badFeedback={handleBad}
          neutralFeedback={handleNeutral}
        />
      </Section>
      <Section title="Statistics">
        {total() === 0 ? (
          <Notification message="There is no feedback"></Notification>
        ) : (
          <Statistics
            onGood={good}
            onBad={bad}
            onNeutral={neutral}
            total={total()}
            positiv={positive()}
          />
        )}
      </Section>
    </Container>
  );
}
