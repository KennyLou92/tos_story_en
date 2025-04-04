document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".button-container a img[data-hover]").forEach(img => {
        let originalSrc = img.src; // 原始圖片
        let hoverImages = img.getAttribute("data-hover").split(","); // 取得 hover 時的所有圖片（用逗號分隔）
        let currentIndex = 0;
        let intervalId = null;

        img.addEventListener("mouseover", function () {
            intervalId = setInterval(() => {
                currentIndex = (currentIndex + 1) % hoverImages.length;
                img.src = hoverImages[currentIndex];
            }, 500); // 每 500 毫秒換一張
        });

        img.addEventListener("mouseout", function () {
            clearInterval(intervalId); // 停止輪播
            img.src = originalSrc; // 恢復原圖
        });
    });
});
