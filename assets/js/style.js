//slide-bootstrap 
$('.carousel').carousel({
    interval: 3000
})

// hiện xem thêm
const showBtn = document.querySelector('.js_show');
const openContent = document.querySelector('.js_show_content');

function showcontent() {
    openContent.classList.remove("hidden_content");
    showBtn.parentNode.removeChild(showBtn);
}
showBtn.addEventListener("click", showcontent);
//scroll-nav
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        document.getElementById("nav-scroll").style.top = "0";
        document.getElementById("back-to-top__btn").style.display = "block";
    } else {
        document.getElementById("nav-scroll").style.top = "-51px";
        document.getElementById("back-to-top__btn").style.display = "none";
    }
}

document.getElementById('back-to-top__btn').addEventListener("click", function () {
    //Nếu button được click thì nhảy về đầu trang
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});




// modal buy-tickets
const mainBtn = document.querySelector('#main');
const searchBtn = document.querySelector('.js-search');
const searchPop = document.querySelector('.js-popup-search');
const logInBtn = document.querySelector('.js-login');
const cartBtn = document.querySelector('.js-cart');
const boxLogin = document.querySelector('.js-wrap-login');
const modal = document.querySelector('.modal');
const modalContainer = document.querySelector('.js-modal-container');
const closeModal = document.querySelector('.js-modal-close');
const showMenu = document.querySelector('.icon-menu-show');
const showIconMenu = document.querySelector('.js-show-menu');
const closeMenu = document.querySelector('.js-hidden-menu');
const closeIconMenu = document.querySelector('.icon-menu-close');
const listMenu = document.querySelector('.menu-nav__list');

//show menu
function showListMenu() {
    listMenu.style.display = "inline-block";
    showIconMenu.classList.add('show');
    closeIconMenu.classList.remove('show');
}
showMenu.addEventListener('click', showListMenu);

function hiddenMenu() {
    listMenu.style.display = "none";
    showIconMenu.classList.remove('show');
    closeIconMenu.classList.add('show');
}
closeMenu.addEventListener('click', hiddenMenu);

//search
function showSearch() {
    searchPop.classList.add('show');
}

searchBtn.addEventListener('click', showSearch);

function hiddenSearch() {
    searchPop.classList.remove('show');
}
mainBtn.addEventListener('mouseup', hiddenSearch);


//logIn
function showLogIn() {
    boxLogin.classList.add('show');
    searchPop.classList.add('show');
}
cartBtn.addEventListener('click', showLogIn);


function showModalLogIn() {
    modal.classList.add('open');
}
logInBtn.addEventListener('click', showModalLogIn);


function hiddenlogIn() {
    modal.classList.remove('open');
    boxLogin.classList.remove('show');
}
closeModal.addEventListener('click', hiddenlogIn);
modal.addEventListener('click', hiddenlogIn);
mainBtn.addEventListener('mouseup', hiddenlogIn);

// thương hiệu

$(document).ready(function () {

    $('.picture__list').slick({
        dots: true,
        infinite: true,
        speed: 800,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }

        ]
    });
});

$(document).ready(function () {

    $('.rademark__list').slick({
        infinite: true,
        speed: 800,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }

        ]
    });
});

//news
$(document).ready(function () {
    $(".linkfeat-1").hover(
        function () {
            $(".textfeat-1").show(500);
        },
        function () {
            $(".textfeat-1").hide(500);
        }
    );
});

$(document).ready(function () {
    $(".linkfeat-2").hover(
        function () {
            $(".textfeat-2").show(500);
        },
        function () {
            $(".textfeat-2").hide(500);
        }
    );
});


