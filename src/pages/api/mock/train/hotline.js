const data = [
  {
    city: "上海",
    target: [
      { name: "北京", price: "553.0" },
      { name: "苏州", price: "29.5" },
      { name: "常州", price: "69.5" },
      { name: "杭州", price: "73.0" },
      { name: "济南", price: "398.5" },
      { name: "合肥", price: "195.0" },
      { name: "南京", price: "134.5" },
      { name: "无锡", price: "49.5" },
      { name: "天津", price: "508.5" },
    ],
  },
  {
    city: "北京",
    target: [
      { name: "上海", price: "553.0" },
      { name: "青岛", price: "314.0" },
      { name: "太原", price: "194.0" },
      { name: "南京", price: "443.5" },
      { name: "郑州", price: "309.0" },
      { name: "天津", price: "54.5" },
      { name: "西安", price: "513.5" },
      { name: "济南", price: "184.5" },
      { name: "杭州", price: "538.5" },
    ],
  },
  {
    city: "杭州",
    target: [
      { name: "上海", price: "73.0" },
      { name: "济南", price: "383.5" },
      { name: "合肥", price: "178.5" },
      { name: "北京", price: "538.5" },
      { name: "天津", price: "494.0" },
      { name: "宁波", price: "73.5" },
      { name: "南京", price: "117.5" },
      { name: "苏州", price: "110.0" },
      { name: "徐州", price: "265.5" },
    ],
  },
  {
    city: "广州",
    target: [
      { name: "武汉", price: "443.5" },
      { name: "深圳", price: "74.5" },
      { name: "衡阳", price: "219.0" },
      { name: "长沙", price: "294.0" },
      { name: "郑州", price: "638.0" },
      { name: "韶关", price: "84.5" },
      { name: "北京", price: "862.0" },
      { name: "株洲", price: "274.0" },
      { name: "岳阳", price: "354.0" },
    ],
  },
  {
    city: "南京",
    target: [
      { name: "上海", price: "134.5" },
      { name: "苏州", price: "94.5" },
      { name: "济南", price: "279.0" },
      { name: "北京", price: "443.5" },
      { name: "徐州", price: "149.5" },
      { name: "青岛", price: "398.5" },
      { name: "杭州", price: "117.5" },
      { name: "天津", price: "393.5" },
      { name: "无锡", price: "79.5" },
    ],
  },
  {
    city: "天津",
    target: [
      { name: "北京", price: "54.5" },
      { name: "济南", price: "129.5" },
      { name: "青岛", price: "259.0" },
      { name: "上海", price: "508.5" },
      { name: "杭州", price: "494.0" },
      { name: "合肥", price: "377.5" },
      { name: "南京", price: "393.5" },
      { name: "苏州", price: "478.5" },
      { name: "无锡", price: "468.5" },
    ],
  },
  {
    city: "武汉",
    target: [
      { name: "广州", price: "443.5" },
      { name: "长沙", price: "164.5" },
      { name: "虎门", price: "498.0" },
      { name: "深圳", price: "538.0" },
      { name: "西安", price: "454.5" },
      { name: "太原", price: "480.5" },
      { name: "北京", price: "519.5" },
      { name: "郑州", price: "243.0" },
      { name: "杭州", price: "284.5" },
    ],
  },
  {
    city: "西安",
    target: [
      { name: "北京", price: "513.5" },
      { name: "洛阳", price: "174.5" },
      { name: "长沙", price: "587.0" },
      { name: "郑州", price: "229.0" },
      { name: "广州", price: "813.5" },
      { name: "深圳", price: "888.0" },
      { name: "武汉", price: "454.5" },
      { name: "石家庄", price: "407.5" },
      { name: "三门峡", price: "119.5" },
    ],
  },
];

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(data);
  } else res.status(405).json({ message: "Method Not Allowed" });
}
