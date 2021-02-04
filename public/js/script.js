const api = axios.create({
  baseURL: "http://localhost:3000/api", 
  timeout: 2000
})

document.getElementById('login').addEventListener("click", function(){
    api.post('/auth/login', {
      email: document.getElementById('login_email').value,
      password: document.getElementById('login_password').value
    })
    .then(function (response) {
      if (response.data && response.data.token) {
        localStorage.setItem('token', response.data.token)
        localStorage.setItem('email', response.data.email)
        localStorage.setItem('username', response.data.username)
        goHome()
      } else {
        alert('Email or Password Wrong!')
      }
    })
    .catch(function (error) {
      alert('Email or Password Wrong!')
    });
  })
  
  function goHome(){
  window.location.href = "gps.html"
  }