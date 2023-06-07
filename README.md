# dandy-lab
## 환경 변수 설정
+ npm i dotenv
+ npm i env-cmd
+ package.json
  + env-cmd를 이용해 환경 변수 적용
```
"scripts": {
  ... 생략 ...
  "start:dev": "env-cmd -f .env npm start"
},
```
## 네이버 지도 화면 PDF 변환 저장 기능
+ 라이브러리
  + npm i html-to-image
  + npm i jspdf
+ 방법
  + html-to-image 라이브러리의 toPng()를 이용해 html을 PNG로 변환, jsPDF를 이용해 PNG를 PDF로 저장
