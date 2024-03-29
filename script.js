var daysEl = document.querySelector("#days");
var hoursEl = document.querySelector("#hours");
var minutesEl = document.querySelector("#minutes");
var secondsEl = document.querySelector("#seconds");

 setInterval(
    function days() {
        var currentTime = new Date();
        var worldCupTime = new Date(2026, 12, 12, 10, 0, 0, 0, 0);
        var diff = (worldCupTime.getTime() - currentTime.getTime()) / 1000;
        
        var days = Math.floor(diff / 60 / 60 / 24);

        var hoursRough = diff - (days * 60 * 60 * 24);
        var hours = Math.floor(hoursRough / 60 / 60);

        var minutesRough = hoursRough - (hours * 60 * 60);
        var minutes = Math.floor(minutesRough / 60);

        var secondsRough = minutesRough - (minutes * 60);
        var seconds = Math.floor(secondsRough);

        daysEl.innerText = days;
        hoursEl.innerText = hours;
        minutesEl.innerText = minutes;
        secondsEl.innerText = seconds;

    }, 1000
)


