import { Layout, ConfigProvider } from "antd";
const { Header, Footer, Sider, Content } = Layout;
import SiderNav from "./sider/sider";

// 测试用主页面布局样式
const headerStyle = {
  textAlign: "center",
  color: "#fff",
  height: 64,
  paddingInline: 50,
  lineHeight: "64px",
  backgroundColor: "#7dbcea",
};
const contentStyle = {
  textAlign: "center",
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#108ee9",
};
const siderStyle = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#fff",
};
const footerStyle = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#7dbcea",
};

export default function Home() {
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
        <Sider style={siderStyle} collapsible>
          <SiderNav></SiderNav>
        </Sider>
        <Layout>
          <Header style={headerStyle}>Header</Header>
          <Content style={contentStyle}>Content</Content>
          <Footer style={footerStyle}>Footer</Footer>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
}
