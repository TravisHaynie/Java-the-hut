// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');


const employees=[]

// Collect employee data

const collectEmployees = function() {

  // TODO: Get user input to create and return an array of employee objects

  const firstName=prompt("Enter employees first name:");
  const lastName=prompt("Enter emplyees last name:");
  const salary=prompt("Enter emplyoees salary:")
  const newEmployee={
    firstName:firstName,
    lastName:lastName,
    salary:salary

  }
  
  employees.push(newEmployee)

  if (confirm("Do you want to add more employees")){
    collectEmployees()
  }

  return employees

}

// Display the average salary

const displayAverageSalary = function(employees) {

  // TODO: Calculate and display the average salary

    let totalSalary = 0;

  for (let index = 0; index < employees.length; index++) {
      totalSalary = totalSalary + parseInt(employees[index].salary)
  }

    // Calculate the average salary
    const averageSalary = totalSalary / employees.length;
    // Display the average salary on the console
    console.log(` The average salary: $${averageSalary.toFixed(2)} for ${employees.length} employees`)
}

// Select a random employee
const getRandomEmployee = function(employees) {
  // TODO: Select and display a random employee
  const randomEmployee = employees[Math.floor(Math.random() * employees.length)];
 
  console.log(`Random Employee: ${randomEmployee.firstName} ${randomEmployee.lastName}`);

}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
