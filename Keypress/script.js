const input = document.querySelector('body');
const resKey = document.getElementById('key-press');
const resCode =document.getElementById('key-code');
const resWhich =document.getElementById('key-which');
const resLocation =document.getElementById('key-location');



    input.addEventListener('keydown', logKey);

function logKey(e) {
    resKey.textContent = ` ${e.key}`;
    resCode.textContent = ` ${e.code}`;
    resWhich.textContent = ` ${e.which}`;
    resLocation.textContent = ` ${e.location}`;

}

