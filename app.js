var diceBtn = document.getElementById('pressforYourPlay');
var dices = document.getElementById('dice-image');
var total_score = document.querySelector('.total');
var current_score = 0;

diceBtn.addEventListener('click', function Presstorolldice() {
    
    var userTwist = +document.getElementById('TwistForUser').value;
    
    var dice = Math.floor(Math.random() * 6) + 1;
    dices.src = `${dice}.png`;

   
    if (userTwist === dice) {
        alert("OUT! Aapka score reset ho gaya.");
        current_score = 0; 
      
    } else {
        current_score += dice;
    }

    total_score.innerHTML = current_score;
});