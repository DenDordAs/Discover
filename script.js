let header = document.querySelector(".header_fixed")
let scrollPrev = 0
let id_btn_up = document.querySelector(".btn_up")
let header_content = document.querySelector(".header_content")

window.addEventListener("scroll", () => {
    let scrollLet = window.scrollY

    if (scrollLet < 190 || (scrollLet > 100 && scrollLet > scrollPrev)) {
        header.classList.remove("out")
    } else {
        header.classList.add("out")
    }
    scrollPrev = scrollLet

    if (scrollLet > 500) {
        id_btn_up.classList.add("button_up")
    } else {
        id_btn_up.classList.remove("button_up")
    }

    if (scrollLet <= 450) {
        header_content.classList.add("header_content_view")
    } else{
        header_content.classList.remove("header_content_view")
    }
})

if (window.scrollY <= 450) {
    header_content.classList.add("header_content_view")
}

function clickUp() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

function disableScrolling(){
    let e = document.querySelector("body");
    let x = e.scrollLeft;
    let y = e.scrollTop;
    e.onscroll = function(){e.scrollTo(x, y);};
}

disableScrolling()