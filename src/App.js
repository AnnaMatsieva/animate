import React from 'react';
import { ArcGauge } from '@progress/kendo-react-gauges';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faPlus, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import './App.scss';


class ArcGaugeComponent extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
          value: 30
      };
  }

  render() {
      const colors = [
          { from: 0, to: 100, color: '#d0021b' }
      ];

      const arcOptions = {
          value: this.state.value,
          colors
      };

      const arcCenterRenderer = (value, color) => {
          return (<h3>{value}</h3>);
      };

      return (
          <ArcGauge {...arcOptions} arcCenterRender={arcCenterRenderer} />
      );
  }
}

function Requests() {
  return (
    <div>
      <p className="requests-title"><span className="highlighted-concept">Open</span> Requests <span className="dependent-concept">last 90 days</span></p>
      <div className="legend-position">
        {/* <div className="gauge percentage">
          <div className="meter"></div>
          <div className="percentage-container">
            <div className="percentage-indicator">14</div>
          </div>
        </div> */}
        <ArcGaugeComponent />
        <ul className="graph-legends">
          <li className="graph-critical graph-legends-item">
            <ul>
              <li className="graph-point">4</li>
              <ul className="graph-clarification">
                <li className="graph-info">Critical</li>
                <li className="graph-matches"><span className="highlighted-concept">3</span> machines impacted</li>
              </ul>
            </ul>
          </li>
          <li className="graph-noncritical graph-legends-item">
          <ul>
              <li className="graph-point">10</li>
              <ul className="graph-clarification">
                <li className="graph-info">Non-critical</li>
                <li className="graph-matches"><span className="highlighted-concept">8</span> machines impacted</li>
              </ul>
            </ul>
          </li>              
        </ul>
      </div>
      <div className="tab--block">
        <button className="tab-button"><span className="highlighted-concept">Show me</span> oldest open requests <FontAwesomeIcon className="icon" icon={faAngleDown} /></button>
        <div className="tab-dropdown">ddddd ddddd dd dd</div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <div className="container">
        <section className="widget--block equipment">
          <div className="header--block">
            <ul className="breadcrumbs--block">
              <li><a className="breadcrumbs__link" href="#">My Equipment</a></li>
              <FontAwesomeIcon className="icon" icon={faAngleRight} />
              <li><a className="breadcrumbs__link" href="#">Unplanned Service</a></li>
            </ul>
            <button className="button button_theme-main">Create service request <FontAwesomeIcon className="icon" icon={faPlus} /></button>
          </div>
          <div className="requests">
            <div className="requests__item open-requests">
              <Requests />
            </div>
            <div className="requests__item close-requests">
              <Requests />
            </div>
          </div>
          <div className="right--block">
            <button className="button button_theme-link">Track service <FontAwesomeIcon className="icon" icon={faAngleRight} /></button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
