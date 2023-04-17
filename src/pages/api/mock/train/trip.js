const data = [
  {
    hot: true,
    url: "https://pic.c-ctrip.com/railway_v2/zzz_236152_3.jpg",
    title: "京广高铁",
    detail: "天南地北任我游",
  },
  {
    hot: false,
    url: "https://pic.c-ctrip.com/railway_v2/zzz_236152.jpg",
    title: "京沪高铁",
    detail: "千里京沪一日还",
  },
  {
    hot: false,
    url: "https://pic.c-ctrip.com/railway_v2/zzz_236152_2.jpg",
    title: "宁杭甬",
    detail: "最养眼的高铁线路",
  },
  {
    hot: false,
    url: "https://pic.c-ctrip.com/railway_v2/zzz_236152_1.jpg",
    title: "成渝高铁",
    detail: "爱上天府之国",
  },
];

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(data);
  } else res.status(405).json({ message: "Method Not Allowed" });
}
