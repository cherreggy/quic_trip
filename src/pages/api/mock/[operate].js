const mock = {
  users: [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
  ],
};

var mockData = mock;

// if (localStorage.getItem("data")) {
//   mockData = localStorage.getItem("data");
// } else {
//   mockData = mock;
//   localStorage.set("data", mockData);
// }

export default function handler(req, res) {
  const op = req.query;
  // if (req.method === "GET") {
  //   mockData.users.push({ id: 3, name: "Third" });
  //   res.status(200).json(mockData);
  // } else res.status(405).json({ message: "Method Not Allowed" });
  if (op.operate == "add") {
    console.log(req.body);
    mockData.users.push({ id: 3, name: req.body.data });
    // localStorage.setItem("data", mockData);
    res.status(200).json(mockData);
  } else if (op.operate == "delete") {
    mockData.users = mockData.users.slice(0, mockData.users.length - 1);
    // localStorage.setItem("data", mockData);
    res.status(200).json(mockData);
  } else if (op.operate == "show") {
    res.status(200).json(mockData);
  }
}
