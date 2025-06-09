var spaceWidth;
var spaceHeight;
let clickSound = document.getElementById('clickSound');
var clicks = 0;

function showRandomQueenImage() {
            let pickedRandomQueenImageNum;
            pickedRandomQueenImageNum = Math.floor(Math.random() * 14) + 1;
            let randomQueenImageFile;
            randomQueenImageFile = "queen/queen" + pickedRandomQueenImageNum + ".jpg";
            let randomQueenImage = document.getElementById("randomQueenImage");
            randomQueenImage.src = randomQueenImageFile
            document.getElementById("randomQueenImage").style.display = "block";
            spaceWidth = document.getElementById('homePage').clientHeight - randomQueenImage.height;
            spaceHeight = document.getElementById('homePage').clientWidth - randomQueenImage.width;
            randomQueenImage.style.top = Math.round(Math.random() * spaceWidth) + 'px';
            randomQueenImage.style.left = Math.round(Math.random() * spaceHeight) + 'px';
            let thudSound = document.getElementById('thudSound');
            thudSound.load();
            thudSound.volume = 0.2
            thudSound.play();
            clicks += 1;
    document.getElementById("creatorText").style.color = "#fff";
    document.getElementById("creatorText").style.fontSize = "2em";
  document.getElementById("creatorText").innerHTML = clicks;
}

function click() {
          clickSound.load();
        clickSound.volume = 0.5
        clickSound.play();
}

function switchPallete() {
var background = document.body
background.style.background = "#AFDDFF"
background.style.backgroundImage = "radial-gradient(#60B5FF 1.5px, transparent 0)"
}

function rightToggleClick() {
        clickSound.load();
        clickSound.volume = 0.5
        clickSound.play();

          var homeImage = document.getElementById("homeImage");
          var rightText = document.getElementById("homeRightText");
  if (homeImage.style.display === "none") {
    homeImage.style.display = "block", rightText.style.margin="0", rightText.innerHTML="";
  } else {
    homeImage.style.display = "none", rightText.style.margin="1em", rightText.innerHTML="My pretty baby, stop staying up so late... and start eating more... and take care of yourself more >:(";
  }
}

function lovelyClicked() {
        clickSound.load();
        clickSound.volume = 0.5
        clickSound.play();

          var remindersDiv = document.getElementById("reminders");
  if (remindersDiv.style.display === "block") {
    remindersDiv.style.display = "none";
  } else {
    remindersDiv.style.display = "block";
  }
}
