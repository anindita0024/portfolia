let menu = document.querySelector('#menu-btn')
let navbar = document.querySelector('.navbar')

menu.onclick = () =>{
    menu.classList.toggle('fa-xmark')
    navbar.classList.toggle('active')
}

document.querySelector('#login-btn').onclick = () =>{
    document.querySelector('.login-container').classList.toggle('active')
}

document.querySelector('#close-form').onclick = () =>{
    document.querySelector('.login-container').classList.remove('active')
}

window.onscroll = () =>{
    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active')
    }else{
        document.querySelector('.header').classList.remove('active')
    }
    menu.classList.remove('fa-xmark')
    navbar.classList.remove('active')
}


window.onload = () =>{
    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active')
    }else{
        document.querySelector('.header').classList.remove('active')
    }
    
}

document.querySelector('.home').onmousemove =(e) =>{
    document.querySelectorAll('.home-container').forEach(ele =>{
        let speed = ele.getAttribute('data-speed');

        let x = (window.innerWidth - e.pageX * speed) / 90;

        let y =(window.innerHeight - e.pageY * speed) / 90;

        ele.style.transform = `translateX(${y}px) translateX(${x}px)`
    })
}


document.querySelector('.home').onmousleave =() =>{
    document.querySelectorAll('.home-container').forEach(ele =>{
        

        ele.style.transform = `translateX(0px) translateX(0px)`
    })
}



var swiper = new Swiper(".vehicles-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop:true,
    grabCursor:true,
    centeredSlides:true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,

      },
      768: {
        slidesPerView: 2,

      },
      991: {
        slidesPerView: 3,

      },
    },
  });

  var swiper = new Swiper(".featured-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop:true,
    grabCursor:true,
    centeredSlides:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,

      },
      768: {
        slidesPerView: 2,

      },
      1048: {
        slidesPerView: 3,

      },
    },
  });

  var swiper = new Swiper(".reviews-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop:true,
    grabCursor:true,
    centeredSlides:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,

      },
      768: {
        slidesPerView: 2,

      },
      991: {
        slidesPerView: 3,

      },
    },
  });