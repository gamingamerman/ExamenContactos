//Variables
let TABLE_COMPANIES = document.getElementById('companies').getElementsByTagName('tbody')[0];
let BUTTON_CREATE = document.getElementsByTagName('input')[4]

//Insertamos las companias en la tabla
fetch('http://localhost:3000/api/companies', {method: 'GET', redirect: 'follow'})
    .then(response => response.json())
    .then(companies => {
        companies.forEach(company => {
            let row = `
            <tr>
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

BUTTON_CREATE.addEventListener('click', () => {
    
})
