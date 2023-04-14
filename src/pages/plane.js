import PlaneBooker from "@/components/plane/planebooker";

export default function Plane() {
  return (
    <div style={{ backgroundColor: "#eef1f6", height: "100%" }}>
      <div className="plane-wrapper">
        <PlaneBooker></PlaneBooker>
      </div>
    </div>
  );
}
