window.onload = () => {

  axios.get(
    "http://localhost:3000/api/gps/",
    {
      headers: {
        token: localStorage.getItem("token")
      }
    }
  ).then(result => {
    const accordion = document.getElementById("accordionExample")
    result.data.forEach(item => {
      accordion.innerHTML += `
              <div class="accordion-item">
                  <h2 class="accordion-header" id="headingOne">
                    <div class= "d-flex justify-content-end">
                      <button data-update="${item._id}" type="button" class="btn btn-warning text-light">EDIT</button>
                      <button data-delete="${item._id}" type="button" class="btn btn-danger mx-2">DELETE</button>
                    </div>
                      <button class="accordion-button bg-secondary text-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <div class="row mx-2">
                          ${item.employee.employee} · ${item.action} · ${item.device} · ${item.location} 
                        </div>
                      </button>
                  </h2>
                  <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
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
                  </div>
              </div>`
      //  document.querySelector(`button.data-update='${item._id}'`).addEventListener("click", function() {
      //  window.location(`http://localhost:3000/edit.html?id=${item._id}`)
      //  })
    })
  }).catch((err) => handleError(err, res)
  )

  function updateItem(itemID) {

  }

  function deleteItem(itemID) {

  }
}
