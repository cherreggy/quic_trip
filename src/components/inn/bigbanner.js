import { Carousel } from "antd";
import { useState } from "react";

const data = [
  {
    url: "https://photo.tuchong.com/3175448/f/611648353.jpg",
    title: "杭州酒店口碑榜",
    temperature: "12 ~ 19℃",
    hotels: [
      {
        name: "杭州酒店A",
        img: "https://dimg04.c-ctrip.com/images/20031e000001f6vtc87EB_D_200_200.jpg",
        price: "￥200 起",
      },
      {
        name: "杭州酒店B",
        img: "https://dimg04.c-ctrip.com/images/20031e000001f6vtc87EB_D_200_200.jpg",
        price: "￥200 起",
      },
    ],
  },
  {
    url: "https://img2.baidu.com/it/u=1653819340,2379791232&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500",
    title: "桂林酒店口碑榜",
    temperature: "12 ~ 19℃",
    hotels: [
      {
        name: "桂林酒店A",
        img: "https://dimg04.c-ctrip.com/images/20031e000001f6vtc87EB_D_200_200.jpg",
        price: "￥200 起",
      },
    ],
  },
  {
    url: "https://photo.tuchong.com/3175448/f/611648353.jpg",
    title: "杭州酒店口碑榜",
    temperature: "12 ~ 19℃",
    hotels: [
      {
        name: "杭州酒店A",
        img: "https://dimg04.c-ctrip.com/images/20031e000001f6vtc87EB_D_200_200.jpg",
        price: "￥200 起",
      },
      {
        name: "杭州酒店B",
        img: "https://dimg04.c-ctrip.com/images/20031e000001f6vtc87EB_D_200_200.jpg",
        price: "￥200 起",
      },
      {
        name: "杭州酒店C",
        img: "https://dimg04.c-ctrip.com/images/20031e000001f6vtc87EB_D_200_200.jpg",
        price: "￥200 起",
      },
    ],
  },
  {
    url: "https://img2.baidu.com/it/u=1653819340,2379791232&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500",
    title: "桂林酒店口碑榜",
    temperature: "12 ~ 19℃",
    hotels: [
      {
        name: "桂林酒店A",
        img: "https://dimg04.c-ctrip.com/images/20031e000001f6vtc87EB_D_200_200.jpg",
        price: "￥200 起",
      },
      {
        name: "桂林酒店B",
        img: "https://dimg04.c-ctrip.com/images/20031e000001f6vtc87EB_D_200_200.jpg",
        price: "￥200 起",
      },
      {
        name: "桂林酒店C",
        img: "https://dimg04.c-ctrip.com/images/20031e000001f6vtc87EB_D_200_200.jpg",
        price: "￥200 起",
      },
    ],
  },
];

export default function BigBanner() {
  const getContent = () => {
    return data.map((item) => (
      <div>
        <img src={item.url} />
        {/* 渲染文本和温度 */}
        <div className="big-banner-text">
          <p>{item.title}</p>
          <p>{item.temperature}</p>
        </div>
        {/* 渲染酒店和价格 */}
        <ul className="big-banner-inn">
          {item.hotels.map((inn) => (
            <li>
              <img src={inn.img} />
              <div>
                <p>{inn.name}</p>
                <p style={{ fontWeight: "700" }}>{inn.price}</p>
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
