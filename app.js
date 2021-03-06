const displayedResult = document.getElementById("result");
const filter = document.getElementById("filter");
const listItems = [];

getUserData();

filter.addEventListener("input", (e) => filteredData(e.target.value));

async function getUserData() {
  const respond = await fetch("https://randomuser.me/api?results=50");
  const data = await respond.json();

  displayedResult.innerHTML = "";

  const userData = data.results;
  userData.forEach((user) => {
    const usersListElement = document.createElement("li");

    listItems.push(usersListElement);

    usersListElement.innerHTML = `
        <img src="${user.picture.large}" alt="${user.name.first}" />
        <div class="user-info">
            <h4>${user.name.first} ${user.name.last} </h4>
            <p>${user.location.city}, ${user.location.country} </p>
        </div>
    `;
    displayedResult.appendChild(usersListElement);
  });
}

function filteredData(searchTerms){
    listItems.forEach(item =>{
        if(item.innerText.toLowerCase().includes(searchTerms.toLowerCase())){
            item.classList.remove('hide')
        }else {
            item.classList.add('hide')
        }
    })
}

