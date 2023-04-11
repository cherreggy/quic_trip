import { Layout, ConfigProvider } from "antd";
const { Header, Footer, Sider, Content } = Layout;
import SiderNav from "./sider/sider";
import Toper from "./toper/toper";
import Info from "./footer/info";
import { useState } from "react";

// 测试用主页面布局样式
const headerStyle = {
  display: "flex",
  textAlign: "center",
  height: 64,
  paddingInline: 50,
  lineHeight: "64px",
  backgroundColor: "#fff",
};
const contentStyle = {
  textAlign: "center",
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#108ee9",
};
const siderStyle = {
  backgroundColor: "#fff",
  boxShadow: "3px 3px 20px 1px rgba(0, 0, 0, 0.1)",
  zIndex: "1",
};

const footerStyle = {
  minHeight: "30vh",
  backgroundColor: "#f8fafd",
};

export default function Home() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <ConfigProvider
      theme={{
        token: {
          wireframe: true,
          colorPrimary: "#9f1bfa",
        },
      }}
    >
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          style={siderStyle}
          collapsed={collapsed}
          setCollapsed={setCollapsed}
        >
          <SiderNav
            setCollapsed={setCollapsed}
            collapsed={collapsed}
          ></SiderNav>
        </Sider>
        <Layout>
          <Header style={headerStyle}>
            <Toper></Toper>
          </Header>
          <Content style={contentStyle}>Content</Content>
          <Footer style={footerStyle}>
            <Info></Info>
          </Footer>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
}
