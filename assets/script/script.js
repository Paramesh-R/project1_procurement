// Navigator

// ACTIVE - Nav link in Nav bar
let navItems = document.querySelectorAll('li.nav-item a');
navItems.forEach((el) => {
    el.addEventListener('click',()=>{
        if(!el.classList.contains('active')){
            navItems.forEach((others) =>{
                others.classList.remove('active');
            });
        };
        el.classList.add('active');
    });
});




// Common Methods

function ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        return (true);
    }
    alert("You have entered an invalid email address!");
    return (false);
}