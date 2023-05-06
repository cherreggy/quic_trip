import { createFromIconfontCN } from "@ant-design/icons";
import { Menu } from "antd";
import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Router from "next/router";
import { list } from "postcss";
import { isAssetError } from "next/dist/client/route-loader";
import { ValueContext } from "@/pages/_app";

const IconFont = createFromIconfontCN({
  // 阿里巴巴矢量图库项目链接
  scriptUrl: "//at.alicdn.com/t/c/font_4006149_d35cbatu5cl.js",
});

export default function SiderNav({
  defaultOpenKeys,
  defaultSelectedKeys,
  dark,
}) {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [items, setItems] = useState([]);
  const [rootSubmenuKeys, setRootSubmenuKeys] = useState([]);
  const [routes, setRoutes] = useState(new Map());
  // 记录打开的是哪一个标签
  const [openKeys, setOpenKeys] = useState(defaultOpenKeys);
  const [selectedKeys, setSelectedKeys] = useState(defaultSelectedKeys);
  // 请求导航栏数据
  const getData = async () => {
    const result = await axios.get("/api/mock/nav");
    // console.log(result.data);
    setData([...result.data]);
  };
  // 初始化加载导航栏数据，并且给选中的项目设置样式
  useEffect(() => {
    getData();
    if (dark)
      document.querySelector(
        ".ant-layout-sider-children"
      ).style.backgroundColor = "#131313";
    else {
      document.querySelector(
        ".ant-layout-sider-children"
      ).style.backgroundColor = "white";
    }
  }, []);
  // 导航栏数据加载好后载入菜单1和菜单2
  useEffect(() => {
    const tmp = []; // 存放导航栏对象
    const keys = []; // 存放所有子导航栏的key
    const r = new Map(); // 存放子导航栏对应的url
    // 对于每个大题目来说
    data.forEach((item) => {
      // 构建列表项
      tmp.push(
        getItem(
          item.label,
          item.key,
          <IconFont type={item.icon} style={{ fontSize: "1.5rem" }}></IconFont>,
          item.children
        )
      );
      // 维护父元素键
      keys.push(item.key);
      // 对子元素的处理
      if (item.children)
        item.children.forEach((c) => {
          let ckey = c.key;
          r.set(ckey, c.url); // 更新子链接
        });
    });
    setItems([...tmp]);
    setRootSubmenuKeys([...keys]);
    setRoutes(r);
  }, [data]);

  // 构造导航项对象，必须包含label和key，其它字段自选
  function getItem(label, key, icon, children, type) {
    // 将各个标签内容封装为对象
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }

  const onOpenChange = (keys) => {
    if (!openKeys) setOpenKeys(keys);
    else {
      const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
      if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        setOpenKeys(keys);
      } else {
        setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
      }
    }
  };
  // 设置折叠值，父组件传入的控制器
  // const handleFold = () => {
  //   setcollapsed(!collapsed);
  // };
  // 设置图钉状态，点击图钉可以固定导航栏，默认图钉关闭
  const { pin, setPin, collapsed, setCollapsed } = useContext(ValueContext);
  // 点击图钉，改变图钉状态
  const handlePin = () => {
    setPin(!pin);
  };
  // 菜单项点击函数
  const handleClick = (e) => {
    Router.push(
      routes.get(e.key) +
        "?page=" +
        openKeys[openKeys.length - 1] +
        "&" +
        "sub=" +
        e.key
    );
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
      className={dark ? "dark-sider" : null}
      theme={dark ? "dark" : null}
    >
      <IconFont type="icon-zhankai" className="folder" onClick={handlePin} />

      <Menu
        mode="inline"
        onOpenChange={onOpenChange}
        items={items}
        defaultOpenKeys={defaultOpenKeys}
        selectedKeys={defaultSelectedKeys}
        defaultSelectedKeys={defaultSelectedKeys}
        openKeys={openKeys}
        onClick={handleClick}
        motion={null}
      />
    </div>
  );
}
