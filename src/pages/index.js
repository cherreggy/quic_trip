import Inn from "./inn";

export default function Home() {
  return (
    // <ConfigProvider
    //   theme={{
    //     token: {
    //       wireframe: true,
    //       colorPrimary: "#9f1bfa",
    //     },
    //   }}
    // >
    //   <Layout style={{ minHeight: "100vh" }}>
    //     <Sider style={siderStyle} collapsed={collapsed}>
    //       <SiderNav
    //         setcollapsed={setCollapsed}
    //         collapsed={collapsed}
    //         setRoute={setRoute}
    //       ></SiderNav>
    //     </Sider>
    //     <Layout>
    //       <Header style={headerStyle}>
    //         <Toper setRoute={setRoute}></Toper>
    //       </Header>
    //       <Content style={contentStyle}>{content}</Content>
    //       <Footer style={footerStyle}>
    //         <Info></Info>
    //       </Footer>
    //     </Layout>
    //   </Layout>
    // </ConfigProvider>
    <Inn></Inn>
  );
}
