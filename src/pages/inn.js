import BigBanner from "@/components/inn/bigbanner";
import Booker from "@/components/inn/booker";
import SmallBanner from "@/components/inn/smallbanner";
// import RecommendInn from "@/components/inn/recommend";
import SeasonRec from "@/components/inn/seasonrec";
import MainPage from "./mainpage";
import axios from "axios";
import { useEffect, useState } from "react";
import { Spin, ConfigProvider, theme } from "antd";
import dynamic from "next/dynamic";
const RecommendInn = dynamic(() => import("@/components/inn/recommend"), {
  loading: () => (
    <div style={{ width: "100%", height: "100%" }}>
      <Spin></Spin>
    </div>
  ),
});

export function InnBody(props) {
  // 存放小banner数据：图片的url，列表类型
  const [smallBannerData, setSmallBannerData] = useState([]);
  const getSmallBanner = async () => {
    // 请求小banner图数据
    const results = await axios.get("/api/mock/inn/smallbanner");
    const tmp = results.data.data;
    setSmallBannerData([...tmp]);
  };
  // 存放大banner数据
  const [bigBannerData, setBigBannerData] = useState([]);
  // 请求大banner图数据
  const getBigBanner = async () => {
    const results = await axios.get("/api/mock/inn/bigbanner");
    const tmp = results.data.data;
    // console.log(tmp);
    setBigBannerData([...tmp]);
  };
  // 存放酒店推荐模块数据
  const [recData, setRecData] = useState([]);
  // 请求酒店推荐模块数据
  const getRecData = async () => {
    const results = await axios.get("/api/mock/inn/recommend");
    const tmp = results.data;
    // console.log(tmp);
    setRecData([...tmp]);
  };
  // 酒店页面的初始化
  useEffect(() => {
    // 获取小banner数据
    getSmallBanner();
    // 获取大banner数据
    getBigBanner();
    // 获取酒店推荐的数据
    getRecData();
  }, []);

  return (
    <div className={props.dark ? "dark-inn" : null}>
      <div className="wrapper-inn">
        {/* 左侧长条内容 */}
        <div className="inn-left">
          {/* 酒店预订模块 */}
          <Booker></Booker>
          {/* 小轮播图 */}
          <div style={{ width: "50rem" }}>
            <SmallBanner data={smallBannerData}></SmallBanner>
          </div>
          {/* 推荐板块 */}
          <RecommendInn data={recData}></RecommendInn>

          {/* 当季热推 */}
          <SeasonRec></SeasonRec>
        </div>
        {/* 右侧吸顶长条 */}
        <div className="inn-right">
          {/* 大轮播图 */}
          <BigBanner data={bigBannerData}></BigBanner>
        </div>
      </div>
    </div>
  );
}

export default function Inn() {
  // 控制客服机器人
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
        content={<InnBody dark={dark}></InnBody>}
        defaultOpenKeys={["1"]}
        defaultSelectedKeys={["1-1"]}
        setDark={setDark}
        dark={dark}
        open={open}
        setOpen={setOpen}
      ></MainPage>
    </ConfigProvider>
  ) : (
    <MainPage
      content={<InnBody dark={dark}></InnBody>}
      defaultOpenKeys={["1"]}
      defaultSelectedKeys={["1-1"]}
      setDark={setDark}
      dark={dark}
      open={open}
      setOpen={setOpen}
    ></MainPage>
  );
}
