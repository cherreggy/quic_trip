const bigBanner = {
  data: [
    {
      city: "黄山",
      temp: "20℃~33℃",
      url: "https://forum.xitek.com/pics/201402/3308/330844/330844_1392649766.jpg",
      inns: [
        {
          name: "黄山悦榕庄",
          price: "2449.0",
          img: "https://dimg04.c-ctrip.com/images/0204s120008exvwzo8898_D_200_200.jpg",
        },
        {
          name: "黄山雨润涵月楼酒店",
          price: "2199.0",
          img: "https://dimg04.c-ctrip.com/images/hotel/376000/375486/a74c066a6178427d8001b1f556176bcd_D_200_200.jpg",
        },
        {
          name: "黄山昱城皇冠假日酒店",
          price: "728.0",
          img: "https://dimg04.c-ctrip.com/images/0206i120008mf3fqd9D63_D_200_200.jpg",
        },
      ],
    },
    {
      city: "大理",
      temp: "12℃~30℃",
      url: "https://photo.tuchong.com/1056395/f/18689113.jpg",
      inns: [
        {
          name: "大理实力希尔顿酒店",
          price: "1002.0",
          img: "https://dimg04.c-ctrip.com/images/0201f120008r6ij8z4929_D_200_200.jpg",
        },
        {
          name: "大理悦湾·VILLA半山海景酒店",
          price: "2380.0",
          img: "https://dimg04.c-ctrip.com/images/0206j120008f5jvi7F518_D_200_200.jpg",
        },
        {
          name: "大理颐云酒店",
          price: "1152.0",
          img: "https://dimg04.c-ctrip.com/images/20091g000001h8ekj3664_D_200_200.jpg",
        },
      ],
    },
    {
      city: "湖州",
      temp: "19℃~33℃",
      url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F27bc8f21-bdbe-4942-a2f2-40cf0f2aeac0%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1684289040&t=5e77d468df06adf8e9bd747f16767d0f",
      inns: [
        {
          name: "湖州东吴开元名庭酒店",
          price: "455.0",
          img: "https://dimg04.c-ctrip.com/images/20031e000001f6vtc87EB_D_200_200.jpg",
        },
        {
          name: "湖州东吴亚朵酒店",
          price: "394.0",
          img: "https://dimg04.c-ctrip.com/images/200u1d000001ehnvh5012_D_200_200.jpg",
        },
        // {
        //   name: "湖州行政中心亚朵酒店",
        //   price: "366.0",
        //   img: "https://dimg04.c-ctrip.com/images/02049120008h6w49z9401_D_200_200.jpg",
        // },
      ],
    },
    {
      city: "北海",
      temp: "24℃~30℃",
      url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F56e2cd42-bb1e-4553-b1ff-e7b6ce76246e%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1684289182&t=054dceed12ec35092ce76e7330e36771",
      inns: [
        {
          name: "北海香格里拉大酒店",
          price: "643.0",
          img: "https://dimg04.c-ctrip.com/images/0200i1200099tsgzb6050_D_200_200.jpg",
        },
        {
          name: "北海金昌开元名都大酒店",
          price: "506.0",
          img: "https://dimg04.c-ctrip.com/images/02052120008alcyoyFDC7_D_200_200.jpg",
        },
        {
          name: "北海高铁站希尔顿欢朋酒店",
          price: "368.0",
          img: "https://dimg04.c-ctrip.com/images/200s0t000000iraci4262_D_200_200.jpg",
        },
      ],
    },
  ],
};

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(bigBanner);
  } else res.status(405).json({ message: "Method Not Allowed" });
}
