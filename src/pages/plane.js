import PlaneBooker from "@/components/plane/planebooker";
import MainPage from "./mainpage";
import { useState, useEffect } from "react";
import { ConfigProvider, theme } from "antd";
import { useRouter } from "next/router";
import { Progress } from "antd";

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
          content={<PlaneBody dark={dark}></PlaneBody>}
          defaultOpenKeys={["2"]}
          defaultSelectedKeys={["2-1"]}
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
        content={<PlaneBody dark={dark}></PlaneBody>}
        defaultOpenKeys={["2"]}
        defaultSelectedKeys={["2-1"]}
        setDark={setDark}
        dark={dark}
        open={open}
        setOpen={setOpen}
      ></MainPage>
    </>
  );
}
