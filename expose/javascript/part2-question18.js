function time() {
    let d = newDate();
    let time = d.toLocaleTimeString();
    console.log(time);
}
setInterval(time,1000);