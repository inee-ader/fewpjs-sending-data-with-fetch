
// Add your code here
const URL = 'http://localhost:3000/users'
    
function submitData(userName, userEmail){
    let configObj = {    
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json', 
            'Accept': 'application/json'
        }, 
        body: JSON.stringify({
            name: userName, 
            email: userEmail
        })
    }
    return fetch(URL, configObj) 
        .then(function(response) {
            return response.json()
        })
        .then(function(object){
            body.innerHTML = object.id
        })
        .catch(function(error){
            appendError(error.message)
        })
}
const errorMsg = document.createElement('p')
const body = document.querySelector('body')

function appendError(message){
    errorMsg.innerHTML = message
    body.appendChild(errorMsg)
}
console.log(submitData('Brian', 'brian@coconut.com'))