const getTime = () => {
    var date = new Date();
    var hr = date.getHours();
    var minutes = date.getMinutes()
    var seconds = date.getSeconds();
    var session = "AM";
    if(hr >= 12){
        session = "PM";
    }
    if(hr == 0){
        hr == "12";
    }
    if(hr > 12){
        hr = hr -12;
    }
    if(hr<10){
        hr = '0' + hr;
    }
    if(minutes<10){
        minutes = "0" + minutes;
    }
    if(seconds<10){
        seconds = "0" + seconds;
    }
    document.getElementById("clock").innerHTML= hr + ":" + minutes + ":" + seconds + " " + session;

setTimeout(getTime,1000);
}