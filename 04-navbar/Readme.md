# #4 Navbar
![navbar](https://github.com/likeyeon/40-JavaScript-Projects-for-Beginners/assets/94125863/b1fd0c23-8e31-48f5-96b4-b42a460b4662)

### 📌 주요 속성 
- document.querySelector()
- addEventListener()
- classList.toggle()

### ✅ 배운점
- `toggle` : 토큰이 존재하면 토큰제거, 존재 하지 않으면 토큰을 추가해준다. (ex. 스마트폰 옆 소리 on/off 버튼)

  ```javascript
  const menuBarBtn = document.querySelector(".menuBar");
  const menu = document.querySelector(".menu-mobile");
  
  menuBarBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
  ```

