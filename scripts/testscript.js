
var spaceWidth;
var spaceHeight;
var introDivClientHeight = document.getElementById('introDiv').clientHeight;
var introDivClientWidth = document.getElementById('introDiv').clientWidth;
document.getElementById("demo").innerHTML = introDivClientHeight;
document.getElementById("demo2").innerHTML = introDivClientWidth;

            spaceWidth = introDivClientHeight - randomQueenImage.height;
            spaceHeight = introDivClientWidth - randomQueenImage.width;
            randomQueenImage.style.top = Math.round(Math.random() * spaceWidth) + '%';
            randomQueenImage.style.left = Math.round(Math.random() * spaceHeight) + '%';

function showImage() {
            let pickedRandomQueenImageNum;
            pickedRandomQueenImageNum = Math.floor(Math.random() * 5) + 1;
            let randomQueenImageFile;
            randomQueenImageFile = "queen/queen" + pickedRandomQueenImageNum + ".jpg";
            let randomQueenImage = document.getElementById("randomQueenImage");
            randomQueenImage.src = randomQueenImageFile
            document.getElementById("randomQueenImage")
                .style.display = "block";


        }

