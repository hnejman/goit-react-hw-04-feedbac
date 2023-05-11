import { Component } from 'react';

export class FeedbackOptions extends Component {
  
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.props.handleGood(this.props.good + 1);
            this.props.handleTotal(((this.props.good + 1)/(this.props.good + this.props.bad + this.props.neutral + 1))*100);
          }}
        >
          Good
        </button>
        <button
          onClick={() => {
            this.props.handleNeutral(this.props.neutral + 1);
            this.props.handleTotal((this.props.good/(this.props.good + this.props.bad + this.props.neutral + 1))*100);
          }}
        >
          Neutral
        </button>
        <button
          onClick={() => {
            this.props.handleBad(this.props.bad + 1);
            this.props.handleTotal((this.props.good/(this.props.good + this.props.bad + this.props.neutral + 1))*100);
          }}
        >
          Bad
        </button>
      </div>
    );
  }
}
