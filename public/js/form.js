const api = axios.create({
    baseURL: "https://its-2021.herokuapp.com/api",
    timeout: 2000

})

api.get(
    "/employees",
    { headers: { token: localStorage.getItem("token") } }
).then(employees => {
    let select = document.getElementById("employee")
    employees.data.forEach(employee => {
        let option = document.createElement("option")
        option.value = employee._id
        option.innerText = employee.employee
        select.appendChild(option)
        console.log(option.value)
    });
}).catch(err => {
    console.error(err)
})

document.getElementById("submit-button").addEventListener("click", function () {
    const body = {
        date: document.getElementById("date-input").value,
        action: document.querySelector("input[name='inlineRadio']:checked").value,
        employee: document.getElementById("employee").value,
        company: document.getElementById("company").value,
        device: document.getElementById("device").value,
        model: document.getElementById("model").value,
        identification: document.getElementById("identification").value,
        vehicle: {
            brand: document.getElementById("brand").value,
            model: document.getElementById("model-vehicle").value,
            colour: document.getElementById("colour").value,
            plate: document.getElementById("plate").value
        },
        instDescrip: document.getElementById("descrip-input").value,
        instAddress: document.getElementById("address-input").value,
        location: document.getElementById("location").value,
        city: document.getElementById("city").value,
        province: document.getElementById("province").value,
        notes: document.getElementById("notes-input").value
    }

    api.post(
        "/gps",
        body,
        { headers: { token: localStorage.getItem("token") } }
    ).then(result => {
        alert("GPS device has been successfully created")
        window.location.href = "gps.html"
    })
        .catch(err => {
            console.error(err)
        })
})
