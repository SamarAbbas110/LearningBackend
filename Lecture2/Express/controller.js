import userData from "./userData.js";

export function getAbout(req, res) {
    const data = { phone: 8108138743, email: "sa707510@gmail.com" };
    res.status(200).json(data);
  };

export function getParams(req, res) {
  const params = req.params;
  const urlName = params.name;
 const user = userData.data.find((user) => user.name === urlName);
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(200).json({ message: "NO USER FOUND" });
  }
}

export function getQueryParams(req, res) {
  const query = req.query;
  const name = query.name;

  const user = userData.data.find((user) => user.name === name);
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(200).json({ message: "NO NAME FOUND" });
  }
}