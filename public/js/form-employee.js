const api = axios.create({
    baseURL: "https://its-2021.herokuapp.com/api",
    timeout: 2000

})

document.getElementById("submit-button").addEventListener("click", function () {
    const body = {
        employee: document.getElementById("name").value,
        shift: document.getElementById("shift").value,
        birth_date: new Date (document.getElementById("date-input").value),
        phone: document.getElementById("phone").value
    }
    console.log(body)
    api.post(
        "/employees",
        body,
        { headers: { token: localStorage.getItem("token") } }
    ).then(result => {
        alert("Employee has been successfully created")
        window.location.href = "employee.html"
    })
        .catch(err => {
            console.error(err)
        })
})
