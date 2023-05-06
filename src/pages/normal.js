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
  // 解决强制刷新问题
  // useEffect(() => {
  //   const handleRouteChange = (url) => {
  //     // 检查URL是否发生变化
  //     if (url !== router.asPath) {
  //       // router.push(url);
  //       console.log(url);
  //     }
  //   };

  //   // 监听路由变化
  //   router.events.on("routeChangeStart", handleRouteChange);

  //   // 清除事件监听器
  //   return () => {
  //     router.events.off("routeChangeStart", handleRouteChange);
  //   };
  // }, [router]);
  // useEffect(()=>{

  // },[])
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
          console.log(oldProgress + 10);
          return Math.min(oldProgress + 10, 90);
        });
      }, 100);
    };

    const handleComplete = () => {
      setLoading(false);
      setProgress(100);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      // 卸载事件
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  useEffect(() => {
    setP1([window.location.search.match(new RegExp(`(?<=\\bpage=)[^&]*`))[0]]);
    setP2([window.location.search.match(new RegExp(`(?<=\\bsub=)[^&]*`))[0]]);
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
        <Progress
          percent={progress}
          showInfo={false}
          strokeColor="#9f1bfa"
          style={{ position: "sticky", top: "0" }}
        />
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
