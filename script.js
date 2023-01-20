let user = prompt("Enter S, W or G");
let cpu = Math.floor(Math.random()*3);
let cpuI = ["S","W","G"][cpu]
const match = (cpu,user)=>{
    if (cpu===user){
        return 0
    }
    else if (cpu=="S" && user=="W"){
        return "cpu"
    }
    else if (cpu=="W" && user=="S"){
        return "user"
    }
    else if (cpu=="G" && user=="S"){
        return "cpu"
    }
    else if (cpu=="S" && user=="G"){
        return "user"
    }
    else if (cpu=="G" && user=="W"){
        return "user"
    }
    else if (cpu=="W" && user=="G"){
        return "cpu"
    }
}
var win = match(cpuI,user);
if (win==0){
    win = " Match Tied"
}
document.write(`The participants are Player with value ${user} and Computer with ${cpuI} and the winner is : ` + win)