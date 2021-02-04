const { default: axios } = require("axios");

document.getElementById("submit-button").addEventListener("click", function () {
    const body = {
        date: document.getElementById("date-input").value,
        action: document.getElementById("action-input").value,
        employee: document.getElementById("employee").value,
        company: document.getElementById("company").value,
        device: document.getElementById("device").value,
        model: document.getElementById("model").value,
        identification: document.getElementById("identification").value,
        // vehicleBrand: document.getElementById("brand").value,
        // vehicleModel: document.getElementById("model-vehicle").value,       PREGUNTAR OBJETO
        // vehicleColour: document.getElementById("colour").value,
        // vehiclePlate: document.getElementById("plate").value,
        instDescrip: document.getElementById("descrip-input").value,
        instAddress: document.getElementById("address-input").value,
        location: document.getElementById("location").value,
        city: document.getElementById("city").value,
        province: document.getElementById("province").value,
        notes: document.getElementById("notes-input").value
    }

    axios.post(
        "http://localhost:3000/api/gps",    //llamada a la API
        body,
        {headers: {token: localStorage.getItem("token")}}
    ).then(result => {
        alert("GPS device has been successfully created")
        window.location("http://localhost:3000/gps.html")
    })
    .catch()
})
