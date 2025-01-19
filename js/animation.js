document.addEventListener("DOMContentLoaded", function () {
    const animatedElements = document.querySelectorAll(".animated");

    // Tạo Intersection Observer
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Khi phần tử xuất hiện trong màn hình
                    entry.target.classList.add("animated-active");
                } else {
                    // Khi phần tử ra khỏi màn hình
                    entry.target.classList.remove("animated-active");
                }
            });
        },
        { threshold: 0.1 } // Kích hoạt khi 10% phần tử xuất hiện
    );

    // Quan sát từng phần tử
    animatedElements.forEach((element) => {
        observer.observe(element);
    });
});

function isMobile() {
  return window.innerWidth <= 768; // Mobile kích thước <= 768px
}

function adjustAnimations() {
  const elements = document.querySelectorAll('.animated');

  elements.forEach((el) => {
    if (isMobile()) {
      el.style.transition = 'all 0.5s ease'; // Giảm thời gian animation
    } else {
      el.style.transition = 'all 1s ease'; // Thời gian mặc định
    }
  });
}

window.addEventListener('resize', adjustAnimations);
window.addEventListener('DOMContentLoaded', adjustAnimations);