import { Input, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import TripShare from "@/components/trip/tripshare";
import MainPage from "./mainpage";
import axios from "axios";
import { ConfigProvider, theme } from "antd";
import Router from "next/router";
const { Search } = Input;

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
        content={<TripBody dark={dark}></TripBody>}
        defaultOpenKeys={["4"]}
        defaultSelectedKeys={["4-1"]}
        setDark={setDark}
        dark={dark}
        open={open}
        setOpen={setOpen}
      ></MainPage>
    </ConfigProvider>
  ) : (
    <MainPage
      content={<TripBody dark={dark}></TripBody>}
      defaultOpenKeys={["4"]}
      defaultSelectedKeys={["4-1"]}
      setDark={setDark}
      dark={dark}
      open={open}
      setOpen={setOpen}
    ></MainPage>
  );
}
