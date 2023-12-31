const sideMenu =  document.querySelector("aside");
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const themeToggler = document.querySelector('.theme-toggler');


// show sidebar
menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
})

// close sidebar
closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
})

// change theme
themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');

    // change styling to active toggle icon
    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
})