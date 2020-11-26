const Schema = require('./employees_pb');
const fs = require('fs');

const employee = new Schema.Employee();
employee.setId(10);
employee.setName("Peter Smith");
employee.setSalary(103049.29);

const employees = new Schema.Employees();

for (let _ = 0; _ < 2; ++_){
  employees.addEmployees(employee);
}

const serialized = employees.serializeBinary();
fs.writeFileSync("employees_binary", serialized);

/* To deserialize */
const binaryData = fs.readFileSync('./employees_binary');
const imported_employees = Schema.Employees.deserializeBinary(binaryData);
console.log('Employees as an array:', imported_employees.getEmployeesList().map(element => element.array));
console.log('Employees stringified:', imported_employees.toString());