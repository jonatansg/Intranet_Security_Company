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
                      <button class="accordion-button bg-secondary text-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                          <div class="row">
                                 ${item.employee.employee} - ${item.device} - ${item.location}
                          </div>
                      </button>
                  </h2>
                  <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div class="accordion-body bg-light">
                          <ul>
                              <li>Name: ${item.employee.employee}</li>
                              <li>Location: ${item.location}</li>
                              <li>City: ${item.city}</li>
                              <li>Vehicle brand: ${item.vehicle.brand}</li>
                              <li>Vehicle plate: ${item.vehicle.plate}</li>
                          </ul>
                      </div>
                  </div>
              </div>`
  
    })
  }).catch((err) => handleError(err, res)
  )
}
