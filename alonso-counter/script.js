const lastWin = new Date("2013-05-12T14:00:00");

function updateCounter() {

    const now = new Date();

    let diff = now - lastWin;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    diff %= (1000 * 60 * 60 * 24);

    const hours = Math.floor(diff / (1000 * 60 * 60));
    diff %= (1000 * 60 * 60);

    const minutes = Math.floor(diff / (1000 * 60));
    diff %= (1000 * 60);

    const seconds = Math.floor(diff / 1000);

    document.getElementById("counter").innerHTML =
        `${days} Days<br>${hours}h ${minutes}m ${seconds}s`;
}

updateCounter();
setInterval(updateCounter, 1000);