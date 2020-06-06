const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

function getTime() {
    const xmasDay = new Date("2020-12-24:00:00:00+0900");
    console.log(xmasDay);
    console.log(xmasDay.getDate());
    console.log(xmasDay.getDay());
}

function init() {
    getTime();
    setInterval(getTime, 1000);
}
init();