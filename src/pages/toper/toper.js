import { Input } from "antd";
import { createFromIconfontCN } from "@ant-design/icons";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space, Popover } from "antd";
const { Search } = Input;

const IconFont = createFromIconfontCN({
  // 阿里巴巴矢量图库项目链接
  scriptUrl: "//at.alicdn.com/t/c/font_4006149_ytmgagb7vcg.js",
});

const items = [
  {
    label: <a href="javascript:;">查看订单</a>,
    key: "0",
  },
];

export default function Toper() {
  return (
    <div className="wrapper">
      <img src="./logo.png" className="logo" />
      <Search placeholder="搜索旅行地/酒店/景点" enterButton size="middle" />
      {/* 右侧信息栏 */}
      <div
        className="tools"
        style={{
          height: "3vh",
          borderRight: "1px solid #ddd",
          paddingRight: "1vh",
        }}
      >
        <a className="login">
          <IconFont
            type="icon-avatar"
            style={{
              fontSize: "3vh",
              marginLeft: "-0.5vw",
              marginRight: "0.5vw",
            }}
          />
          请登录
        </a>
        <a className="regist">注册</a>
        {/* 下拉菜单 */}
        <div style={{ width: "6vw" }}>
          <Dropdown menu={{ items }}>
            <a onClick={(e) => e.preventDefault()} className="menu_item">
              <IconFont
                type="icon-shouye"
                style={{ fontSize: "2.5vh", marginRight: "0.2vw" }}
              ></IconFont>
              <Space>
                我的订单
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
        </div>
      </div>
      {/* 工具栏1 */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "8vw",
          height: "3vh",
          borderRight: "1px solid #ddd",
          padding: "0 1vh",
        }}
      >
        <Popover
          content={
            <div>
              <p>客服机器人小Q</p>
            </div>
          }
        >
          <IconFont
            type="icon-kefu"
            style={{
              fontSize: "3vh",
              margin: "0 1vh",
              cursor: "pointer",
            }}
          />
        </Popover>

        <Popover
          content={
            <div>
              <p>客服机器人小Q</p>
            </div>
          }
        >
          <IconFont
            type="icon-shouji"
            style={{
              fontSize: "3vh",
              margin: "0.5vh 1vh 0 1vh",
            }}
          />
        </Popover>
      </div>
    </div>
  );
}
