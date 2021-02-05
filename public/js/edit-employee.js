const api = axios.create({
    baseURL: "https://its-2021.herokuapp.com/api", 
    timeout: 2000
})

api.get(
    `/employees/${localStorage.getItem("employee-id")}`,
    {headers: {token: localStorage.getItem("token")}}  
).then(response => {

    const date = new Date(response.data.birth_date)
    const year = date.getFullYear()
    const month = (date.getMonth() + 1).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false})
    const day = date.getDate().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false})
    document.getElementById("date-input").value = `${year}-${month}-${day}`
    
    document.getElementById("shift").value = response.data.shift.toLowerCase()
    document.getElementById("name").value = response.data.employee
    document.getElementById("phone").value = response.data.phone

}).catch(err => {
    console.error(err)
})

document.getElementById("submit-button").addEventListener("click", function() {
    api.put(
        `/employees/${localStorage.getItem("employee-id")}`,
        {
            birth_date: new Date(document.getElementById("date-input").value),
            employee: document.getElementById("name").value,
            shift: document.getElementById("shift").value,
            phone: document.getElementById("phone").value
        },
        {headers: {token: localStorage.getItem("token")}}  
    ).then(response => {
        window.location.href = "employee.html"
    }).catch(err => {
        console.error(err)
    })
})