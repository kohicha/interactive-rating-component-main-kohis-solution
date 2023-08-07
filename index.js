const ratingButtons = document.querySelectorAll(".btns");
const ratingResult = document.querySelector(".rating-result");
const submitButton = document.querySelector(".submit-btn");
const ratingSection = document.querySelector(".rating-section");
const submittedSection = document.querySelector(".submitted-section");

var clicked = false;

for (var i = 0; i < ratingButtons.length; i++){
    ratingButtons[i].addEventListener('click', function() {
        ratingButtons.forEach(function(el){
            el.classList.remove("bg-Orange");
            el.classList.remove("text-white");
        });
        this.classList.add("bg-Orange");
        this.classList.add("text-white");
        let rating = this.textContent;
        console.log(rating);
        ratingResult.textContent = "You selected " + rating + " out of 5";
        clicked = true;
    });
}


submitButton.addEventListener('click', function(){
    if (clicked === true){
        ratingSection.classList.add("hidden");
        submittedSection.classList.remove("hidden");
    }
    else{
        alert("Please Select a Rating!")
    }
})

