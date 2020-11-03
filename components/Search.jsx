import React from "react";
import API from "../utils/API";

class Search extends Component {

  componentDidMount() {
    this.employeeList();
  };
}

searchEmployee = query => {
  API.employeeList(query)
    .then(res => this.setState({ result: res.data }))
    .catch(err => console.log(err));
};

// handleInputChange = event => {
//   const value = event.target.value;
//   const name = event.target.name;
//   this.setState({
//     [name]: value
//   });
// };

// let filteredEmployees = allEmployees.filter(employee=> {
//     const qStr = q.toLowerCase()
//     const eName = employee.name.toLowerCase()
//     return eName.includes(qStr)
// });

export default Search;