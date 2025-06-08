const gameTitle = document.getElementById("gameTitle");
const gameDesc = document.getElementById("gameDesc");
let clickSound = document.getElementById('clickSound');
const randomGameButton = document.getElementById("gameRandomButton");
const randomGameButton2 = document.getElementById("gameRandomButton2");

function gameIconClick() {
            clickSound.load();
            clickSound.volume = 0.2
            clickSound.play();
}

function game1() {
    gameTitle.innerHTML = "Roblox"
    gameDesc.innerHTML = "This one includes a randomizer to choose from a list of games... I mostly haven't played any of them."
    randomGameButton.style.display="inline-block"
    randomGameButton2.style.display="inline-block"
}

function game2() {
    gameTitle.innerHTML = "Minecraft"
    gameDesc.innerHTML = "You'd be a great builder... I know it."
    randomGameButton.style.display="none"
    randomGameButton2.style.display="none"
}

function game3() {
    gameTitle.innerHTML = "Stardew Valley"
    gameDesc.innerHTML = "You play grow a garden so much so I thought na we could play this farming game ^^ I swear, you'd be good at decorating the farm."
    randomGameButton.style.display="none"
    randomGameButton2.style.display="none"
}

function game4() {
    gameTitle.innerHTML = "Monopoly"
    gameDesc.innerHTML = "I'd destroy you at this game >:)"
    randomGameButton.style.display="none"
    randomGameButton2.style.display="none"
}

function game5() {
    gameTitle.innerHTML = "Uno"
    gameDesc.innerHTML = "I'd destroy you at this game >:)"
    randomGameButton.style.display="none"
    randomGameButton2.style.display="none"
}

function randomRobloxHorrorGame() {
    var urls = new Array();
        urls[0] = "https://www.roblox.com/games/18199615050/UPD-Demonology";
        urls[1] = "https://www.roblox.com/games/80399355300227/SEIZE";
        urls[2] = "https://www.roblox.com/games/12252957625/INSTIGATOR-HORROR";
        urls[3] = "https://www.roblox.com/games/9431770682/Lost-Rooms";
        urls[4] = "https://www.roblox.com/games/8094913477/Samas-Revenge-HORROR";
        urls[5] = "https://www.roblox.com/games/15048061750/Imaginary-2-0-HORROR";
        urls[6] = "https://www.roblox.com/games/11757992328/SORROW-Horror";
        urls[7] = "https://www.roblox.com/games/12735022823/6-P-M";
        urls[8] = "https://www.roblox.com/games/8073154099/The-Intruder";
        urls[9] = "https://www.roblox.com/games/17557755215/Dont-Mind-Us-HORROR";
        urls[10] = "https://www.roblox.com/games/15985826131/Home-Alone-HORROR";
        urls[11] = "https://www.roblox.com/games/12970059795/OBSCURE-HORROR";
        urls[12] = "https://www.roblox.com/games/6494568108/BEWILDERED-HORROR-CH-II-REVAMP-SOON";
        urls[13] = "https://www.roblox.com/games/6980025436/TRESPASS-ACT-III";
        urls[14] = "https://www.roblox.com/games/9958794915/HORROR-Missing-Elvira";
        urls[15] = "https://www.roblox.com/games/16454399300/Scary-Sushi-CHAPTER-2";
        urls[16] = "https://www.roblox.com/games/17314188921/Delusional";
        urls[17] = "https://www.roblox.com/games/6274107452/Evelyn-HORROR";
        urls[18] = "https://www.roblox.com/games/18540132601/Monster-HORROR";
        urls[19] = "https://www.roblox.com/games/130863460389240/Three-Little-Pigs-HORROR";
        urls[20] = "https://www.roblox.com/games/8511131723/Mocker-HORROR";
        urls[21] = "https://www.roblox.com/games/14437001043/Residence-Massacre";
        urls[22] = "https://www.roblox.com/games/93836859465095/Midnight-Cultist-HORROR";
        urls[23] = "https://www.roblox.com/games/80672898702901/The-Creed-HORROR";
        urls[24] = "https://www.roblox.com/games/16502537263/KittyLand-Horror";
        urls[25] = "https://www.roblox.com/games/9794913130/The-Dead-HORROR";
        urls[26] = "https://www.roblox.com/games/18118453564/Quietville-HORROR";
        urls[27] = "https://www.roblox.com/games/16356725314/THE-CAPTOR-HORROR";
        urls[28] = "https://www.roblox.com/games/17724045406/Scary-horro-game-NEW";
        urls[29] = "https://www.roblox.com/games/17035904200/Bread-Seeker-HORROR";
        urls[30] = "https://www.roblox.com/games/7506230120/ELMIRA-Horror";
        urls[31] = "https://www.roblox.com/games/18959229688/Friends-Horreur";
        urls[32] = "https://www.roblox.com/games/8703553621/Forsaken-HORROR";
        urls[33] = "https://www.roblox.com/games/10406392868/FALSE-REALITY-HORROR";
        urls[34] = "https://www.roblox.com/games/15238994315/Requiem-HORROR";
        urls[35] = "https://www.roblox.com/games/16008839781/STOCK-UP-HORROR";
        urls[36] = "https://www.roblox.com/games/16709410528/Night-Watch";

    var random = Math.floor(Math.random()*urls.length);
        clickSound.load();
        clickSound.volume = 0.2
        clickSound.play();

window.open(urls[random])
}

function randomRobloxGame() {
    var urls = new Array();
        urls[0] = "https://www.roblox.com/games/8571687919/LOCOfficial";
        urls[1] = "https://www.roblox.com/games/6589412525/Rail-Frenzy";
        urls[2] = "https://www.roblox.com/games/136583829770579/Moonhug";
        urls[3] = "https://www.roblox.com/games/16483433878/Block-Tales-DEMO-4";
        urls[4] = "https://www.roblox.com/games/132813250731469/The-Hybrid-Cafe";
        urls[5] = "https://www.roblox.com/games/119055906651998/Fast-Food-Simulator";
        urls[6] = "https://www.roblox.com/games/126915360024106/average-day-in-america";
        urls[7] = "https://www.roblox.com/games/80342862330041/UPD-Liars-Table";
        urls[8] = "https://www.roblox.com/games/116682722075937/2-Player-Battle-Tycoon";
        urls[9] = "https://www.roblox.com/games/132586479415502/Webbed-2-Player-Obby";
        urls[10] = "https://www.roblox.com/games/16446180574/Twenty-One";
        urls[11] = "https://www.roblox.com/games/10432964150/Please-Dont-Touch-Anything";

    var random = Math.floor(Math.random()*urls.length);
        clickSound.load();
        clickSound.volume = 0.2
        clickSound.play();

window.open(urls[random])
}
