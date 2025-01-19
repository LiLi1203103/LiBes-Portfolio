document.addEventListener("DOMContentLoaded", function () {
    const skillsSection = document.getElementById("skills-section");
    const skillBars = document.querySelectorAll(".skill-bar-fill");

    function runSkillBars() {
        skillBars.forEach(skillBar => {
            const percent = parseInt(skillBar.getAttribute("data-percent"));
            const percentText = skillBar.querySelector(".skill-percent"); // Lấy phần tử hiển thị %

            let currentPercent = 0;
            const interval = setInterval(() => {
                if (currentPercent >= percent) {
                    clearInterval(interval);
                    // Đặt vị trí cuối cùng của .skill-percent
                    percentText.style.left = "calc(100% - 20px)";
                    percentText.style.top = "-20px"; // Phía trên thanh
                } else {
                    currentPercent++;
                    skillBar.style.width = currentPercent + "%";

                    // Kiểm tra xem đã đạt 40% chưa để hiển thị
                    if (currentPercent >= 40) {
                        percentText.style.opacity = "1"; // Hiển thị .skill-percent
                    }

                    // Cập nhật giá trị % và vị trí
                    percentText.textContent = currentPercent + "%";
                    if (currentPercent < percent) {
                        percentText.style.left = currentPercent + "%";
                        percentText.style.top = "-20px"; // Phía trên thanh
                    }
                }
            }, 20); // Thời gian tăng mỗi lần (20ms)
        });
    }

    // Intersection Observer để kích hoạt khi cuộn tới section
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    runSkillBars();
                    observer.unobserve(skillsSection); // Chỉ chạy một lần
                }
            });
        },
        { threshold: 0.5 } // Kích hoạt khi 50% của section xuất hiện
    );

    observer.observe(skillsSection);
});

console.log("js cho thanh skill chạy được rồi nha");
