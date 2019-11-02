'use strict';
const body = document.getElementById('scene3');
const classes = ['white', 'white', 'yellow', 'purple', 'blue', 'blue', 'blank'];
const num = classes.length + 1;
const oddeve = ['odd', 'even'];
const maxnum = 1000;
let min = 0;
let timer;
(() => {
    timer = setInterval(() => {
        min++;
        console.log(min);
        if (min > 70) {
            clearInterval(timer);
            document.getElementById('sceneend').classList.add('end');
        }
    }, 1000);
})();

const create_div = (classname) => {
    const div = document.createElement('div');
    div.setAttribute('class', `tile ${classname}`);
    return div;
}

(() => {
    let rand = 0;
    for (let i = 0; i < maxnum; i++) {
        rand = Math.floor(Math.random() * num);
        let div = create_div(classes[rand]);
        div.classList.add(oddeve[i % 2]);
        body.appendChild(div);
    }
})();
