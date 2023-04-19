import MainPage from "./mainpage";
import { useState, useEffect } from "react";
import { ConfigProvider, theme } from "antd";
import { useRouter } from "next/router";
import { Progress } from "antd";

function NormalBody(props) {
  return (
    <div>
      {props.dark ? <img src="common_gray.png" /> : <img src="common.png" />}
    </div>
  );
}

export default function Normal() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [p1, setP1] = useState([]);
  const [p2, setP2] = useState([]);
  // 进度条的设置
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

  useEffect(() => {
    setP1([window.location.search.match(new RegExp(`(?<=\\bpage=)[^&]*`))[0]]);
    setP2([window.location.search.match(new RegExp(`(?<=\\bsub=)[^&]*`))[0]]);
  }, []);
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);
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
          content={<NormalBody dark={dark}></NormalBody>}
          defaultOpenKeys={p1}
          defaultSelectedKeys={p2}
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
        content={<NormalBody dark={dark}></NormalBody>}
        defaultOpenKeys={p1}
        defaultSelectedKeys={p2}
        setDark={setDark}
        dark={dark}
        open={open}
        setOpen={setOpen}
      ></MainPage>
    </>
  );
}
