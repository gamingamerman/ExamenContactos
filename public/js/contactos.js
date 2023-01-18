// Variables
let CONTACTOS = document.getElementById('contacts');

showContacts();

function showContacts() {
    fetch('http://localhost:3000/api/contacts', {method: 'GET', redirect: 'follow'})
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(err => console.log('Error: '+ err))
}