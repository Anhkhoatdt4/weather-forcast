import { useEffect, useRef } from "react";
import * as Cesium from "cesium";
import "cesium/Build/Cesium/Widgets/widgets.css";
import { useOutletContext } from "react-router-dom";

declare global {
  interface Window {
    CESIUM_BASE_URL?: string;
  }
}

const CesiumGlobe: React.FC = () => {
  const cesiumContainer = useRef<HTMLDivElement | null>(null);
  const { setTitleHeader } = useOutletContext<{ setTitleHeader: (title: string) => void }>();
  useEffect(() => {
    setTitleHeader("🌍 Weather Cesium Globe");

    let viewer: Cesium.Viewer;
    let handler: Cesium.ScreenSpaceEventHandler;

    const initCesium = async () => {
      // Set base path cho các tài nguyên của Cesium
      window.CESIUM_BASE_URL = "/Cesium";

      // Khởi tạo Cesium Viewer
      viewer = new Cesium.Viewer(cesiumContainer.current!, {
        // terrainProvider: await Cesium.createWorldTerrainAsync(),
        baseLayerPicker: false,
        timeline: false,
        animation: false,
        fullscreenButton: false,
        geocoder: false,
        homeButton: false,
        sceneModePicker: false,
        navigationHelpButton: false,
        infoBox: false,
        selectionIndicator: false,
      });

      // ===== CAIỈ THIỆN ZOOM MƯỢT MÀ =====
      const scene = viewer.scene;
      const camera = viewer.camera;
      const controller = scene.screenSpaceCameraController;

      // Thiết lập zoom mượt mà hơn
      controller.enableCollisionDetection = false;
      controller.minimumZoomDistance = 100; // Zoom gần nhất 100m
      controller.maximumZoomDistance = 50000000; // Zoom xa nhất 50,000km

      // Cải thiện tốc độ và độ mượt của zoom
      controller.zoomEventTypes = [
        Cesium.CameraEventType.WHEEL,
        Cesium.CameraEventType.PINCH,
      ];

      // Thiết lập inertia cho các chuyển động mượt mà hơn
      controller.inertiaSpin = 0.9; // Xoay mượt hơn
      controller.inertiaTranslate = 0.9; // Di chuyển mượt hơn
      controller.inertiaZoom = 0.8; // Zoom mượt hơn

      // Kích hoạt tất cả các controls
      controller.enableLook = true;
      controller.enableRotate = true;
      controller.enableTilt = true;
      controller.enableTranslate = true;
      controller.enableZoom = true;

      // Tùy chỉnh tốc độ zoom
      // Cesium không hỗ trợ trực tiếp wheelZoomAmountMultiplier, có thể cần custom thêm nếu muốn giảm tốc độ zoom wheel.
      // Hiện tại, Cesium không expose thuộc tính này trên ScreenSpaceCameraController.

      // Set terrain provider asynchronously
      Cesium.createWorldTerrainAsync().then((terrainProvider) => {
        viewer.terrainProvider = terrainProvider;
      });

      // ===== XỬ LÝ CLICK VÀ THÊM MARKER =====
      handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);

      // Click để thêm marker
      handler.setInputAction(
        (movement: Cesium.ScreenSpaceEventHandler.PositionedEvent) => {
          const cartesian = viewer.camera.pickEllipsoid(movement.position);
          if (cartesian) {
            const cartographic = Cesium.Cartographic.fromCartesian(cartesian);
            const latitude = Cesium.Math.toDegrees(cartographic.latitude);
            const longitude = Cesium.Math.toDegrees(cartographic.longitude);

            // Thêm dấu chấm đỏ tại vị trí click
            const entity = viewer.entities.add({
              id: `marker_${Date.now()}`, // ID duy nhất
              position: cartesian,
              billboard: {
                image:
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/678111-map-marker-512.png/640px-678111-map-marker-512.png",
                width: 30, // chiều rộng nhỏ hơn
                height: 30, // chiều cao nhỏ hơn
                heightReference: Cesium.HeightReference.CLAMP_TO_GROUND,
                scaleByDistance: new Cesium.NearFarScalar(
                  1.5e2,
                  1.0,
                  1.5e7,
                  0.5
                ),
                disableDepthTestDistance: Number.POSITIVE_INFINITY,
              },
              label: {
                text: `${latitude.toFixed(4)}°, ${longitude.toFixed(4)}°`,
                font: "12pt Arial",
                fillColor: Cesium.Color.WHITE,
                outlineColor: Cesium.Color.BLACK,
                outlineWidth: 2,
                style: Cesium.LabelStyle.FILL_AND_OUTLINE,
                pixelOffset: new Cesium.Cartesian2(0, -40), // di chuyển label cho hợp lý với billboard
                disableDepthTestDistance: Number.POSITIVE_INFINITY,
                scaleByDistance: new Cesium.NearFarScalar(
                  1.5e2,
                  1.0,
                  1.5e7,
                  0.5
                ),
                distanceDisplayCondition: new Cesium.DistanceDisplayCondition(
                  0.0,
                  1.5e7
                ),
              },
            });

            entity.billboard!.scale = new Cesium.CallbackProperty(() => {
              const time = viewer.clock.currentTime;
              const seconds = Cesium.JulianDate.secondsDifference(
                time,
                viewer.clock.startTime
              );
              return 1.0 + 0.3 * Math.sin(seconds * 5); // Scale thay đổi từ 0.7 đến 1.3
            }, false);

            // Và dừng animation sau 3 giây (nếu muốn):
            setTimeout(() => {
              if (viewer.entities.contains(entity)) {
                entity.billboard!.scale = new Cesium.ConstantProperty(1.0);
              }
            }, 3000);

            console.log(
              `Clicked at latitude: ${latitude.toFixed(
                4
              )}, longitude: ${longitude.toFixed(4)}`
            );
          }
        },
        Cesium.ScreenSpaceEventType.LEFT_CLICK
      );

      // Double-click để xóa tất cả markers
      handler.setInputAction(() => {
        viewer.entities.removeAll();
        console.log("All markers cleared!");
      }, Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK);

      // Right-click để xóa marker gần nhất
      handler.setInputAction(
        (movement: Cesium.ScreenSpaceEventHandler.PositionedEvent) => {
          const pickedEntity = viewer.scene.pick(movement.position);
          if (
            pickedEntity &&
            pickedEntity.id &&
            pickedEntity.id.id &&
            pickedEntity.id.id.startsWith("marker_")
          ) {
            viewer.entities.remove(pickedEntity.id);
            console.log("Marker removed!");
          }
        },
        Cesium.ScreenSpaceEventType.RIGHT_CLICK
      );

      // ===== THIẾT LẬP CAMERA BAN ĐẦU =====
      // View đẹp từ không gian nhìn xuống Việt Nam
      viewer.camera.setView({
        destination: Cesium.Cartesian3.fromDegrees(105.8342, 21.0285, 15000000),
        orientation: {
          heading: 0.0,
          pitch: -Cesium.Math.PI_OVER_TWO,
          roll: 0.0,
        },
      });

      // ===== CẢI THIỆN PERFORMANCE =====
      // Tăng performance rendering
      viewer.scene.globe.enableLighting = true;
      viewer.scene.globe.dynamicAtmosphereLighting = true;
      viewer.scene.globe.atmosphereLightIntensity = 10.0;

      // Thiết lập fog để có độ sâu tốt hơn
      viewer.scene.fog.enabled = true;
      viewer.scene.fog.density = 0.0002;

      // Enable depth testing cho markers
      viewer.scene.globe.depthTestAgainstTerrain = true;
    };

    initCesium();

    // Cleanup khi unmount
    return () => {
      if (handler) handler.destroy();
      if (viewer) viewer.destroy();
    };
  }, []);

 return (
  <div
    ref={cesiumContainer}
    style={{
      width: "100vw",      // Chiều rộng bằng viewport width
      height: "90vh",     // Chiều cao bằng viewport height
      borderRadius: 0,     // Không cần bo góc nếu muốn full screen
      overflow: "hidden",
      boxShadow: "none",   // Tắt shadow nếu muốn full màn
      margin: 0,
      padding: 0,
    }}
  />
);
};

export default CesiumGlobe;
