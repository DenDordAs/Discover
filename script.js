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
    } else {
        header_content.classList.remove("header_content_view")
    }

    // for (let i = 0; i < containers.length; i++) {
    //     let container = containers.slice(0, i)
    //     containers.slice(0, i)
    //     sum += container[i].clientHeight
    //     if (scrollLet <= sum) {
    //         containers[i].classList.add("header_content_view")
    //     }
    // }

    let containers = document.querySelectorAll(".container")
    let sum = 0

    for (let i = 0; i < containers.length; i++) {
        if (i != 0) {
            sum += containers[i].clientHeight
            if (sum + 200 < scrollLet) {
                if (i % 2 != 0) {
                    containers[i].style.cssText = "transform: translateX(100%);transition: .7s;opacity: 0;"
                } else {
                    containers[i].style.cssText = "transform: translateX(-100%);transition: .7s;opacity: 0;"
                }
            } else {
                if (sum - 200 - containers[i].clientHeight < scrollLet) {
                    containers[i].style.cssText = "transform: translateX(0%);transition: .7s;opacity: 1;"
                } else {
                    if (i % 2 != 0) {
                        containers[i].style.cssText = "transform: translateX(100%);transition: .7s;opacity: 0;"
                    } else {
                        containers[i].style.cssText = "transform: translateX(-100%);transition: .7s;opacity: 0;"
                    }
                }
            }
        } else {
            sum += containers[i].clientHeight
        }
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