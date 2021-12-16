import React from "react";
import "../App.css";

class Employees extends React.Component {
  constructor() {
    super();
    this.state = {
      employees: [],
      currentEmployee: null,
    };
  }

  fetchEmployees = () => {
    fetch("https://pursuit-veterinarian.herokuapp.com/api/eployees")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          employees: data,
        });
      });
  };

  componentDidMount = () => {
    this.fetchEmployees();
  };

  handleDropdownChange = (event) => {
    this.setState({
      currentEmployee: event.target.value,
    });
  };

  render() {
    let currentEmployeeObject = this.state.employees.find((employee) => {
      return employee.firstName === this.state.currentEmployee;
    });

    let dropDownOptions = this.state.employees.map((employee) => {
      return <option>{employee.firstName}</option>;
    });

    return (
      <div className="Employees">
        <h1>This is the Employees Page</h1>
        <select onChange={this.handleDropdownChange}>
          <option>Select an Employee</option>
          {dropDownOptions}
        </select>
        <h1>{currentEmployeeObject?.firstName} {currentEmployeeObject?.lastName}</h1>
      </div>
    );
  }
}

export default Employees;
