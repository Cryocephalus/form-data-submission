
document.addEventListener('DOMContentLoaded',() =>{ 
    let form = document.getElementById("form")

form.addEventListener('submit', (event) => {
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value    
    let message = document.getElementById("message").value    
    event.preventDefault()
    if(name&&email&&message){
        alert("form successfully submitted")
    }
    else{
        alert("form incomplete ;-;")
    }
})

})