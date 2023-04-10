import { createFromIconfontCN } from "@ant-design/icons";
import { Menu, Button } from "antd";
import { useState } from "react";

const IconFont = createFromIconfontCN({
  // 阿里巴巴矢量图库项目链接
  scriptUrl: "//at.alicdn.com/t/c/font_4006149_zutzc1b9ob.js",
});

export default function SiderNav() {
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
        getItem("Option 1", "1"),
        getItem("Option 2", "2"),
        getItem("Option 3", "3"),
        getItem("Option 4", "4"),
      ]
    ),
    getItem(
      "机票",
      "sub2",
      <IconFont type="icon-feiji" style={{ fontSize: "3vh" }} />,
      [getItem("Option 5", "5"), getItem("Option 6", "6")]
    ),
    getItem(
      "火车票",
      "sub3",
      <IconFont type="icon-huoche" style={{ fontSize: "3vh" }} />,
      [
        getItem("Option 9", "9"),
        getItem("Option 10", "10"),
        getItem("Option 11", "11"),
        getItem("Option 12", "12"),
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
        getItem("Option 9", "13"),
        getItem("Option 10", "14"),
        getItem("Option 11", "15"),
        getItem("Option 12", "16"),
      ]
    ),
    getItem(
      "汽车·船票",
      "sub5",
      <IconFont type="icon-tuijianqiche" style={{ fontSize: "3vh" }} />,
      [
        getItem("Option 9", "17"),
        getItem("Option 10", "18"),
        getItem("Option 11", "19"),
        getItem("Option 12", "20"),
      ]
    ),
    getItem(
      "门票·活动",
      "sub6",
      <IconFont type="icon-menpiao" style={{ fontSize: "3vh" }} />,
      [
        getItem("Option 9", "21"),
        getItem("Option 10", "22"),
        getItem("Option 11", "23"),
        getItem("Option 12", "24"),
      ]
    ),
    getItem(
      "用车",
      "sub7",
      <IconFont type="icon-chuzuche" style={{ fontSize: "3vh" }} />,
      [
        getItem("Option 9", "25"),
        getItem("Option 10", "26"),
        getItem("Option 11", "27"),
        getItem("Option 12", "28"),
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
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Menu
        mode="inline"
        openKeys={openKeys}
        defaultSelectedKeys={openKeys}
        onOpenChange={onOpenChange}
        items={items}
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
