import { createFromIconfontCN } from "@ant-design/icons";
import { Menu } from "antd";
import { useState } from "react";

const IconFont = createFromIconfontCN({
  // 阿里巴巴矢量图库项目链接
  scriptUrl: "//at.alicdn.com/t/c/font_4006149_d35cbatu5cl.js",
});

export default function SiderNav({ collapsed, setcollapsed, setRoute }) {
  // 导航栏组件

  // 标签项设置
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
  // 主要导航内容列表，包括名称、key、图标等
  const items = [
    getItem(
      "酒店",
      "sub1",
      <IconFont type="icon-jiudian" style={{ fontSize: "3vh" }} />,
      [
        getItem("1.1", "Inn"),
        getItem("1.2", "2"),
        getItem("1.3", "3"),
        getItem("1.4", "4"),
      ]
    ),
    getItem(
      "机票",
      "sub2",
      <IconFont type="icon-feiji" style={{ fontSize: "3vh" }} />,
      [getItem("2.1", "Plane"), getItem("Option 6", "6")]
    ),
    getItem(
      "火车票",
      "sub3",
      <IconFont type="icon-huoche" style={{ fontSize: "3vh" }} />,
      [
        getItem("3.1", "Train"),
        getItem("3.2", "10"),
        getItem("3.3", "11"),
        getItem("3.4", "12"),
      ]
    ),
    getItem(
      "旅游",
      "sub4",
      <IconFont
        type="icon-icon_xinyong_xianxing_jijin-140"
        style={{ fontSize: "3vh" }}
      />,
      [
        getItem("4.1", "Trip"),
        getItem("4.2", "14"),
        getItem("4.3", "15"),
        getItem("4.4", "16"),
      ]
    ),
    getItem(
      "汽车·船票",
      "sub5",
      <IconFont type="icon-tuijianqiche" style={{ fontSize: "3vh" }} />,
      [
        getItem("5.1", "Boat"),
        getItem("5.2", "18"),
        getItem("5.3", "19"),
        getItem("5.4", "20"),
      ]
    ),
    getItem(
      "门票·活动",
      "sub6",
      <IconFont type="icon-menpiao" style={{ fontSize: "3vh" }} />,
      [
        getItem("6.1", "Ticket"),
        getItem("6.2", "22"),
        getItem("6.3", "23"),
        getItem("6.4", "24"),
      ]
    ),
    getItem(
      "用车",
      "sub7",
      <IconFont type="icon-chuzuche" style={{ fontSize: "3vh" }} />,
      [
        getItem("7.1", "Car"),
        getItem("7.2", "26"),
        getItem("7.3", "27"),
        getItem("7.4", "28"),
      ]
    ),
  ];
  // 附加导航内容列表
  const items_addition = [
    getItem(
      "企业商旅",
      "sub8",
      <IconFont
        type="icon-xiechengshanglv"
        className="icons"
        style={{ fontSize: "3vh" }}
      />
    ),
    getItem(
      "QUIC金融",
      "sub9",
      <IconFont type="icon-jinrong" style={{ fontSize: "3vh" }} />
    ),
  ];
  // 标签名
  const rootSubmenuKeys = [
    "sub1",
    "sub2",
    "sub3",
    "sub4",
    "sub5",
    "sub6",
    "sub7",
    "sub8",
    "sub9",
  ];
  // 记录打开的是哪一个标签
  const [openKeys, setOpenKeys] = useState(["sub1"]);
  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
    // console.log(openKeys);
  };
  // 设置折叠值，父组件传入的控制器
  const handleFold = () => {
    setcollapsed(!collapsed);
  };

  // 菜单项点击函数
  const handleClick = (e) => {
    console.log(e.key);
    // 再此设置路由
    setRoute(e.key);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <IconFont type="icon-zhankai" className="folder" onClick={handleFold} />

      <Menu
        mode="inline"
        openKeys={openKeys}
        defaultSelectedKeys={openKeys}
        onOpenChange={onOpenChange}
        items={items}
        onClick={handleClick}
      />
      <hr style={{ margin: "3vh", width: "80%", border: "1px solid #eee" }} />
      <Menu
        mode="inline"
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        items={items_addition}
      />
    </div>
  );
}
