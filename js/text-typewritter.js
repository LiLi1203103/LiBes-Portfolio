// Nội dung cần hiển thị
const roles = ["Graphic Designer", "Photographer", "Filmmaker", "Copywriter"];
let index = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 100; // Tốc độ gõ chữ (ms)
const deletingSpeed = 50; // Tốc độ xóa chữ (ms)
const delayBetweenWords = 1000; // Thời gian chờ giữa hai từ (ms)

const dynamicText = document.getElementById("dynamic-text");

function typeEffect() {
  const currentRole = roles[index];
  if (isDeleting) {
    charIndex--;
  } else {
    charIndex++;
  }

  // Hiển thị nội dung hiện tại
  dynamicText.textContent = currentRole.substring(0, charIndex);

  // Xử lý trạng thái xóa hoặc gõ tiếp
  if (!isDeleting && charIndex === currentRole.length) {
    isDeleting = true;
    setTimeout(typeEffect, delayBetweenWords); // Chờ trước khi xóa
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    index = (index + 1) % roles.length; // Chuyển sang từ tiếp theo
    setTimeout(typeEffect, typingSpeed);
  } else {
    setTimeout(typeEffect, isDeleting ? deletingSpeed : typingSpeed);
  }
}

// Bắt đầu hiệu ứng
typeEffect();

console.log("js cho hiệu ứng đánh máy chạy được rồi nha");
