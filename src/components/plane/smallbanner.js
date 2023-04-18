import { Carousel } from "antd";
import { useState, useEffect } from "react";
import axios from "axios";

export default function AirBanner() {
  // 存放banner数据
  const [data, setData] = useState([]);
  // 请求banner数据
  const getData = async () => {
    const result = await axios.get("api/mock/plane/banner");
    setData([...result.data]);
  };
  // 组件初始化操作
  useEffect(() => {
    getData();
  }, []);
  return (
    <Carousel
      className="air-small-banner"
      autoplay={true}
      autoplaySpeed={2000}
      draggable={true}
    >
      {data.map((item, ind) => (
        <div key={ind}>
          <img src={item} />
        </div>
      ))}
    </Carousel>
  );
}
