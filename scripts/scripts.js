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
    document.getElementById("creatorText").style.fontSize = "1.5em";
  document.getElementById("creatorText").innerHTML = clicks;
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
