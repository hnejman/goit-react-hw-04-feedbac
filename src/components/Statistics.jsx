import { Component } from 'react';
import { PropTypes } from 'prop-types';

export class Statistics extends Component {
  render() {
    if(this.props.good===0 && this.props.neutral===0 && this.props.bad===0){
      return(
        <div>
          <p>
            No f. given
          </p>
        </div>
      )
    }

    return (
        <div>
          <p>
            Good:<span>{this.props.good}</span>
          </p>
          <p>
            Neutral:<span>{this.props.neutral}</span>
          </p>
          <p>
            Bad:<span>{this.props.bad}</span>
          </p>
          <p>
            Positive feedback: <span>{this.props.total}%</span>
          </p>
        </div>
    );
  }
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired
}
