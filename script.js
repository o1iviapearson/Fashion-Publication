// Store all publications
let publications = [];

// Current filters
let selectedType = "all";
let selectedFocus = "all";
let searchTerm = "";


// LOAD JSON
fetch("data.json")
    .then(response => response.json())
    .then(json => {

        console.log(json);

        publications = json;

        displayPublications(publications);

    })
    .catch(error => console.log("error", error));


// CREATE PUBLICATION CARD
function makePublication(publication) {

    let publicationSection = document.querySelector("#publications");

    let newPublication = document.createElement("div");

    newPublication.classList.add("card");

    newPublication.innerHTML = `

        <a 
            href="${publication["Link"]}" 
            target="_blank"
            rel="noopener noreferrer"
            class="publicationImageLink"
        >
            <img 
                src="${publication["Image"]}" 
                alt="${publication["Fashion Publication"]}"
                class="publicationImage"
            >
        </a>

        <h2 class="publicationTitle">
            ${publication["Fashion Publication"]}
        </h2>

        <p class="publicationType">
            ${publication["Type"]}
        </p>

        <p class="publicationFocus">
            ${publication["Main Focus"]}
        </p>

    `;

    publicationSection.appendChild(newPublication);
}


// DISPLAY PUBLICATIONS
function displayPublications(list) {

    let publicationSection = document.querySelector("#publications");

    publicationSection.innerHTML = "";

    for (let i = 0; i < list.length; i++) {

        makePublication(list[i]);

    }
}


// FILTER PUBLICATIONS
function filterPublications() {

    let filteredPublications = publications.filter(function(publication) {

        let name = publication["Fashion Publication"].toLowerCase();
        let type = publication["Type"].toLowerCase();
        let focus = publication["Main Focus"].toLowerCase();


        // Search
        let matchesSearch =
            name.includes(searchTerm) ||
            type.includes(searchTerm) ||
            focus.includes(searchTerm);


        // Type
        let matchesType =
            selectedType === "all" ||
            type.includes(selectedType);


        // Focus
        let matchesFocus =
            selectedFocus === "all" ||
            focus.includes(selectedFocus);

        return matchesSearch && matchesType && matchesFocus;

    });


    displayPublications(filteredPublications);
}


// SEARCH
document.querySelector("#searchInput").addEventListener("input", function(event) {

    searchTerm = event.target.value.toLowerCase();

    filterPublications();

});


// TYPE BUTTONS
let typeFilters = document.querySelectorAll(".typeFilter");

for (let i = 0; i < typeFilters.length; i++) {

    typeFilters[i].addEventListener("click", function(event) {

        // Find which button was clicked
        selectedType = event.target.getAttribute("data-type");

        console.log("Type selected:", selectedType);


        // Remove selected from all buttons
        for (let j = 0; j < typeFilters.length; j++) {

            typeFilters[j].classList.remove("selected");

        }


        // Add selected to clicked button
        event.target.classList.add("selected");


        // Filter the data
        filterPublications();

    });

}


// FOCUS BUTTONS
let focusFilters = document.querySelectorAll(".focusFilter");

for (let i = 0; i < focusFilters.length; i++) {

    focusFilters[i].addEventListener("click", function(event) {

        selectedFocus = event.target.getAttribute("data-focus");

        console.log("Focus selected:", selectedFocus);


        // Remove selected from all
        for (let j = 0; j < focusFilters.length; j++) {

            focusFilters[j].classList.remove("selected");

        }


        // Add selected to clicked
        event.target.classList.add("selected");


        // Filter
        filterPublications();

    });

}