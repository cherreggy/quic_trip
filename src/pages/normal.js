import MainPage from "./mainpage";
import { useState, useEffect } from "react";
import { ConfigProvider, theme } from "antd";

function NormalBody(props) {
  return (
    <div>
      {props.dark ? <img src="common_gray.png" /> : <img src="common.png" />}
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
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("dark") == "true") setDark(true);
    else setDark(false);
  }, []);
  return dark ? (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
      }}
    >
      <MainPage
        content={<NormalBody dark={dark}></NormalBody>}
        defaultOpenKeys={p1}
        defaultSelectedKeys={p2}
        setDark={setDark}
        dark={dark}
        open={open}
        setOpen={setOpen}
      ></MainPage>
    </ConfigProvider>
  ) : (
    <MainPage
      content={<NormalBody dark={dark}></NormalBody>}
      defaultOpenKeys={p1}
      defaultSelectedKeys={p2}
      setDark={setDark}
      dark={dark}
      open={open}
      setOpen={setOpen}
    ></MainPage>
  );
}
