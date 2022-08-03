function openMenu() {
    var x = document.getElementById("mobileMenu");
    var icon = document.getElementById("burger");
    icon.classList.toggle("rotate");
    x.classList.toggle("d-none");
    }


gsap.from(".news", {opacity:0,duration:2,stagger:0.5,ease: "power1.out"});
