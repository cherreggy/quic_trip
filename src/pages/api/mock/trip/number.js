const data = [
  "118,241,804",
  "842,245,068",
  "20,008,539",
  "753,500",
  "6,896,572",
];

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(data);
  } else res.status(405).json({ message: "Method Not Allowed" });
}
