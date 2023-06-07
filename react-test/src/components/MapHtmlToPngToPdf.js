import html2canvas from "html2canvas";

// pdf 다운 테스트
import jsPDF from "jspdf";
import { useCallback, useRef } from "react";

// img 다운 테스트
import { toPng } from "html-to-image";
import MapVisible from "./MapVisible";

const MapTest = () => {
  const refTable = useRef();
  const refMap = useRef();
  const refTotal = useRef();

  fetch("http://118.38.41.221/rest/getApStatus", {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  });

  const downloadPDF = () => {
    const input = refTotal.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      console.log("imgData : ", imgData);
      const pdf = new jsPDF("p", "mm", "a4", true);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 30;
      pdf.addImage(imgData, "PNG", 10, 10, 500, 1000);
      pdf.addImage(
        imgData,
        "PNG",
        imgX,
        imgY,
        imgWidth * ratio,
        imgHeight * ratio
      );
      pdf.save("map_down_test.pdf");
    });
  };

  // 지도가 포함된 화면을 PNG로, PNG를 PDF로
  const downloadTestjsPDF = () => {
    if (refTotal.current === null) {
      return;
    }

    toPng(refTotal.current, { cacheBust: true })
      .then((dataUrl) => {
        const img = new Image();
        img.src = dataUrl;
        console.log("img.src : ", img.src);

        img.onload = () => {
          const imgData = dataUrl;
          const pdf = new jsPDF("p", "mm", "a4", true);
          const pdfWidth = pdf.internal.pageSize.getWidth();
          console.log("pdfWidth : ", pdfWidth);
          const pdfHeight = pdf.internal.pageSize.getHeight();
          console.log("pdfHeight : ", pdfHeight);
          const imgWidth = img.width;
          console.log("imgWidth : ", imgWidth);
          const imgHeight = img.height;
          console.log("imgHeight : ", imgHeight);
          const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
          const imgX = (pdfWidth - imgWidth * ratio) / 2;
          const imgY = 30;
          pdf.addImage(
            imgData,
            "PNG",
            imgX,
            imgY,
            imgWidth * ratio,
            imgHeight * ratio
          );
          pdf.save("map_down_test.pdf");
        };
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // 지도가 포함된 화면을 PNG로, PNG를 PDF로
  const downloadTestHtmlToPDF = () => {
    if (refTotal.current === null) {
      return;
    }

    toPng(refTotal.current, { cacheBust: true })
      .then((dataUrl) => {
        const img = new Image();
        img.src = dataUrl;
        console.log("img.src : ", img.src);

        img.onload = () => {
          const imgData = dataUrl;
          const pdf = new jsPDF("p", "mm", "a4", true);
          const pdfWidth = pdf.internal.pageSize.getWidth();
          console.log("pdfWidth : ", pdfWidth);
          const pdfHeight = pdf.internal.pageSize.getHeight();
          console.log("pdfHeight : ", pdfHeight);
          const imgWidth = img.width;
          console.log("imgWidth : ", imgWidth);
          const imgHeight = img.height;
          console.log("imgHeight : ", imgHeight);
          const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
          const imgX = (pdfWidth - imgWidth * ratio) / 2;
          const imgY = 30;
          pdf.addImage(
            imgData,
            "PNG",
            imgX,
            imgY,
            imgWidth * ratio,
            imgHeight * ratio
          );
          pdf.save("map_down_test.pdf");
        };
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const downloadPNG = useCallback(() => {
    if (refMap.current === null) {
      return;
    }

    toPng(refMap.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "my-image-name.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  }, [refMap]);

  return (
    <div ref={refTotal}>
      <div ref={refMap}>
        <MapVisible />
      </div>
      <div ref={refTable}>
        <table border="1" width="500" cellpadding="20" cellspacing="10">
          <caption>지도 아닌 영역</caption>
          <tr>
            <th>제목셀1</th>
            <th>제목셀2</th>
          </tr>
          <tr>
            <td>일반칸1</td>
            <td>일반칸2</td>
          </tr>
        </table>
      </div>
      <div>
        <button onClick={downloadPDF}>Download PDF</button>
        <button onClick={downloadPNG}>Download PNG</button>
        <button onClick={downloadTestjsPDF}>Download TEST jsPDF</button>
        <button onClick={downloadTestHtmlToPDF}>Download TEST htmlToPDF</button>
      </div>
    </div>
  );
};

export default MapTest;
