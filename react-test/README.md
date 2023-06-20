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

