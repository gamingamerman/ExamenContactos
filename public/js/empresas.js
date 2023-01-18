//Variables
let TABLE_COMPANIES = document.getElementById('companies').getElementsByTagName('tbody')[0];
let BUTTON_CREATE = document.getElementsByTagName('input')[4]
  
showCompanies()


// Insertar una compania
BUTTON_CREATE.addEventListener('click', (e) => {
    e.preventDefault()
    let name = document.getElementById('name').value;
    let industry = document.getElementById('industry').value;
    let sector = document.getElementById('sector').value;
    let capital = document.getElementById('capital').value;

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let raw = JSON.stringify({
    "name": name,
    "industry": industry,
    "sector": sector,
    "capital": capital
    })

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

    if (name.length == 0 ) {
        alert("El nombre al menos debe estar relleno")
    } else {
        fetch("http://localhost:3000/api/companies", requestOptions)
        .then(response => response.text())
        .then(result => showCompanies())
        .catch(error => console.log('error', error));
    }
})

// Funcion de mostrar companias
function showCompanies() {
    fetch('http://localhost:3000/api/companies', {method: 'GET', redirect: 'follow'})
    .then(response => response.json())
    .then(companies => {
        TABLE_COMPANIES.innerHTML = '';
        companies.forEach(company => {
            let row = `
            <tr onclick='select(this)'>
                <td>${company.id}</td>
                <td>${company.name}</td>
                <td>${company.industry}</td>
                <td>${company.sector}</td>
                <td>${company.capital}</td>
            </tr>
            `
            TABLE_COMPANIES.innerHTML += row;
        });

    })

}

// Funcion de seleccionar empresa

function select(e) {
    if (e.classList != "marcada"){
        e.classList.add('marcada')
    } else {
        e.classList.remove('marcada')
    }
}
