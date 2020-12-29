'use strict'

const switcher = document.querySelector('.btn')

switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme')

    const className = document.body.className;
    if(className == "light-theme") {
        className.textContent = "Dark";
    }
    
    else {
        className.textContent = "Light"
    }
    console.log('current class name: ' + className);
});


