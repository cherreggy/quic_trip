import { Carousel } from "antd";
import { useState } from "react";

export default function BigBanner(props) {
  const getContent = () => {
    return props.data.map((item, ind) => (
      <div key={ind}>
        <img src={item.url} />
        {/* 渲染文本和温度 */}
        <div className="big-banner-text">
          <p>{item.city}酒店口碑榜</p>
          <p>{item.temp}</p>
        </div>
        {/* 渲染酒店和价格 */}
        <ul className="big-banner-inn">
          {item.inns.map((inn, ind) => (
            <li key={ind}>
              <img src={inn.img} />
              <div>
                <p>{inn.name}</p>
                <p style={{ fontWeight: "700" }}>￥{inn.price}起</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    ));
  };

  return (
    <div style={{ position: "sticky", top: "1rem" }}>
      <Carousel
        className="inn-big-banner"
        autoplay={true}
        autoplaySpeed={2000}
        dotPosition="top"
        dots="my-dots"
        draggable={true}
      >
        {getContent()}
      </Carousel>
    </div>
  );
}
