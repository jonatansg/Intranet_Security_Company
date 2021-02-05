const api = axios.create({
  baseURL: "https://its-2021.herokuapp.com/api", 
  timeout: 2000
})

api
  .get('/api/employees', { headers: { token: localStorage.getItem('token')}})
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