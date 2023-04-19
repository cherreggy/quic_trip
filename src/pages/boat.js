import { ProfileOutlined, WhatsAppOutlined } from "@ant-design/icons";
import BoatBooker from "@/components/boat/boatBooker";
import MainPage from "./mainpage";
import Router from "next/router";
import { useState, useEffect } from "react";
import { ConfigProvider, theme } from "antd";

function BoatBody(props) {
  return (
    <div>
      <div className={props.dark ? "boat-wrapper-dark" : "boat-wrapper"}>
        {/* 上部 */}
        <div className="top">
          <div className="left">
            <BoatBooker></BoatBooker>
          </div>
          <div className="right">
            <a>
              <img src="bus.png" />
            </a>
            <img src="bus1.png" style={{ marginTop: "1rem" }} />
          </div>
        </div>
        {/* 下部 */}
        <div className="bottom">
          <div className="left">
            <h2>汽车票工具箱</h2>
            <a
              onClick={() => {
                Router.push("/mybook");
              }}
            >
              <ProfileOutlined></ProfileOutlined>
              <span className="text">我的订单</span>
            </a>
            <a>
              <WhatsAppOutlined></WhatsAppOutlined>
              <span className="text">在线客服</span>
            </a>
          </div>
          <div className="right">
            <h2>战略合作</h2>
            <img src="coop.png" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Boat() {
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
        content={<BoatBody dark={dark}></BoatBody>}
        defaultOpenKeys={["5"]}
        defaultSelectedKeys={["5-1"]}
        setDark={setDark}
        dark={dark}
      ></MainPage>
    </ConfigProvider>
  ) : (
    <MainPage
      content={<BoatBody dark={dark}></BoatBody>}
      defaultOpenKeys={["5"]}
      defaultSelectedKeys={["5-1"]}
      setDark={setDark}
      dark={dark}
    ></MainPage>
  );
}
