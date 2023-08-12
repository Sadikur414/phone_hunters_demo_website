const loadPhones = async (searchText) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    /*----------------------by fetch-----------------------*/
    // fetch(url)
    //     .then(res => res.json())
    //     .then(data => console.log(data))

    /*----------------------by await--------------------*/
    const res = await fetch(url);
    const data = await res.json();
    displayPhones(data.data);
}
const displayPhones = (phones) => {
    // console.log(phones)
    const phonesContainer = document.getElementById('phones-container');

    phonesContainer.textContent = '';

    //display 10 phones
    phones = phones.slice(0, 10);

    //Display no phone found
    const noPhone = document.getElementById('no-found');
    if (phones.length === 0) {
        noPhone.classList.remove('d-none');
    }
    else {
        noPhone.classList.add('d-none');
    }

    //Display all phones 
    phones.forEach(phone => {
        const phoneDiv = document.createElement("div");
        phoneDiv.classList.add("col");
        phoneDiv.innerHTML = `
    <div class="card p-4 ">
        <img src="${phone.image}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${phone.phone_name}</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit longer.</p>
          </div>
    </div>
        `;
        phonesContainer.appendChild(phoneDiv);
    });
    //stop spinner or loader
      toggleSpinner(false);
}

document.getElementById("btn-search").addEventListener("click", function () {
             //start loader
             toggleSpinner(true);
    const searchField = document.getElementById("search-field");
    const searchText = searchField.value;
    loadPhones(searchText);

    // searchField.value= ' ';
})

const  toggleSpinner = isLoading => {
    const loaderSection = document.getElementById('loader');
    if(isLoading){
        loaderSection.classList.remove('d-none');
    }
    else{
        loaderSection.classList.add('d-none');
    }
}

// loadPhones()