//Responsive Buttons
document.querySelector('.grid-button').addEventListener('click', () => {
    document.querySelector('.directory-info').classList.add('grid-layout');
    document.querySelector('.directory-info').classList.remove('list-layout');
}, false);

document.querySelector('.list-button').addEventListener('click', () => {
    document.querySelector('.directory-info').classList.add('list-layout');
    document.querySelector('.directory-info').classList.remove('grid-layout');
}, false);

//Create Directory
const directory = 'json/directory.json';

fetch(directory).then((response) => response.json()).then((jsonObject) => {

    //Business
    Object.keys(jsonObject.business).forEach(i => {
        let div = document.createElement('div');
        div.classList.add('organization-div');

        let name = document.createElement('h3');

        if (jsonObject.business[i].logo != "" || jsonObject.business[i].website != undefined) {
            let logo = document.createElement('img');
            logo.setAttribute('src', jsonObject.business[i].logo);
            logo.setAttribute('alt', `${jsonObject.business[i].name} logo`);

            div.appendChild(logo);
        }

        let address = document.createElement('p');
        address.textContent = jsonObject.business[i].address;

        let phone = document.createElement('p');
        phone.textContent = jsonObject.business[i].phone;

        if (jsonObject.business[i].website != "" || jsonObject.business[i].website != undefined) {
            let website = document.createElement('a');
            website.setAttribute('href', jsonObject.business[i].website);
            website.textContent = jsonObject.business[i].name;

            div.appendChild(name);
            name.appendChild(website);
        } else {
            div.appendChild(name);
        }

        div.appendChild(address);
        div.appendChild(phone);

        document.querySelector('div.directory-info').appendChild(div);
    })
});