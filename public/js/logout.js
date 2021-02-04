document.getElementById('logout-button').addEventListener('click', function() {
    localStorage.clear()
    window.location("http://localhost:3000/index.html")
})