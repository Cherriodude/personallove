var spaceWidth;
var spaceHeight;
let clickSound = document.getElementById('clickSound');


function showRandomQueenImage() {
            let pickedRandomQueenImageNum;
            pickedRandomQueenImageNum = Math.floor(Math.random() * 5) + 1;
            let randomQueenImageFile;
            randomQueenImageFile = "queen/queen" + pickedRandomQueenImageNum + ".jpg";
            let randomQueenImage = document.getElementById("randomQueenImage");
            randomQueenImage.src = randomQueenImageFile
            document.getElementById("randomQueenImage").style.display = "block";
            spaceWidth = document.getElementById('introDiv').clientHeight - randomQueenImage.height;
            spaceHeight = document.getElementById('introDiv').clientWidth - randomQueenImage.width;
            randomQueenImage.style.top = Math.round(Math.random() * spaceWidth) + 'px';
            randomQueenImage.style.left = Math.round(Math.random() * spaceHeight) + 'px';
            let thudSound = document.getElementById('thudSound');
            thudSound.load();
            thudSound.volume = 0.2
            thudSound.play();
}

function lovelyClicked() {
        clickSound.load();
        clickSound.volume = 0.2
        clickSound.play();

          var remindersDiv = document.getElementById("reminders");
  if (remindersDiv.style.display === "block") {
    remindersDiv.style.display = "none";
  } else {
    remindersDiv.style.display = "block";
  }
}