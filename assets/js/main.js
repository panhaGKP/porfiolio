
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/* ======Menu show====== */
/* ======Validate if constant exist===========*/
if(navToggle){
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu')
    })
}


/* ======Menu Hidden====== */
/* ======Validate if constant exist===========*/
if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu')
    })
}
/* ======Remove Menu Mobile====== */
const navLink = document.querySelectorAll('.nav__link')
function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    //when we click on menu link, we remove the menu list
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n=>n.addEventListener('click', linkAction))

/*========Show Accordingly skill */
const skillsContent = document.getElementsByClassName('skills__content')
const skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills(){
    let itemClass  = this.parentNode.className
    for(i=0 ; i< skillsContent.length; i++){
        skillsContent[i].className = 'skills__content skills__close'
    }
    if(itemClass == 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open'
    }
}
skillsHeader.forEach((el)=>{
    el.addEventListener('click', toggleSkills)
})

/*===========Qualification Tab============== */
const tabs = document.querySelectorAll('[data-target')
const tabContents = document.querySelectorAll('[data-content]');

tabs.forEach(tab=>{
    tab.addEventListener('click', ()=>{
        const target = document.querySelector(tab.dataset.target)
        tabContents.forEach(tabContent=>{
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')
        tabs.forEach(tab=>{
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
})

/*================SERVICE MODAL====================*/ 
const modalViews = document.querySelectorAll('.services__modal')
const modalBtns = document.querySelectorAll('.services__button')
const modalCloses = document.querySelectorAll('.services__modal-close')


let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach(
    (modalBtn, i)=> {
        modalBtn.addEventListener('click', ()=>{
            modal(i)
        })
    }
)

modalCloses.forEach(
    (modalClose)=>{
        modalClose.addEventListener('click', ()=>{
            modalViews.forEach(
                (modalView)=>{
                    modalView.classList.remove('active-modal')
                }
            )
        })
    }
)

// ============Scroll section active link==================== No use
const sections = document.querySelectorAll(".section[id]");
const navLi = document.querySelectorAll(".nav .nav__menu .nav__list .nav__item .nav__link");
window.onscroll = ()=>{
    var current = "";
    sections.forEach(
        (section)=>{
            const sectionTop = section.offsetTop;
            var pageYOffset = window.scrollY;
            if(pageYOffset >= sectionTop - 50){
                current = section.getAttribute('id');
            }
        }
    );
    navLi.forEach(
        (li)=>{
            li.classList.remove("active-link")
            
            if(li.classList.contains(current)){
                li.classList.add("active-link")
            }
        }
    );

};

// ==================Change background Header===================
function scrollHeader(){
    const nav = document.getElementById('header')
    //when the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >=80){
        nav.classList.add('scroll-header')
    }else{
        nav.classList.remove('scroll-header')
    }
}
window.addEventListener('scroll', scrollHeader);


// =============SHOW SCROLL TOP===================
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll');else scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp)


/*===========Dark theme color=========== */
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

//previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// we obtain the current theme that the interface has by validating the darktheme class 
const getCurrentTheme= ()=>document.body.classList.contains(darkTheme)? 'dark':'light'
const getCurrentIcon= ()=>document.body.classList.contains(iconTheme)? 'uil-moon':'uil-sun'

//validate if the user previously chose a topic

if(selectedTheme){
    document.body.classList[selectedTheme ==='dark'? 'add' : 'remove'](darkTheme)
    document.body.classList[selectedTheme ==='uil-moon'? 'add' : 'remove'](iconTheme)
}

// activate/deactivate the theme manullay witht he button
themeButton.addEventListener('click',()=>{

    //add or remove the dark icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    // save the theme and the current  icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

