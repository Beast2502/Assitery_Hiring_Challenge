{
  /*
  PLEASE BEGIN THIS BY READING THE README.md FILE
*/
}
import "./styles.css";
import PieChart from "./components/PieChart";
import StyledTable from "./components/Table";
import Buttons from "./components/Buttons";

import React, { Component } from "react";
import axios from "axios";
import moment from "moment";

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentDate: {},
      currentDateCheck: "",
      vaccineDates: [],
      totalPeople: 0,
      count: 0,
    };
    this.Addon = this.Addon.bind(this);
    this.Sub = this.Sub.bind(this);
  }
  Addon = () => {
    const { currentDateCheck } = this.state;
    let a = moment(currentDateCheck, "YYYY-MM-DD").add(1, "day");
    let d = a.format("YYYY-MM-DD");
    this.setState({ currentDateCheck: d });
  };

  Sub = () => {
    const { currentDateCheck } = this.state;
    let a = moment(currentDateCheck, "YYYY-MM-DD").subtract(1, "day");
    let d = a.format("YYYY-MM-DD");
    this.setState({ currentDateCheck: d });
  };

  componentDidMount() {
    // install the live server to check the data
    axios
      .get(`http://127.0.0.1:5500/public/data/current_date.json`)
      .then((res) => {
        this.setState({ currentDate: res.data });
        this.setState({
          currentDateCheck: this.state.currentDate.current_date,
        });
      })
      .catch((err) => console.log("404 error"));

    // install the live server to check the data
    axios
      .get(`http://127.0.0.1:5500/public/data/vaccine_dates.json`)
      .then((res) => {
        console.log(res, "axios");
        if (res.status === 200) {
          this.setState({
            vaccineDates: res.data,
          });
        }
      })
      .catch((err) => console.log("4040 error"));
  }

  render() {
    let currentDate = this.state.currentDateCheck;
    let data = this.state.vaccineDates;
    let vaccineData = data.filter(
      (data) => data.vaccination_date <= currentDate
    );
    let notvaccineData = data.length - vaccineData.length;

    return (
      <div className="App">
        <div className="chart">
          <PieChart data={[vaccineData.length, notvaccineData]} />
        </div>
        <div className="buttons">
          <Buttons
            currentDate={this.state.currentDateCheck}
            Addon={this.Addon}
            Sub={this.Sub}
          />
        </div>
        <b style={{ textAlign: "center" }}>
          {vaccineData.length} out of {data.length} persons have been
          vaccinated.
        </b>
        <div className="table">
          <StyledTable data={data} currentDate={currentDate} />
        </div>
      </div>
    );
  }
}
export default App;
