import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import './App.css';

class App extends React.Component {
	constructor(props) {
      super(props);
			this.handleCalculateResult = this.handleCalculateResult.bind(this);
			this.handleResetScreen = this.handleResetScreen.bind(this);
			this.handleClick = this.handleClick.bind(this);
      this.state = {
        outputValue: '',
      }
  }

	handleResetScreen() {
    this.setState({
      outputValue: '',
    })
  }

	handleClick(event) {
		const input = this.state.outputValue + event.target.value
		this.setState({
			outputValue: input,
		})
	}

	handleCalculateResult(event) {
		const result = eval(this.state.outputValue);
    this.setState({
      outputValue: result,
    })
  }

	render() {
		return(
			<div id="calculator">
				{/* Screen and clear key */}
				<div className="top">
	        <button className="clear" onClick={this.handleResetScreen}>C</button>
	        <div className="screen">{this.state.outputValue}</div>
	      </div>
				<div className="keys">
					<button value='7' onClick={this.handleClick}>7</button>
					<button value='8' onClick={this.handleClick}>8</button>
					<button value='9' onClick={this.handleClick}>9</button>
					<button className="operator" value='+' onClick={this.handleClick}>+</button>
					<button value='4' onClick={this.handleClick}>4</button>
					<button value='5' onClick={this.handleClick}>5</button>
					<button value='6' onClick={this.handleClick}>6</button>
					<button className="operator" value='-' onClick={this.handleClick}>-</button>
					<button value='1' onClick={this.handleClick}>1</button>
					<button value='2' onClick={this.handleClick}>2</button>
					<button value='3' onClick={this.handleClick}>3</button>
					<button className="operator" value='7' onClick={this.handleClick}>÷</button>
					<button value='0' onClick={this.handleClick}>0</button>
					<button value='.' onClick={this.handleClick}>.</button>
					<button className="eval" onClick={this.handleCalculateResult}>=</button>
					<button className="operator" value='*' onClick={this.handleClick}>x</button>
				</div>
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
