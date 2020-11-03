import React from "react";
import Navbar from "./components/Navbar";
import Cards from "./components/EmployeeCard";
import Container from "./components/Container";

function App() {
  return (
    <div>
      <Navbar />
      {this.state.employees.map(employee => (
          <EmployeeCard
            id={employee.id}
            key={employee.id}
            name={employee.name}
            image={employee.image}
          />
        ))}
    </div>
  );
}

export default App;
