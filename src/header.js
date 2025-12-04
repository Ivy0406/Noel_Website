// 宣告變數
const menuBtn = document.getElementById('menu-btn');
const menuList = document.getElementById('menu-list');
const menuIcon = document.getElementById('menu-icon');

const iconPath = {
    open: "./src/assets/images/icon/menu-icon.svg",  
    close: "./src/assets/images/icon/close-icon.svg" 
};

// 事件監聽區

// 點擊漢堡選單：跳出選單 + 切換icon
menuBtn.addEventListener("click", function() {
    // 切換隱藏狀態
    menuList.classList.toggle("hidden");

    // 根據切換後的狀態來決定顯示哪個icon
    if (menuList.classList.contains("hidden")) {
        // 如果現在是隱藏的就顯示漢堡選單圖示
        menuIcon.src = iconPath.open;
    } else {
        // 如果現在是顯示的就顯示關閉圖示
        menuIcon.src = iconPath.close;
    }
});

// B. 點擊選單項目：關閉選單 + icon變回漢堡
menuList.addEventListener("click", function() {
    // 隱藏選單
    menuList.classList.add("hidden");
    
    // 選單關閉了，icon重置回漢堡圖
    menuIcon.src = iconPath.open;
});