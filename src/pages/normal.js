import MainPage from "./mainpage";
import { useState, useEffect } from "react";

function NormalBody() {
  return (
    <div>
      <img src="common.png" />
    </div>
  );
}

export default function Normal() {
  const [p1, setP1] = useState([]);
  const [p2, setP2] = useState([]);
  useEffect(() => {
    setP1([window.location.search.match(new RegExp(`(?<=\\bpage=)[^&]*`))[0]]);
    setP2([window.location.search.match(new RegExp(`(?<=\\bsub=)[^&]*`))[0]]);
  }, []);
  return (
    <MainPage
      content={<NormalBody></NormalBody>}
      defaultOpenKeys={p1}
      defaultSelectedKeys={p2}
    ></MainPage>
  );
}
