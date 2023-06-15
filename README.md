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
+ 참고
  + html2canvas 조합도 좋을 듯.
  + html2canvas 단독 사용시 생성된 PDF에 네이버 지도 표현 안됨. 이 문제를 toPng()가 해결함
  ```
  const createPdfIamge = async () => {
    setIsLoading(true);
    const tempPdfImages = [];
    const chartCanvas = await html2canvas(pdfRef.current);
    // 지도 영역 표현되지 않는 문제 해결 위해 html-to-image 라이브러리 적용
    const chartImageUrl = await toPng(pdfRef.current, { cacheBust: true });
    const chartPdfObj = {
      canvas: chartCanvas,
      image: chartImageUrl,
    };
    tempPdfImages.push(chartPdfObj);
    return tempPdfImages;
  };

  ```
## 리액트 네이티브 AR 테스트
+ 환경 설정
  ```
  npx create-expo-app AwesomeProject

  cd AwesomeProject
  npx expo start
  ```
  + 참고 사이트: https://reactnative.dev/docs/environment-setup?guide=quickstart&package-manager=npm
  + 이슈1
    + npx expo start 후 web 선택시 에러 발생 "If you're not using web, please ensure you remove the "web" string from the platforms array in the project Expo config."
    + 관련 의존성 모듈 설치하여 해결
      ``` npx expo install react-native-web@~0.18.9 react-dom@18.1.0 @expo/webpack-config@^0.17.2 ```
  
