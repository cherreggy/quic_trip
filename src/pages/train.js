import TrainBooker from "@/components/train/trainbooker";
import CheapInn from "@/components/train/cheapinn";
import TrainTrip from "@/components/train/traintrip";
import TrainHot from "@/components/train/trainhot";
import MainPage from "./mainpage";
import { useState, useEffect } from "react";
import { ConfigProvider, theme } from "antd";
import { useRouter } from "next/router";
import { Progress } from "antd";

function TrainBody(props) {
  return (
    <div
      className={props.dark ? "train-back-dark" : "train-back"}
      style={{ backgroundColor: props.dark ? "#202020" : "white" }}
    >
      <div className="train-wrapper">
        {/* 订票组件 */}
        <TrainBooker setRoute={props.setRoute}></TrainBooker>
        {/* 优惠酒店 */}
        <CheapInn></CheapInn>
        {/* 坐火车去旅行 */}
        <TrainTrip></TrainTrip>
        {/* 热门路线 */}
        <TrainHot></TrainHot>
        {/* 展示图 */}
        <img src="train-img.png" className="train-img" />
        {/* 底部图 */}
        <img src="train-img1.png" className="train-img-bottom" />
      </div>
    </div>
  );
}

export default function Train() {
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

  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("dark") == "true") setDark(true);
    else setDark(false);
  }, []);
  return dark ? (
    <>
      {loading && (
        <Progress
          percent={progress}
          showInfo={false}
          strokeColor="#9f1bfa"
          style={{ position: "sticky", top: "0" }}
        />
      )}
      <ConfigProvider
        theme={{
          algorithm: theme.darkAlgorithm,
        }}
      >
        <MainPage
          content={<TrainBody dark={dark}></TrainBody>}
          defaultOpenKeys={["3"]}
          defaultSelectedKeys={["3-1"]}
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
        <Progress
          percent={progress}
          showInfo={false}
          strokeColor="#9f1bfa"
          style={{ position: "sticky", top: "0" }}
        />
      )}
      <MainPage
        content={<TrainBody dark={dark}></TrainBody>}
        defaultOpenKeys={["3"]}
        defaultSelectedKeys={["3-1"]}
        setDark={setDark}
        dark={dark}
        open={open}
        setOpen={setOpen}
      ></MainPage>
    </>
  );
}
