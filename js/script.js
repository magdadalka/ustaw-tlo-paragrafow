const setBackground = () => {
    let p1 = document.querySelector('.first');
    let p2 = document.querySelector('.second');

    p1.classList.add('bg-red');
    p2.classList.add('bg-yellow');
}

let btnSetBackground = document.getElementById('ustaw-tlo');

btnSetBackground.addEventListener('click', setBackground);