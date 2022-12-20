let header = document.querySelector(".header_fixed")
let scrollPrev = 0
let id_btn_up = document.querySelector(".btn_up")
let header_content = document.querySelector(".header_content")

$(window).scroll(function(){
    let scrollLet = window.scrollY

    if (scrollLet < 190 || (scrollLet > 100 && scrollLet > scrollPrev)) {
        header.classList.remove("out")
    } else {
        header.classList.add("out")
        $(".burger").removeClass("active")
        $("nav").removeClass("active_nav")
    }
    scrollPrev = scrollLet

    if (scrollLet > 500) {
        id_btn_up.classList.add("button_up")
    } else {
        id_btn_up.classList.remove("button_up")
    }

    if (scrollLet <= 450) {
        header_content.classList.add("header_content_view")
    } else {
        header_content.classList.remove("header_content_view")
    }

    if($(window).width() <= 940) {
        containersAnim(1000,400,scrollLet)
    }else{
        containersAnim(200,200,scrollLet)
    }
})

function containersAnim(number1,number2,scrollLet){
    let containers = document.querySelectorAll(".container")
    let sum = 0
    for (let i = 0; i < containers.length; i++) {
        if (i != 0) {
            sum += containers[i].clientHeight
            if (sum + number1 < scrollLet) {
                if (i % 2 != 0) {
                    containers[i].classList.add('container_hide_r')
                    containers[i].classList.remove('container_show')
                } else {
                    containers[i].classList.add('container_hide_l')
                    containers[i].classList.remove('container_show')
                }
            } else {
                if (sum - number2 - containers[i].clientHeight < scrollLet) {
                    containers[i].classList.remove('container_hide_r')
                    containers[i].classList.remove('container_hide_l')
                    containers[i].classList.add('container_show')
                } else {
                    if (i % 2 != 0) {
                        containers[i].classList.add('container_hide_r')
                        containers[i].classList.remove('container_show')
                    } else {
                        containers[i].classList.add('container_hide_l')
                        containers[i].classList.remove('container_show')
                    }
                }
            }
        } else {
            sum += containers[i].clientHeight
        }
    }
}

if (window.scrollY <= 450) {
    header_content.classList.add("header_content_view")
}

function clickUp() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

$(".burger").click(function(){
    $(this).toggleClass("active")
    $("nav").toggleClass("active_nav")
    $("body").toggleClass("disable_body")
})

$("nav").click(function(){
    $(".burger").toggleClass("active")
    $(this).toggleClass("active_nav")
    $("body").toggleClass("disable_body")
})