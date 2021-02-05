const api = axios.create({
  baseURL: "https://its-2021.herokuapp.com/api", 
  timeout: 2000
})

window.onload = () => {
  document.getElementById("btn-create").addEventListener("click", () => {
    window.location.href = "form-employee.html"
  })

  api.get(
    "/employees/",
    {
      headers: {
        token: localStorage.getItem("token")
      }
    }
  ).then(result => {
    const accordion = document.getElementById("accordionExample")
    result.data.forEach((item, i) => {
      const date = new Date(item.birth_date)

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
                          ${item.employee} · ${item.shift}
                        </div>
                      </button>
                  </h2>
                  <div id="collapse${i}" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div class="accordion-body bg-light">
                          <ul>
                              <li>Date: ${item.employee}</li>
                              <li>Shift: ${item.shift}</li>
                              <li>Date: ${date.toLocaleDateString()}</li>
                              <li>Phone: ${item.phone}</li>
                          </ul>
                      </div>
                  </div>`
              accordion.appendChild(element)
              document.getElementById(`btn-update-${i}`).addEventListener("click", function () {
                localStorage.setItem("employee-id", item._id)
                window.location.href= "edit-employee.html"
              })
              document.getElementById(`btn-delete-${i}`).addEventListener("click", function () {
                api.delete(`/employees/${item._id}`, {
                  headers: {
                    token: localStorage.getItem("token")
                  }
                }) 
                .then(resp => {
                  alert("Employee has been successfully deleted")
                  window.location.reload()
                }) 
              })
    })
  }).catch((err) => console.log("error"))
}
