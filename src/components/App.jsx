import React, {Component} from "react";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Layout } from "./Layout/Layout";
import {Section } from "./Section/Section";
import { Statistics } from "./Statistics/Statistics";

export class App extends Component {
state = {
  good: 0,
  neutral: 0,
  bad: 0,
};

leaveFeedback = e => {
 this.SetState({ [e]: this.state[e] + 1 });
};

countTotalFeedback = ({ good, neutral, bad }) => good + neutral + bad;

countPositiveFeedbackPercentage = ({ good }) => {
Math.random((good * 100) / this.countTotalFeedback(this.state));
};

render () {
  const {good, neutral, bad} = this.state;
  return (
    <Layout>
      <Section title="Please leave feedback">
        <FeedbackOptions 
        options={Object.keys(this.state)}
        onLeaveFeedback={this.leaveFeedback} 
        />
      </Section>
      <Section title="Statistics">
        <Statistics>
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback(this.state)}
          positivePercentage={this.countPositiveFeedbackPercentage(this.state)}

        </Statistics>
      </Section>
    </Layout>
  );
}

};
