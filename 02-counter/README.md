# #2 Counter

![counter](https://github.com/likeyeon/40-JavaScript-Projects-for-Beginners/assets/94125863/5d4ddc42-b78a-43c9-8915-f48f55a1bb74)

### 📌 주요 속성 
- document.querySelectorAll()
- forEach()
- addEventListener()
- currentTarget 속성
- classList
- textContent

### ✅ 배운점
- `forEach` 함수를 통해 `querySelectorAll` 로 불러온 `NodeList` 배열 요소 각각에 접근
- 클릭 이벤트 발생 시, `currenTarget` 을 통해 이벤트가 발생한 요소 추적
- `Node.textContent` vs `Element.innerHTML`, `HTMLElement.innerText`
  
    ```
    <innerText 와의 차이점>
    - textContent는 <script>와 <style> 요소를 포함한 모든 요소의 콘텐츠를 가져온다. 반면 innerText는 "사람이 읽을 수 있는" 요소만 처리한다.
    - textContent는 노드의 모든 요소를 반환한다. 그에 비해 innerText는 스타일링을 고려하며, "숨겨진('display:none')" 요소의 텍스트는 반환하지 않는다.

    <innerHTML 과의 차이점>
    - innerHTML는 이름 그대로 HTML을 반환한다. 간혹 innerHTML을 사용해 요소의 텍스트를 가져오거나 쓰는 경우가 있지만, HTML로 분석할 필요가 없다는 점에서 textContent의 성능이 더 좋다.
    ```
