let VUMETER = document.getElementsByClassName("display-item")[1]

let bulbs = 0
let vumeterstate = false
const speed = 40

document.body.addEventListener("keydown", function(event) {
    document.getElementsByClassName("display-item")[0].innerHTML = "KEY: ["+String.fromCharCode(event.keyCode)+"]"
    document.getElementsByClassName("display-item")[2].innerHTML = "CODE: ["+event.keyCode+"]"
    vumeterstate = true
    vumeter("clear")
})

function vumeter(clear){
    if(clear === "clear"){VUMETER.innerHTML = ""}
    if(vumeterstate){
        if(bulbs < 10){
            if(bulbs < 4){
                var bulbcount = document.getElementsByClassName("vubulb")
                for(let iii = 0; iii < bulbcount.length; iii++){
                    bulbcount[iii].style.color = "yellow"
                }
            }
            bulbs++
            VUMETER.innerHTML += "<li class='vubulb'></li>"
        }else{
            if(bulbs == 10){
            bulbs = 11
            VUMETER.innerHTML = "<li class='vubulb'></li><li class='vubulb'></li><li class='vubulb'></li>"
            }else{
                if(bulbs == 11){
                    bulbs = 12
                    VUMETER.innerHTML = "<li class='vubulb'></li><li class='vubulb'></li><li class='vubulb'></li>"
                }else{
                    bulbs = 0
                    vumeterstate = false
                    VUMETER.innerHTML = "<li class='vubulb'></li>"
                }
            }
        }
        setTimeout(vumeter, speed)
    }
}