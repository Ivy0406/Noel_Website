const overlay = document.getElementById('overlay')
const modal = document.getElementById('modal')
const closeBtn = document.getElementById('closeBtn')

// 打開視窗
modal.addEventListener('click', () => {
  overlay.classList.remove('hidden')   // 顯示
})

// 關閉視窗
closeBtn.addEventListener('click', () => {
  overlay.classList.add('hidden')      // 隱藏
})

// 點黑色背景也關閉視窗
overlay.addEventListener('click', (e) => {
  if (e.target === overlay) {
    overlay.classList.add('hidden')
  }
})