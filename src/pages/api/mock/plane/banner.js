const banner = [
  "https://dimg04.c-ctrip.com/images/0zg3e12000awvccxbC694.jpg",
  "https://dimg04.c-ctrip.com/images/0zg3q12000aup39a9F63B.jpg",
  "https://dimg04.c-ctrip.com/images/0zg2e12000awvcyo69393.jpg",
  "https://dimg04.c-ctrip.com/images/0zg5n12000aup5jivD121.jpg",
];

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(banner);
  } else res.status(405).json({ message: "Method Not Allowed" });
}
