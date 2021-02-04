const api = axios.create({
  baseURL: "http://localhost:3000/api", 
  timeout: 2000
})

window.onload = () => {
  document.getElementById("btn-create").addEventListener("click", () => {
    window.location.href = "form.html"
  })

  api.get(
    "/gps/",
    {
      headers: {
        token: localStorage.getItem("token")
      }
    }
  ).then(result => {
    const accordion = document.getElementById("accordionExample")
    result.data.forEach((item, i) => {
      let element = document.createElement("div")
      element.classList.add("accordion-item")
      element.innerHTML += `
                  <h2 class="accordion-header" id="headingOne">
                    <div class="d-flex justify-content-end">
                      <button id="btn-update-${i}" class="btn btn-warning text-light mx-2">EDIT</button>
                      <button id="btn-delete-${i}" class="btn btn-danger mx-2">DELETE</button>
                    </div>
                      <button class="accordion-button bg-secondary text-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${i}" aria-expanded="true" aria-controls="collapse${i}">
                        <div class="row mx-2">
                          ${item.employee.employee} · ${item.action} · ${item.device} · ${item.location} 
                        </div>
                      </button>
                  </h2>
                  <div id="collapse${i}" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div class="accordion-body bg-light">
                          <ul>
                              <li>Date: ${item.date}</li>
                              <li>Action: ${item.action}</li>
                              <li>Name: ${item.employee.employee}</li>
                              <li>Company: ${item.company}</li>
                              <li>Device: ${item.device}</li>
                              <li>Model: ${item.model}</li>
                              <li>Identification: ${item.identification}</li>
                              <li>Vehicle brand: ${item.vehicle.brand}</li>
                              <li>Vehicle model: ${item.vehicle.model}</li>
                              <li>Vehicle colour: ${item.vehicle.colour}</li>
                              <li>Vehicle plate: ${item.vehicle.plate}</li>
                              <li>Description Installation: ${item.instDescrip}</li>
                              <li>Address Installation: ${item.instAddress}</li>
                              <li>Location: ${item.location}</li>
                              <li>City: ${item.city}</li>
                              <li>Province: ${item.province}</li>
                              <li>Notes: ${item.notes}</li>
                          </ul>
                      </div>
                  </div>`
              accordion.appendChild(element)
              document.getElementById(`btn-update-${i}`).addEventListener("click", function () {
                localStorage.setItem("gps-id", item._id)
                window.location.href= "edit.html"
              })
              document.getElementById(`btn-delete-${i}`).addEventListener("click", function () {
                api.delete(`/gps/${item._id}`, {
                  headers: {
                    token: localStorage.getItem("token")
                  }
                }) 
                .then(resp => {
                  alert("GPS device has been successfully deleted")
                  window.location.reload()
                }) 
              })
    })
  }).catch((err) => console.log("error"))
}
