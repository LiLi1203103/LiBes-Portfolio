// Lấy tất cả các liên kết trong menu
const menuLinks = document.querySelectorAll('.menu-link');

// Thêm sự kiện scroll để kiểm tra vị trí phần nội dung
window.addEventListener('scroll', () => {
    let currentSection = '';

    // Lấy tất cả các phần nội dung
    document.querySelectorAll('section').forEach((section) => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 60) {
            currentSection = section.getAttribute('id');
        }
    });

    // Thêm/làm nổi bật liên kết tương ứng
    menuLinks.forEach((link) => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
});

function toggleMenu() {
  const menu = document.querySelector('.vertical-menu');
  menu.classList.toggle('show'); // Thêm hoặc gỡ class "show"
}

/*js cho phần menu đóng mở khi nhấp ra ngoài*/

document.addEventListener("DOMContentLoaded", function () {
  const menu = document.querySelector(".vertical-menu");
  const menuToggle = document.querySelector(".menu-toggle");
  const menuOverlay = document.querySelector(".menu-overlay");

  // Mở menu
  menuToggle.addEventListener("click", () => {
    menu.classList.add("active");
    menuOverlay.classList.add("active");
  });

  // Đóng menu khi nhấn vào overlay
  menuOverlay.addEventListener("click", () => {
    menu.classList.remove("active");
	menu.classList.remove("show");
    menuOverlay.classList.remove("active");
  });

  // Đóng menu khi nhấn vào liên kết trong menu
  document.querySelectorAll(".menu-items a").forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.remove("active");
	menu.classList.remove("show");
      menuOverlay.classList.remove("active");
    });
  });
});

console.log("js cho thanh menu chạy được rồi nha");