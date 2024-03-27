const turnOn = document.getElementById ('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');
const topo = document.getElementById('topo');
const refreshBtn = document.getElementById('refreshBtn');
const topo2 = document.getElementById('topo2');

function isBroken(){
    return lamp.src.indexOf('lampbrake') > -1
}

function lampOn(){
    if(!isBroken()){
    lamp.src = './img/lampon.jpg';
    turnOn.style.visibility = 'hidden';
    turnOff.style.visibility = 'visible';
}
}

function lampOff(){
    if(!isBroken()){
    lamp.src = './img/lampoff.jpg';
    turnOff.style.visibility = 'hidden';
    turnOn.style.visibility = 'visible';
}
}

function lampBrake(){
    lamp.src = './img/lampbrake.jpg';
    turnOff.style.visibility = 'hidden';
    turnOn.style.visibility = 'hidden';
    topo.textContent = 'Lâmpada quebrada, realizar troca!!';
    refreshBtn.style.visibility = 'visible';
    topo2.style.display = 'none'
}

function reloadBtn(){
    window.location.reload();

}


turnOn.addEventListener('click', lampOn)
turnOff.addEventListener('click', lampOff)
lamp.addEventListener('dblclick', lampBrake)
refreshBtn.addEventListener('click', reloadBtn)