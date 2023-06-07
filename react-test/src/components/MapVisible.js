import React from "react";
import {
  Container as MapDiv,
  Marker,
  NaverMap,
  Overlay,
  useNavermaps,
} from "react-naver-maps";
import ReactDOMServer from "react-dom/server";

function MapTest() {
  const navermaps = useNavermaps();

  const upperP1 = new navermaps.LatLng([129.1115175, 36.665338]); // 중심
  const upperP2 = new navermaps.LatLng([129.1121613, 36.6663793]); // 위
  const upperP3 = new navermaps.LatLng([129.1109274, 36.6638922]); // 아래
  const upperP4 = new navermaps.LatLng([129.1100906, 36.6659749]); // 좌
  const upperP5 = new navermaps.LatLng([129.113556, 36.6646323]); // 우
  const lowerP1 = upperP1.destinationPoint(0, 0); // 중심
  const lowerP2 = upperP2.destinationPoint(0, 0); // 위
  const lowerP3 = upperP3.destinationPoint(0, 0); // 아래
  const lowerP4 = upperP4.destinationPoint(0, 0); // 좌
  const lowerP5 = upperP5.destinationPoint(0, 0); // 우

  const arrowLine = [];

  // arrow-위
  arrowLine.push(
    new navermaps.Polyline({
      path: [lowerP1.destinationPoint(0, 0), lowerP2.destinationPoint(0, 0)],
      map: navermaps,
      endIcon: navermaps.PointingIcon.BLOCK_ARROW,
      endIconSize: 30,
      strokeColor: "#FF9900",
      strokeOpacity: 1,
      strokeWeight: 10,
      zIndex: 0,
    })
  );
  // arrow-아래
  arrowLine.push(
    new navermaps.Polyline({
      path: [lowerP1.destinationPoint(0, 0), lowerP3.destinationPoint(0, 0)],
      map: navermaps,
      endIcon: navermaps.PointingIcon.BLOCK_ARROW,
      endIconSize: 30,
      strokeColor: "#0087E8",
      strokeOpacity: 1,
      strokeWeight: 10,
      zIndex: 0,
    })
  );
  // arrow-좌
  arrowLine.push(
    new navermaps.Polyline({
      path: [lowerP1.destinationPoint(0, 0), lowerP4.destinationPoint(0, 0)],
      map: navermaps,
      endIcon: navermaps.PointingIcon.BLOCK_ARROW,
      endIconSize: 30,
      strokeColor: "#ff0000",
      strokeOpacity: 1,
      strokeWeight: 10,
      zIndex: 0,
    })
  );
  // arrow-우
  arrowLine.push(
    new navermaps.Polyline({
      path: [lowerP1.destinationPoint(0, 0), lowerP5.destinationPoint(0, 0)],
      map: navermaps,
      endIcon: navermaps.PointingIcon.BLOCK_ARROW,
      endIconSize: 30,
      strokeColor: "#ff0000",
      strokeOpacity: 1,
      strokeWeight: 10,
      zIndex: 0,
    })
  );

  const circlePositionArr = [];

  circlePositionArr.push(new navermaps.LatLng([129.1115175, 36.665338])); // 중심[0]
  circlePositionArr.push(new navermaps.LatLng([129.11187, 36.6658974])); // 위[1]
  circlePositionArr.push(new navermaps.LatLng([129.11121, 36.6646065])); // 아래[2]
  circlePositionArr.push(new navermaps.LatLng([129.1108792, 36.665622])); // 좌[3]
  circlePositionArr.push(new navermaps.LatLng([129.1124456, 36.665011])); // 우[4]

  // circle-중심
  arrowLine.push(
    new navermaps.Circle({
      map: navermaps,
      center: circlePositionArr[0],
      radius: 30,
      strokeOpacity: 0,
      fillColor: "#000",
      fillOpacity: 0.5,
      zIndex: 1,
    })
  );
  arrowLine.push(
    new navermaps.Circle({
      map: navermaps,
      center: circlePositionArr[0],
      radius: 10,
      strokeOpacity: 1,
      strokeWeight: 5,
      strokeColor: "#fff",
      fillColor: "#ff0000",
      fillOpacity: 1,
      zIndex: 2,
    })
  );
  // circle-위
  arrowLine.push(
    new navermaps.Circle({
      map: navermaps,
      center: circlePositionArr[1],
      radius: 20,
      strokeOpacity: 0.5,
      strokeWeight: 10,
      strokeColor: "#FF9900",
      fillColor: "#FF9900",
      fillOpacity: 1,
      zIndex: 1,
    })
  );
  // circle-아래
  arrowLine.push(
    new navermaps.Circle({
      map: navermaps,
      center: circlePositionArr[2],
      radius: 20,
      strokeOpacity: 0.5,
      strokeWeight: 10,
      strokeColor: "#0087E8",
      fillColor: "#0087E8",
      fillOpacity: 1,
      zIndex: 1,
    })
  );
  // circle-좌
  arrowLine.push(
    new navermaps.Circle({
      map: navermaps,
      center: circlePositionArr[3],
      radius: 20,
      strokeOpacity: 0.5,
      strokeWeight: 10,
      strokeColor: "#FF0000",
      fillColor: "#FF0000",
      fillOpacity: 1,
      zIndex: 1,
    })
  );
  // circle-우
  arrowLine.push(
    new navermaps.Circle({
      map: navermaps,
      center: circlePositionArr[4],
      radius: 20,
      strokeOpacity: 0.5,
      strokeWeight: 10,
      strokeColor: "#FF0000",
      fillColor: "#FF0000",
      fillOpacity: 1,
      zIndex: 1,
    })
  );

  // 유동인구수
  const tempValues = [null, 79, 15, 201, 394];
  const contentArr = tempValues.map((el) =>
    ReactDOMServer.renderToString(
      <div style={{ display: "flex", width: "25px" }}>
        <div
          style={{
            color: "#fff",
            margin: "auto",
          }}
        >
          {el}
        </div>
      </div>
    )
  );

  return (
    <NaverMap
      defaultCenter={new navermaps.LatLng(36.6640471, 129.1149293)}
      defaultZoom={17}
      disableKineticPan={false}
    >
      {arrowLine.map((el, idx) => (
        <Overlay element={el} />
      ))}
      {circlePositionArr.map((el, idx) => (
        <Marker
          position={el}
          icon={{
            content: contentArr[idx],
            origin: new navermaps.Point(0, 0),
            anchor: new navermaps.Point(13, 13),
          }}
        />
      ))}
    </NaverMap>
  );
}

function MapVisible() {
  return (
    <MapDiv
      style={{
        width: "100%",
        height: "800px",
      }}
    >
      <MapTest />
    </MapDiv>
  );
}

export default MapVisible;
