const fs = require("fs");

const employees = [];

for (let i = 0; i < 1000; ++i){
  employees.push({
    "name": "Peter Smith",
    "salary": 103049.29,
    "id": 10
  });
}

fs.writeFileSync("employees.json", JSON.stringify(employees));