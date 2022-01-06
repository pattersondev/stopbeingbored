window.addEventListener('load', () => {
    const api = 'https://www.boredapi.com/api/activity';
    fetch(api).then(data => {
        return data.json();
    }).then(data => {
        var text = document.getElementById("thing").innerHTML = data.activity;
    })
})

const reroll = () => {
    const api = 'https://www.boredapi.com/api/activity';
    fetch(api).then(data => {
        return data.json();
    }).then(data => {
        console.log(data.activity);
        var text = document.getElementById("thing").innerHTML = data.activity;
    })
}
document.getElementById('reroll').onclick = reroll;
