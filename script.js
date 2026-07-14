/*=========================================
 SCOVEE ENERGY RESOURCES LTD
 Premium JavaScript
 Part C1
=========================================*/

/*==============================
PRELOADER
==============================*/

window.addEventListener("load", () => {

    const loader = document.getElementById("preloader");

    const progress = document.querySelector(".loading-progress");

    progress.style.width = "100%";

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

        loader.style.transition = ".7s ease";

    }, 1400);

});

/*==============================
STICKY NAVBAR
==============================*/

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});

/*==============================
SMOOTH SCROLL
==============================*/

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

/*==============================
ACTIVE NAV LINK
==============================*/

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const top = section.offsetTop - 150;

        const height = section.offsetHeight;

        if(window.scrollY >= top){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});

/*==============================
CURRENT YEAR
==============================*/

const year = document.getElementById("year");

if(year){

    year.textContent = new Date().getFullYear();

}

/*=========================================
 PART C2
 Animated Counters
 Scroll Reveal
 Hero Animation
=========================================*/

/*==============================
ANIMATED COUNTERS
==============================*/

const counters = document.querySelectorAll(".counter");

let counterStarted = false;

function startCounters() {

    if (counterStarted) return;

    const stats = document.querySelector(".stats");

    if (!stats) return;

    const trigger = stats.getBoundingClientRect().top;

    if (trigger < window.innerHeight - 120) {

        counterStarted = true;

        counters.forEach(counter => {

            const target = +counter.dataset.target;

            let count = 0;

            const duration = 1800;

            const increment = target / (duration / 16);

            function updateCounter() {

                count += increment;

                if (count < target) {

                    counter.textContent = Math.floor(count);

                    requestAnimationFrame(updateCounter);

                } else {

                    counter.textContent = target;

                }

            }

            updateCounter();

        });

    }

}

window.addEventListener("scroll", startCounters);

window.addEventListener("load", startCounters);

/*==============================
SCROLL REVEAL
==============================*/

const revealElements = document.querySelectorAll(

    ".service-card, .industry-card, .about-card, .mvp-card, .stat-box, .info-card, .contact-form"

);

const revealObserver = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {

        threshold:0.15

    }

);

revealElements.forEach(el => {

    el.classList.add("fade-up");

    revealObserver.observe(el);

});

/*==============================
SECTION TITLE ANIMATION
==============================*/

const headers = document.querySelectorAll(".section-header");

const headerObserver = new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.animate([

{

opacity:0,

transform:"translateY(40px)"

},

{

opacity:1,

transform:"translateY(0)"

}

],{

duration:800,

fill:"forwards",

easing:"ease"

});

}

});

},

{

threshold:.2

}

);

headers.forEach(h=>headerObserver.observe(h));

/*==============================
HERO CONTENT
==============================*/

window.addEventListener("load",()=>{

const hero = document.querySelector(".hero-text");

hero.animate([

{

opacity:0,

transform:"translateY(50px)"

},

{

opacity:1,

transform:"translateY(0)"

}

],{

duration:1200,

fill:"forwards",

easing:"ease"

});

});

/*==============================
STAT CARD HOVER EFFECT
==============================*/

document.querySelectorAll(".stat-box").forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-12px) scale(1.03)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0) scale(1)";

});

});

/*=========================================
 PART C3
 Premium Interactions
=========================================*/

/*==============================
HERO PARALLAX
==============================*/

const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {

    const offset = window.pageYOffset;

    if(hero){

        hero.style.backgroundPositionY = offset * 0.45 + "px";

    }

});

/*==============================
BACK TO TOP BUTTON
==============================*/

const topBtn = document.createElement("button");

topBtn.innerHTML = '<i class="ri-arrow-up-line"></i>';

topBtn.className = "back-to-top";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

    if(window.scrollY > 500){

        topBtn.classList.add("show");

    }else{

        topBtn.classList.remove("show");

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

/*==============================
BUTTON RIPPLE EFFECT
==============================*/

document.querySelectorAll(".primary-btn").forEach(button=>{

button.addEventListener("click",function(e){

const circle=document.createElement("span");

const diameter=Math.max(this.clientWidth,this.clientHeight);

const radius=diameter/2;

circle.style.width=circle.style.height=diameter+"px";

circle.style.left=e.clientX-this.getBoundingClientRect().left-radius+"px";

circle.style.top=e.clientY-this.getBoundingClientRect().top-radius+"px";

circle.classList.add("ripple");

const ripple=this.getElementsByClassName("ripple")[0];

if(ripple){

ripple.remove();

}

this.appendChild(circle);

});

});

/*==============================
FLOATING WHATSAPP
==============================*/

const whatsapp=document.querySelector(".whatsapp");

setInterval(()=>{

whatsapp.animate([

{

transform:"translateY(0)"

},

{

transform:"translateY(-8px)"

},

{

transform:"translateY(0)"

}

],{

duration:1800

});

},2500);

/*==============================
ACTIVE BUTTON GLOW
==============================*/

document.querySelectorAll(".primary-btn").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.boxShadow="0 15px 45px rgba(37,99,235,.45)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.boxShadow="";

});

});

/*==============================
LAZY IMAGE FADE
==============================*/

const images=document.querySelectorAll("img");

const imgObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="scale(1)";

}

});

});

images.forEach(img=>{

img.style.opacity=".0";

img.style.transform="scale(1.05)";

img.style.transition="1s";

imgObserver.observe(img);

});

/*==============================
NAVBAR HIDE/SHOW
==============================*/

let lastScroll=0;

window.addEventListener("scroll",()=>{

const current=window.pageYOffset;

if(current>lastScroll && current>150){

header.style.transform="translateY(-100%)";

}else{

header.style.transform="translateY(0)";

}

lastScroll=current;

});

/*==============================
CURSOR GLOW
==============================*/

const glow=document.createElement("div");

glow.className="cursor-glow";

document.body.appendChild(glow);

document.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX+"px";

glow.style.top=e.clientY+"px";

});

/*==============================
CONSOLE SIGNATURE
==============================*/

console.log("%cSCOVEE ENERGY RESOURCES LTD","font-size:22px;font-weight:bold;color:#2563EB");

console.log("%cWebsite Concept by Habeeb","font-size:14px;color:#64748B");
