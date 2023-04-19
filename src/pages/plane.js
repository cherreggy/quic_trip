import PlaneBooker from "@/components/plane/planebooker";
import MainPage from "./mainpage";
import { useState, useEffect } from "react";
import { ConfigProvider, theme } from "antd";

function PlaneBody(props) {
  return (
    <div
      style={{
        backgroundColor: props.dark ? "#202020" : "#eef1f6",
        height: "100%",
      }}
    >
      <div className="plane-wrapper">
        <PlaneBooker dark={props.dark}></PlaneBooker>
      </div>
    </div>
  );
}

export default function Plane() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("dark") == "true") setDark(true);
    else setDark(false);
  }, []);
  return dark ? (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
      }}
    >
      <MainPage
        content={<PlaneBody dark={dark}></PlaneBody>}
        defaultOpenKeys={["2"]}
        defaultSelectedKeys={["2-1"]}
        setDark={setDark}
        dark={dark}
        open={open}
        setOpen={setOpen}
      ></MainPage>
    </ConfigProvider>
  ) : (
    <MainPage
      content={<PlaneBody dark={dark}></PlaneBody>}
      defaultOpenKeys={["2"]}
      defaultSelectedKeys={["2-1"]}
      setDark={setDark}
      dark={dark}
      open={open}
      setOpen={setOpen}
    ></MainPage>
  );
}
