import axios from "axios";
import { useEffect, useState } from "react";

export default function Comments() {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/albums")
      .then((res) => setEmployees(res.data))
      .catch((err) => console.log(err));
  });
  ;
  return <div className="App">{employees.map((employee) => <h1 key={employee.id}>{employee.employee_name}</h1>)}</div>;
}
