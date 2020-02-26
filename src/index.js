import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import { ArcGauge } from '@progress/kendo-react-gauges';
import * as serviceWorker from './serviceWorker';

// class ArcGaugeComponent extends React.Component {
//   constructor(props) {
//       super(props);

//       this.state = {
//           value: 56
//       };
//   }

//   render() {
//       const colors = [
//           { from: 0, to: 100, color: '#d0021b' }
//       ];

//       const arcOptions = {
//           value: this.state.value,
//           colors
//       };

//       const arcCenterRenderer = (value, color) => {
//           return (<h3 style={{ color: color }}>{value}</h3>);
//       };

//       return (
//           <ArcGauge {...arcOptions} arcCenterRender={arcCenterRenderer} />
//       );
//   }
// }

// ReactDOM.render(
//   <ArcGaugeComponent />,
//   document.querySelector('graph-gauge')
// );

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
