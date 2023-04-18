import PlaneBooker from "@/components/plane/planebooker";
import MainPage from "./mainpage";

function PlaneBody() {
  return (
    <div style={{ backgroundColor: "#eef1f6", height: "100%" }}>
      <div className="plane-wrapper">
        <PlaneBooker></PlaneBooker>
      </div>
    </div>
  );
}

export default function Plane() {
  return (
    <MainPage
      content={<PlaneBody></PlaneBody>}
      defaultOpenKeys={["2"]}
      defaultSelectedKeys={["2-1"]}
    ></MainPage>
  );
}
