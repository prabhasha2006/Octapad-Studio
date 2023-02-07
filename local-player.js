audio_file.onchange = function(){
    var files = this.files;
    var file = URL.createObjectURL(files[0]); 
    audio_player.src = file; 
    audio_player.play();
};

/******/
video_file.onchange = function(){
    var files = this.files;
    var file = URL.createObjectURL(files[0]); 
    video_player.src = file; 
    video_player.play();
};

//* show hide video audio players
let audio_player_box_1 = document.getElementsByClassName("player-box")[0]
let audio_player_box_2 = document.getElementsByClassName("player-box")[1]
let video_player_box_1 = document.getElementsByClassName("player-box")[2]
let video_player_box_2 = document.getElementsByClassName("player-box")[3]
let audio_player_button = document.getElementsByClassName("backup-buttons")[0]
let video_player_button = document.getElementsByClassName("backup-buttons")[1]

audio_player_button.style.backgroundColor = "yellow"
video_player_box_1.style.display = "none"
video_player_box_2.style.display = "none"

function Audio_select() {
    audio_player_box_1.style.display = "flex"
    audio_player_box_2.style.display = "flex"
    video_player_box_1.style.display = "none"
    video_player_box_2.style.display = "none"
    audio_player_button.style.backgroundColor = "yellow"
    video_player_button.style.backgroundColor = "rgba(218, 218, 218, 0.322)"
}
function Video_select() {
    audio_player_box_1.style.display = "none"
    audio_player_box_2.style.display = "none"
    video_player_box_1.style.display = "flex"
    video_player_box_2.style.display = "flex"
    audio_player_button.style.backgroundColor = "rgba(218, 218, 218, 0.322)"
    video_player_button.style.backgroundColor = "yellow"
}