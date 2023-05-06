import { Input, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import TripShare from "@/components/trip/tripshare";
import MainPage from "./mainpage";
import axios from "axios";
import { ConfigProvider, theme } from "antd";
import Router from "next/router";
const { Search } = Input;
import { useRouter } from "next/router";
import { Progress } from "antd";

function TripBody(props) {
  // 存放数据统计
  const [number, setNumber] = useState([]);
  // 请求数据统计
  const getNumber = async () => {
    const result = await axios.get("api/mock/trip/number");
    setNumber([...result.data]);
  };
  useEffect(() => {
    getNumber();
  }, []);
  return (
    <div className={props.dark ? "trip-wrapper-dark" : "trip-wrapper"}>
      {/* 上部搜索栏 */}
      <div className="trip-top">
        <Search
          placeholder="搜索城市/景点/游记/问答/住宿"
          allowClear
          enterButton="搜索"
          prefix={<SearchOutlined className="trip-search-icon" />}
          size="large"
          className="trip-search"
        />
        <Button
          className="trip-my"
          onClick={() => {
            Router.push("/mybook");
          }}
        >
          我的主页 <div className="homepage-button-arrow"></div>
        </Button>
      </div>
      {/* 中间数据展示栏 */}
      <div className="trip-data">
        <div className="item">{number[0]}位会员</div>
        <div className="item">{number[1]}张图片</div>
        <div className="item">{number[2]}个点评</div>
        <div className="item">
          {number[3]}篇游记<div className="homepage-button-arrow"></div>
        </div>
        <div className="item">
          {number[4]}个问答<div className="homepage-button-arrow"></div>
        </div>
      </div>
      {/* 下面分页展示 */}
      <TripShare dark={props.dark}></TripShare>
    </div>
  );
}

export default function Trip() {
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
          content={<TripBody dark={dark}></TripBody>}
          defaultOpenKeys={["4"]}
          defaultSelectedKeys={["4-1"]}
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
        content={<TripBody dark={dark}></TripBody>}
        defaultOpenKeys={["4"]}
        defaultSelectedKeys={["4-1"]}
        setDark={setDark}
        dark={dark}
        open={open}
        setOpen={setOpen}
      ></MainPage>
    </>
  );
}
