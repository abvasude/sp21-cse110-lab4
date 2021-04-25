function timeLength(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}
setInterval(timeLength, 1000);