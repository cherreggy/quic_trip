const smallBanner = {
  data: [
    "https://dimg04.c-ctrip.com/images/0zg3j12000augu1mgB200.png",
    "https://dimg04.c-ctrip.com/images/0zg4612000ap2m6ht3DD7.png",
    "https://dimg04.c-ctrip.com/images/0zg5312000artha0v5BF6.png",
    "https://dimg04.c-ctrip.com/images/0zg4o12000as5h90h6782.jpg",
  ],
};

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(smallBanner);
  } else res.status(405).json({ message: "Method Not Allowed" });
}
