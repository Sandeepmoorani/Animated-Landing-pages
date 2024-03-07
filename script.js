let signup = document.querySelector('.signup');
let signin = document.querySelector('.signin');
let namefield = document.querySelector('.namefield');
let title = document.querySelector('.title');
let underline = document.querySelector('.underline');


signin.addEventListener('click', () => {
    namefield.style.display = 'none';
    title.innerHTML = 'Sign In';
    // underline.style.width = '60px';
    signup.classList.add('disable');
    signin.classList.remove('disable');
    underline.style.transform = 'translateX(35px)';

});
signup.addEventListener('click', () => {
    namefield.style.display = 'flex';
    title.innerHTML = 'Sign Up';
    // underline.style.width = '60px';
    signup.classList.remove('disable');
    signin.classList.add('disable');
    underline.style.transform = 'translateX(0)';

});