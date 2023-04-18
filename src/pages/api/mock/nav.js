const data = [
  {
    label: "酒店",
    key: "1",
    icon: "icon-jiudian",
    url: "/inn",
    children: [
      {
        label: "酒店首页",
        key: "1-1",
        url: "/inn",
      },
      {
        label: "酒店特惠",
        key: "1-2",
        url: "/normal",
      },
      {
        label: "便利酒店",
        key: "1-3",
        url: "/normal",
      },
    ],
  },
  {
    label: "机票",
    key: "2",
    icon: "icon-feiji",
    children: [
      {
        label: "机票订购",
        key: "2-1",
        url: "/plane",
      },
      {
        label: "航班动态",
        key: "2-2",
        url: "/normal",
      },
      {
        label: "机场攻略",
        key: "2-3",
        url: "/normal",
      },
      {
        label: "定制包机",
        key: "2-4",
        url: "/normal",
      },
    ],
  },
  {
    label: "火车票",
    key: "3",
    icon: "icon-huoche",
    url: "/train",
    children: [
      {
        label: "火车票订购",
        key: "3-1",
        url: "/train",
      },
      {
        label: "国际列车",
        key: "3-2",
        url: "/normal",
      },
    ],
  },
  {
    label: "旅游",
    key: "4",
    icon: "icon-icon_xinyong_xianxing_jijin-140",
    url: "/trip",
    children: [
      {
        label: "旅游攻略",
        key: "4-1",
        url: "/trip",
      },
      {
        label: "跟团游",
        key: "4-2",
        url: "/normal",
      },
      {
        label: "自由行",
        key: "4-3",
        url: "/normal",
      },
      {
        label: "保险",
        key: "4-4",
        url: "/normal",
      },
    ],
  },
  {
    label: "汽车·船票",
    key: "5",
    icon: "icon-tuijianqiche",
    url: "/boat",
    children: [
      {
        label: "购票主页",
        key: "5-1",
        url: "/boat",
      },
      {
        label: "旅行优惠",
        key: "5-2",
        url: "/normal",
      },
    ],
  },
  {
    label: "门票·活动",
    key: "6",
    icon: "icon-menpiao",
    url: "/normal",
    children: [
      {
        label: "门票详情",
        key: "6-1",
        url: "/normal",
      },
    ],
  },
  {
    label: "用车",
    key: "7",
    icon: "icon-chuzuche",
    url: "/normal",
    children: [
      {
        label: "如何用车",
        key: "7-1",
        url: "/normal",
      },
    ],
  },
  {
    label: "企业商旅",
    key: "8",
    icon: "icon-xiechengshanglv",
    url: "/normal",
    children: [
      {
        label: "商旅主页",
        key: "8-1",
        url: "/normal",
      },
    ],
  },
  {
    label: "QUIC金融",
    key: "9",
    icon: "icon-jinrong",
    url: "/normal",
    children: [
      {
        label: "金融首页",
        key: "9-1",
        url: "/normal",
      },
    ],
  },
];

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(data);
  } else res.status(405).json({ message: "Method Not Allowed" });
}
