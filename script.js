

  new Swiper('.swiper-container-3d', {
    effect: 'coverflow',
    grabCursor: false,
    centeredSlides: true,
    loop: true,
    slidesPerView: 5,
    coverflowEffect: {
      rotate: 0,       // No individual rotation
      stretch: 0,
      slideShadows: false
    },
    autoplay: {
      delay: 0,
      disableOnInteraction: false
    },
    speed: 1000
  });


   document.addEventListener('DOMContentLoaded', function() {
      new Swiper('.testimonial-slider', {
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        slidesPerView: 1,
        spaceBetween: 20,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-pre',
          
        },
        breakpoints: {
          768: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 40,
          }
        }
      });
    });


      document.querySelectorAll('.faq-toggle').forEach(button => {
    button.addEventListener('click', () => {
      const answer = button.nextElementSibling;
      const icon = button.querySelector('.faq-icon');

      answer.classList.toggle('hidden');
      icon.classList.toggle('rotate-180');
    });
  });

const buttons = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".card");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const carBtn = button.getAttribute("data-brand");

cards.forEach(card => {
  const cardSpace = card.getAttribute("data-brand");

  if (carBtn === "all" || cardSpace === carBtn){
      card.classList.remove("hidden");
  } else {
    card.classList.add("hidden");
  }
});
});
});

// Demo video player

const playBtn = document.getElementById("play");
const videoModal = document.getElementById("videoModal");
const closeModal = document.getElementById("closeModal");

let videoContainer = videoModal.querySelector(".relative");
let videoElement; // we will dynamically create it

playBtn.addEventListener("click", () => {
    // Create a new video element every time the modal is opened
    videoElement = document.createElement("video");
    videoElement.src = "/Asset/image/demo.mp4";
    videoElement.setAttribute("controls", true);
    videoElement.className = "w-full h-auto max-w-[90vw] max-h-[90vh]";
    videoContainer.appendChild(videoElement);

    videoModal.classList.remove("hidden");
    videoElement.play();
});

closeModal.addEventListener("click", () => {
    videoModal.classList.add("hidden");

    // Fully remove the video element from DOM
    if (videoElement) {
        videoElement.pause();
        videoElement.src = "";
        videoElement.load(); // release memory
        videoElement.remove();
    }
});

// Optional: Close when clicking outside the video
videoModal.addEventListener("click", (e) => {
    if (e.target === videoModal) {
        closeModal.click();
    }
});
