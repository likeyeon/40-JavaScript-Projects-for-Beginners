# #5 Sidebar
![slidebar](https://github.com/likeyeon/40-JavaScript-Projects-for-Beginners/assets/94125863/59c890e8-840f-46f6-b7e2-2ae8a6d9536d)

### 📌 주요 속성 
- document.querySelector()
- addEventListener()
- classList.toggle()
- classList.remove()

### ✅ 배운점
- `remove()` : 지정한 클래스 값을 제거합니다. 문자열이 목록에 없어도 오류가 발생하지 않으며 아무 일도 일어나지 않습니다.

  ```javascript
  const menuBtn = document.querySelector(".menuBar");
  const closeBtn = document.querySelector(".close");
  const nav = document.querySelector("nav");
  
  menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
  
  closeBtn.addEventListener("click", () => {
    nav.classList.remove("active");
  });
  ```

