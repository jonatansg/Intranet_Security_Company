axios
  .get('http://localhost:3000/api/employees', { headers: { token: localStorage.getItem('token')}})
  .then(response => {
    const employees = document.getElementById('employees');
    response.data.forEach(employee => {
      const newEmployee = document.createElement('li')
      newEmployee.innerHTML = employee.employee;
      employees.appendChild(newEmployee)
    })
  })

  document.getElementById('logout').addEventListener("click", function() {
    localStorage.clear();
    window.location.reload()
  })