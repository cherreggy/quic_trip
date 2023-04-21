import { Input, notification } from "antd";
import { createFromIconfontCN } from "@ant-design/icons";
import { DownOutlined, RightOutlined } from "@ant-design/icons";
import { Dropdown, Space, Popover, Switch, Button, message } from "antd";
import { QRCode } from "antd";
import { useEffect, useState, useContext } from "react";
import Login from "./login";
import Regist from "./regist";
import Link from "next/link";
import dynamic from "next/dynamic";
import axios from "axios";
const { Search } = Input;
import { ValueContext } from "../../pages/_app";
import Router from "next/router";

const ChatPage = dynamic(() => import("../chat"), { ssr: false });

const IconFont = createFromIconfontCN({
  // 阿里巴巴矢量图库项目链接
  scriptUrl: "//at.alicdn.com/t/c/font_4006149_1n9h9l4fw7s.js",
});

export default function Toper(props) {
  // 无障碍模式切换、本地是否存储了用户信息：根组件状态
  const { isShow, setisShow, token, setToken } = useContext(ValueContext);
  const items = [
    {
      label: (
        <a
          onClick={() => {
            if (token) {
              Router.push("/mybook");
            } else {
              message.error("您还没有登录！");
            }
          }}
        >
          查看订单
        </a>
      ),
      key: "0",
    },
  ];
  const items1 = [
    {
      label: "?",
      key: "1",
    },
  ];
  const [api, contextHolder] = notification.useNotification();
  // 登录弹窗状态
  const [isModalOpen, setIsModalOpen] = useState(false);
  // 注册窗状态
  const [registOpen, setRegistOpen] = useState(false);

  const openNotification = () => {
    api.open({
      message: "你触发了搜索操作",
      description:
        "思路描述：此操作用于模拟真实场景，搜索按钮按下后客户端给服务器发送信息，服务器处理搜索结果后返回给前端渲染搜索结果。",
      placement: "top",
    });
  };
  // 登陆按钮点击事件函数，显示弹窗
  const handleLogin = () => {
    setIsModalOpen(true);
  };
  // 弹窗取消按钮操作
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  // 弹窗确定按钮操作
  const handleOk = () => {
    // 执行登录事件后关闭弹窗
    setIsModalOpen(false);
  };

  // 注册按钮点击事件
  const handleRegist = () => {
    if (!token) setRegistOpen(true);
    else message.error("请退出登录！");
  };
  // 注册窗口确认事件
  const registOk = () => {
    setRegistOpen(false);
  };

  // 注册窗口取消事件
  const registCancel = () => {
    setRegistOpen(false);
  };

  // 黑夜模式按钮切换
  const changeDark = (e) => {
    localStorage.setItem("dark", e);
    props.setDark(e);
    // console.log(localStorage.getItem("dark"), e);
  };
  // 黑夜模式处理
  useEffect(() => {
    if (props.dark) {
      document.querySelector(".ant-layout-header").style.backgroundColor =
        "#131313";
      document.querySelector(".login").style.backgroundColor = "#505050";
    }
  }, [props.dark]);
  // 处理退出登录
  const handleExit = () => {
    setToken(null);
    localStorage.removeItem("token");
    // 自动跳回首页
    Router.push("/");
  };
  return (
    <div className={"wrapper"}>
      {props.open ? (
        <ChatPage dark={props.dark} open={props.open} setOpen={props.setOpen} />
      ) : null}
      {/* 主页图标 */}
      <img src="./logo.png" className="logo" />
      {contextHolder}
      <Search
        placeholder="搜索旅行地/酒店/景点"
        enterButton
        size="middle"
        onSearch={openNotification}
      />
      {/* 右侧信息栏 */}
      {/* 黑夜模式切换 */}
      <div style={{ width: "35rem" }}>
        <span style={!props.dark ? { color: "#9f1bfa" } : { color: "white" }}>
          黑夜模式：
        </span>
        <Switch
          style={
            props.dark
              ? { backgroundColor: "#505050" }
              : { backgroundColor: "#f4e7ff" }
          }
          onChange={changeDark}
          checked={props.dark}
        />
      </div>
      <div
        className="tools"
        style={{
          height: "1.2rem",
          borderRight: "1px solid #ddd",
          paddingRight: "0.5rem",
        }}
      >
        {token ? (
          <Popover
            placement="bottom"
            title={null}
            content={<Button onClick={handleExit}>退出登录</Button>}
            trigger="hover"
          >
            <a className="login">
              <IconFont
                type="icon-avatar"
                style={{
                  fontSize: "1.8rem",
                  marginLeft: "-0.5rem",
                  marginRight: "0.5rem",
                }}
              />
              <span className="login-inner">{token}</span>
            </a>
          </Popover>
        ) : (
          <a className="login" onClick={handleLogin}>
            <IconFont
              type="icon-avatar"
              style={{
                fontSize: "1.8rem",
                marginLeft: "-0.5rem",
                marginRight: "0.5rem",
              }}
            />
            <span className="login-inner">请登录</span>
          </a>
        )}

        <a className="regist" onClick={handleRegist}>
          注册
        </a>
        <Login
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          handleCancel={handleCancel}
          handleOk={handleOk}
        ></Login>
        <Regist
          isModalOpen={registOpen}
          handleCancel={registCancel}
          handleOk={registOk}
        ></Regist>
        {/* 下拉菜单 */}
        <div style={{ width: "6.5rem" }}>
          <Dropdown menu={{ items }}>
            <a
              onClick={(e) => {
                e.preventDefault();
              }}
              className="menu_item"
            >
              <IconFont
                type="icon-shouye"
                style={{ fontSize: "1.2rem", marginRight: "0.2rem" }}
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
          height: "1.5rem",
          borderRight: "1px solid #ddd",
          padding: "0 0.5rem",
        }}
      >
        <Popover
          onClick={() => props.setOpen(!props.open)}
          content={
            <div>
              <p>客服机器人小Q</p>
            </div>
          }
        >
          <IconFont
            type="icon-kefu"
            style={{
              fontSize: "1.5rem",
              margin: "0 0.5rem",
              cursor: "pointer",
            }}
          />
        </Popover>

        <Popover
          content={
            <div>
              <div className="mobile-info">
                <div style={{ marginRight: "1vw" }}>
                  <QRCode
                    errorLevel="H"
                    value="https://ant.design/"
                    icon="https://cdn-icons-png.flaticon.com/512/9379/9379368.png"
                  />
                  <p>扫码下载QUIC手机版</p>
                </div>

                <div>
                  <QRCode
                    errorLevel="H"
                    value="https://ant.design/"
                    icon="https://cdn-icons-png.flaticon.com/512/10030/10030452.png"
                  />
                  <p>扫码领QUIC精彩好礼</p>
                </div>
              </div>
              <a>
                QUIC旅行手机版<RightOutlined></RightOutlined>
              </a>
            </div>
          }
        >
          <IconFont
            type="icon-shouji"
            style={{
              fontSize: "1.5rem",
              margin: "0.25rem 0.5rem 0 0.5rem",
              cursor: "pointer",
            }}
          />
        </Popover>
      </div>
      {/* 工具栏2 */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "8vw",
          height: "1.5rem",
          padding: "0 0.5rem",
        }}
      >
        <Popover
          onClick={() => setisShow(!isShow)}
          content={
            <div>
              <p>无障碍模式</p>
            </div>
          }
        >
          <IconFont
            type="icon-wuzhangaisheshi"
            style={{
              fontSize: "1.5rem",
              margin: "0 0.5rem",
              cursor: "pointer",
            }}
          />
        </Popover>

        <Popover
          content={
            <div>
              <p>关怀版</p>
            </div>
          }
        >
          <IconFont
            type="icon-linzhongguanhuaike"
            style={{
              fontSize: "1.5rem",
              margin: "0 0.5rem",
              cursor: "pointer",
            }}
          />
        </Popover>
      </div>
    </div>
  );
}
