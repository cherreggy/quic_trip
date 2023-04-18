import { Layout, ConfigProvider } from "antd";
const { Header, Footer, Sider, Content } = Layout;
import SiderNav from "@/components/sider/sider";
import Toper from "@/components/toper/toper";
import Info from "@/components/footer/info";
import { useState } from "react";

// 测试用主页面布局样式
const headerStyle = {
  display: "flex",
  textAlign: "center",
  height: 64,
  paddingInline: 50,
  lineHeight: "64px",
  backgroundColor: "#fff",
  borderBottom: "1px solid #eee",
};
const contentStyle = {
  backgroundColor: "#fff",
};
const siderStyle = {
  backgroundColor: "#fff",
  boxShadow: "3px 3px 20px 1px rgba(0, 0, 0, 0.1)",
  zIndex: "1",
};

const footerStyle = {
  minHeight: "25rem",
  backgroundColor: "#f8fafd",
};

export default function MainPage({
  content,
  defaultOpenKeys,
  defaultSelectedKeys,
}) {
  const [collapsed, setCollapsed] = useState(false);
  // console.log(defaultOpenKeys, defaultSelectedKeys);

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
        <Sider style={siderStyle} collapsed={collapsed}>
          <SiderNav
            setcollapsed={setCollapsed}
            collapsed={collapsed}
            defaultOpenKeys={defaultOpenKeys}
            defaultSelectedKeys={defaultSelectedKeys}
          ></SiderNav>
        </Sider>
        <Layout>
          <Header style={headerStyle}>
            <Toper></Toper>
          </Header>
          <Content style={contentStyle}>{content}</Content>
          <Footer style={footerStyle}>
            <Info></Info>
          </Footer>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
}
