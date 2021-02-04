const api = axios.create({
    baseURL: "http://localhost:3000/api", 
    timeout: 2000
})

api.get(
    `/gps/${localStorage.getItem("gps-id")}`,
    {headers: {token: localStorage.getItem("token")}}  
).then(response => {

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
        });

        const date = new Date(response.data.date)
        const year = date.getFullYear()
        const month = (date.getMonth() + 1).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false})
        const day = date.getDate().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false})
        const hour = date.getHours().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false})
        const minutes = date.getMinutes().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false})
        document.getElementById("date-input").value = `${year}-${month}-${day}T${hour}:${minutes}`


        const selectedAction = response.data.action
        const actions = [...document.getElementsByName("inlineRadio")]    
        actions.filter(action => action.value === selectedAction )[0].checked = true;

        document.getElementById("employee").value = response.data.employee
        document.getElementById("company").value = response.data.company
        document.getElementById("device").value = response.data.device
        document.getElementById("model").value = response.data.model
        document.getElementById("identification").value = response.data.identification
        document.getElementById("brand").value = response.data.vehicle.brand
        document.getElementById("model-vehicle").value = response.data.vehicle.model
        document.getElementById("colour").value = response.data.vehicle.colour
        document.getElementById("plate").value = response.data.vehicle.plate
        document.getElementById("descrip-input").value = response.data.instDescrip
        document.getElementById("address-input").value = response.data.instAddress
        document.getElementById("location").value = response.data.location
        document.getElementById("city").value = response.data.city
        document.getElementById("province").value = response.data.province
        document.getElementById("notes-input").value = response.data.notes

    }).catch(err => {
        console.error(err)
    })

}).catch(err => {
    console.error(err)
})

document.getElementById("submit-button").addEventListener("click", function() {
    api.put(
        `/gps/${localStorage.getItem("gps-id")}`,
        {
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
        },
        {headers: {token: localStorage.getItem("token")}}  
    ).then(response => {
        window.location.href = "gps.html"
    }).catch(err => {
        console.error(err)
    })
})