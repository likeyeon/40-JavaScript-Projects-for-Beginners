# #3 Reviews
![reviews](https://github.com/likeyeon/40-JavaScript-Projects-for-Beginners/assets/94125863/d94d4061-a2c0-471c-8eae-5949cca0d0bb)

### 📌 주요 속성 
- 객체
- DOMContentLoaded
- addEventListener()
- array.length
- textContent

### ✅ 배운점
- `DOMContentLoaded` : 해당 이벤트는 초기 HTML 문서가 완전히 구문 분석되고 로드 되었을 때 발생.
    - `DOMContentLoaded` VS `load` 
      
      ```
      <DOMContentLoaded>
      - 정의 : 브라우저가 HTML을 전부 읽고 DOM 트리를 완성하는 즉시 발생. 이미지 파일(<img>)이나 스타일시트 등의 기타 자원은 기다리지 않는다.
      - 사용 용도 : DOM이 준비된 것을 확인한 후 원하는 DOM 노드를 찾아 핸들러를 등록해 인터페이스를 초기화할 때

      <load>
      - 정의 : HTML로 DOM 트리를 만드는 게 완성되었을 뿐만 아니라 이미지, 스타일시트 같은 외부 자원도 모두 불러오는 것이 끝났을 때 발생한다.
      - 사용 용도 : 이미지 사이즈를 확인할 때 등. 외부 자원이 로드된 후이기 때문에 스타일이 적용된 상태이므로 화면에 뿌려지는 요소의 실제 크기를 확인할 수 있음
      ```
- 배열에 객체 항목을 생성하여, 슬라이드의 데이터 값을 동적으로 변경할 때 접근한다.

### 📄 참고 문서
[모던 자바스크립트 - DOMContentLoaded, load, beforeunload, unload 이벤트](https://ko.javascript.info/onload-ondomcontentloaded)
