import { ProfileOutlined, WhatsAppOutlined } from "@ant-design/icons";
import BoatBooker from "@/components/boat/boatBooker";
import MainPage from "./mainpage";
import Router from "next/router";
import { useState, useEffect, useContext } from "react";
import { ConfigProvider, theme, message } from "antd";
import { useRouter } from "next/router";
import { Progress } from "antd";
import { ValueContext } from "./_app";

function BoatBody(props) {
  // 根组件状态
  const { isShow, setisShow, token, setToken } = useContext(ValueContext);
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
                if (token) {
                  Router.push("/mybook");
                } else {
                  message.error("您还没有登录！");
                }
              }}
            >
              <ProfileOutlined></ProfileOutlined>
              <span className="text">我的订单</span>
            </a>
            <a
              onClick={() => {
                props.setOpen(!props.open);
              }}
            >
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
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const handleStart = () => {
      setLoading(true);
      setProgress(0);
      const timer = setInterval(() => {
        setProgress((oldProgress) => {
          if (oldProgress === 90) {
            clearInterval(timer);
          }
          return Math.min(oldProgress + 10, 90);
        });
      }, 200);
    };

    const handleComplete = () => {
      setLoading(false);
      setProgress(100);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  const [dark, setDark] = useState(false);
  // 控制客服机器人
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("dark") == "true") setDark(true);
    else setDark(false);
  }, []);
  return dark ? (
    <>
      {loading && (
        <Progress percent={progress} showInfo={false} strokeColor="#9f1bfa" />
      )}
      <ConfigProvider
        theme={{
          algorithm: theme.darkAlgorithm,
        }}
      >
        <MainPage
          content={
            <BoatBody dark={dark} open={open} setOpen={setOpen}></BoatBody>
          }
          defaultOpenKeys={["5"]}
          defaultSelectedKeys={["5-1"]}
          setDark={setDark}
          dark={dark}
          open={open}
          setOpen={setOpen}
        ></MainPage>
      </ConfigProvider>
    </>
  ) : (
    <>
      {loading && (
        <Progress percent={progress} showInfo={false} strokeColor="#9f1bfa" />
      )}
      <MainPage
        content={
          <BoatBody dark={dark} open={open} setOpen={setOpen}></BoatBody>
        }
        defaultOpenKeys={["5"]}
        defaultSelectedKeys={["5-1"]}
        setDark={setDark}
        dark={dark}
        open={open}
        setOpen={setOpen}
      ></MainPage>
    </>
  );
}
