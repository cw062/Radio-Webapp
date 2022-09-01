let curr_station = document.createElement('audio');
let station_index = 0;
let isPlaying = false;
let blondedRadio = document.createElement('audio');
let lsRadio = document.createElement('audio');

let station_list = [
    {
        name: "blonded.mp3",
        duration: 5415,
        hasLoaded: false
    },
    {
        name: "RadioLosSantos.mp3",
        duration: 7298,
        hasLoaded: false
    }
];

blondedRadio.src = station_list[0].name;
lsRadio.src = station_list[1].name;


function loadStation(station_index) {
    if (station_index == 0) {
        if (!station_list[0].hasLoaded) {
            blondedRadio.load();
            station_list[0].hasLoaded = true;
        }
        playStation(0);
    } else if (station_index == 1) {
        if (!station_list[1].hasLoaded) {
            lsRadio.load();
            station_list[1].hasLoaded = true;
        }
        playStation(1)
    }

}

function playStation(station_index) {
    if (station_index == 0) {
        blondedRadio.currentTime = Math.floor(Date.now() / 1000) % station_list[station_index].duration;
        lsRadio.pause();
        blondedRadio.play();
    } else if (station_index == 1) {
        lsRadio.currentTime = Math.floor(Date.now() / 1000) % station_list[station_index].duration;
        blondedRadio.pause();
        lsRadio.play();
    }
    isPlaying = true;
}

function checkPw() {
    var quatro = "quatro";
    var pw = document.getElementById("ps").value;
    if (quatro.localeCompare(pw) == 0) {
        window.location = "homepage.html";
    } else {
        alert("Incorrect");
    }
}

var input = document.getElementById("ps");
input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("submit").click();
    }
});

