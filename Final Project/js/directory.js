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

    //#region Organizations
    Object.keys(jsonObject.business).forEach(i => {
        console.log(jsonObject.business[i]);
        let div = document.createElement('div');
        div.classList.add('organization-div');

        let name = document.createElement('h3');

        if (jsonObject.business[i].logo != "") {
            let logo = document.createElement('img');
            logo.classList.add('directory-logo');
            logo.setAttribute('src', `images/${jsonObject.business[i].logo}`);
            logo.setAttribute('alt', `${jsonObject.business[i].name} logo`);
            logo.setAttribute('height', '65');
            logo.setAttribute('width', '65');

            div.appendChild(logo);
        } else {
            let placementdiv = document.createElement('div');
            placementdiv.classList.add('directory-logo');

            div.appendChild(placementdiv);
        }

        let address = document.createElement('p');
        address.textContent = jsonObject.business[i].address;

        let phone = document.createElement('p');
        phone.textContent = jsonObject.business[i].phone;

        if (jsonObject.business[i].website != "") {
            let website = document.createElement('a');
            website.setAttribute('href', jsonObject.business[i].website);
            website.textContent = jsonObject.business[i].name;

            name.appendChild(website);
            div.appendChild(name);
        } else {
            div.appendChild(name);
        }

        div.appendChild(address);
        div.appendChild(phone);

        document.querySelector('div.directory-info').appendChild(div);
    })
});