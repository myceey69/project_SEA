/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 * 
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your 
 *    browser and make sure you can see that change. 
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 * 
 */



const FAST_AND_FURIOUS_3_POSTER = "https://m.media-amazon.com/images/I/71ql8kIrPKL._AC_UF894,1000_QL80_.jpg";
const OPPENHEIMER_POSTER =  "https://m.media-amazon.com/images/I/71xDtUSyAKL._AC_UF894,1000_QL80_.jpg";
const THE_DARK_KNIGHT_POSTER = "https://m.media-amazon.com/images/I/818hyvdVfvL._AC_UF894,1000_QL80_.jpg"; 
const MATRIX_POSTER = "https://m.media-amazon.com/images/I/71PfZFFz9yL._AC_UF894,1000_QL80_.jpg";
const INTERESTELLAR_POSTER = "https://m.media-amazon.com/images/I/71dN1QYnf+L._AC_UF894,1000_QL80_.jpg"; 
const PARASITE_POSTER = "https://m.media-amazon.com/images/I/91KArYP03YL._AC_UF894,1000_QL80_.jpg	"; 
const AVENGERS_INFINITY_WAR_POSTER = "https://m.media-amazon.com/images/I/91E4iLIWgHL._AC_UF894,1000_QL80_.jpg"; 
const BACK_TO_THE_FUTURE_POSTER = "https://i.ebayimg.com/images/g/Ks4AAOSwiCBgiDga/s-l1200.webp"; 
const ROCKY_POSTER = "https://m.media-amazon.com/images/I/61qNMpgcPfL._AC_UF894,1000_QL80_.jpg"; 
const KUNG_FU_HUSTLER_POSTER = "https://m.media-amazon.com/images/I/71m93EonyZL._AC_UF894,1000_QL80_.jpg";


// This is an array of strings (TV show titles)
let titles = [
    "Tokyo Drift",
    "Oppenheimer",
    "The Dark Knight",
	"Matrix",
	"Interestellar",
	"Parasite",
	"Avengers",	
	"Back to the Future",
	"Rocky",
	"Kung Fu Hustler"
	
];
// Your final submission should have much more data than this, and 
// you should use more than just an array of strings to store it all.


// This function adds cards the page to display the data in the array
function showCards() {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    const templateCard = document.querySelector(".card");
    
    for (let i = 0; i < titles.length; ++i) {
        let title = titles[i];
 

        // This part of the code doesn't scale very well! After you add your
        // own data, you'll need to do something totally different here.
        let imageURL = "";
        if (i == 0) {
            imageURL = FAST_AND_FURIOUS_3_POSTER;
        } else if (i == 1) {
            imageURL = OPPENHEIMER_POSTER;
        } else if (i == 2) {
            imageURL = THE_DARK_KNIGHT_POSTER;
        } else if (i == 3) {
            imageURL = MATRIX_POSTER;
        } else if (i == 4) {
            imageURL = INTERESTELLAR_POSTER;
        } else if (i == 5) {
            imageURL = PARASITE_POSTER;
        } else if (i == 6) {
            imageURL = AVENGERS_INFINITY_WAR_POSTER;
        } else if (i == 7) {
            imageURL = BACK_TO_THE_FUTURE_POSTER;
        } else if (i == 8) {
            imageURL = ROCKY_POSTER;
        } else if (i == 9) {
            imageURL = KUNG_FU_HUSTLER_POSTER;
        }

        const nextCard = templateCard.cloneNode(true); // Copy the template card
        editCardContent(nextCard, title, imageURL); // Edit title and image
        cardContainer.appendChild(nextCard); // Add new card to the container
    }
}

function editCardContent(card, newTitle, newImageURL) {
    card.style.display = "block";

    const cardHeader = card.querySelector("h2");
    cardHeader.textContent = newTitle;

    const cardImage = card.querySelector("img");
    cardImage.src = newImageURL;
    cardImage.alt = newTitle + " Poster";

    // You can use console.log to help you debug!
    // View the output by right clicking on your website,
    // select "Inspect", then click on the "Console" tab
    console.log("new card:", newTitle, "- html: ", card);
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);

function quoteAlert() {
    console.log("Button Clicked!")
    alert("I guess I can kiss heaven goodbye, because it got to be a sin to look this good!");
}

function removeLastCard() {
    titles.pop(); // Remove last item in titles array
    showCards(); // Call showCards again to refresh
}
