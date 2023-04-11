import { QRCode } from "antd";
import { Col, Row, Divider } from "antd";

export default function Info() {
  return (
    <div>
      {/* 上部大片信息部分 */}
      <div>
        {/* 左侧三个列 */}
        <div>
          <Row className="wrapper-bottom" align="top">
            <Col
              flex={1}
              style={{
                padding: "0 2rem",
                borderRight: "1px solid #ddd",
                height: "12rem",
              }}
            >
              <h3 className="title">旅游资讯</h3>
              <div style={{ display: "flex" }}>
                <ul className="text-list">
                  <li>
                    <a>宾馆索引</a>
                  </li>
                  <li>
                    <a>机票索引</a>
                  </li>
                  <li>
                    <a>旅游索引</a>
                  </li>
                  <li>
                    <a>邮轮索引</a>
                  </li>
                  <li>
                    <a>用车索引</a>
                  </li>
                </ul>
                <ul className="text-list">
                  <li>
                    <a>攻略搜索</a>
                  </li>
                  <li>
                    <a>网站导航</a>
                  </li>
                  <li>
                    <a>火车票索引</a>
                  </li>
                  <li>
                    <a>企业差旅索引</a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col flex={1} style={{ padding: "0 2rem", height: "12rem" }}>
              <h3 className="title">加盟合作</h3>
              <div style={{ display: "flex" }}>
                <ul className="text-list">
                  <li>
                    <a>分销联盟</a>
                  </li>
                  <li>
                    <a>友情链接</a>
                  </li>
                  <li>
                    <a>企业礼品卡采购</a>
                  </li>
                  <li>
                    <a>保险代理</a>
                  </li>
                  <li>
                    <a>代理合作</a>
                  </li>
                </ul>
                <ul className="text-list">
                  <li>
                    <a>酒店加盟</a>
                  </li>
                  <li>
                    <a>目的地及景区合作</a>
                  </li>
                  <li>
                    <a>智慧旅游</a>
                  </li>
                  <li>
                    <a>更多加盟合作</a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col
              flex={1}
              style={{
                padding: "0 0 1rem 2rem",
                borderLeft: "1px solid #ddd",
                height: "12rem",
              }}
            >
              <h3 className="title">关于QUIC</h3>
              <div style={{ display: "flex" }}>
                <ul className="text-list">
                  <li>
                    <a>关于QUIC</a>
                  </li>
                  <li>
                    <a> QUIC热点</a>
                  </li>
                  <li>
                    <a>联系我们</a>
                  </li>
                  <li>
                    <a>诚聘英才</a>
                  </li>
                  <li>
                    <a>企业公民</a>
                  </li>
                  <li>
                    <a>QUIC中心</a>
                  </li>
                </ul>
                <ul className="text-list">
                  <li>
                    <a>用户协议</a>
                  </li>
                  <li>
                    <a>隐私政策</a>
                  </li>
                  <li>
                    <a>营业执照</a>
                  </li>
                  <li>
                    <a>安全中心</a>
                  </li>
                  <li>
                    <a>QUIC内容中心</a>
                  </li>
                  <li>
                    <a>Quic.com Group</a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col
              flex={2}
              style={{ padding: "0 1rem 1rem 2rem", height: "15rem" }}
            >
              {/* 右侧文字和二维码 */}
              <div style={{ display: "flex" }}>
                {/* 文字联系我们 */}
                <div className="contact">
                  <p>境内： 95010 或 400-830-6666</p>
                  <p>中国香港：+852-3008-3295</p>
                  <p>中国澳门：+86-21 3406-4888</p>
                  <p>中国台湾：+86-21 3406-4888</p>
                  <p>其他国家和地区：+86-21 3406-4888</p>
                </div>
                {/* 二维码 */}
                <div className="qrcode">
                  <QRCode
                    errorLevel="H"
                    value="https://ant.design/"
                    icon="https://cdn-icons-png.flaticon.com/512/9379/9379368.png"
                    size={160}
                  />
                  <p>扫码下载QUIC</p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      {/* 下部文字 */}
      <div></div>
      {/* 下部小图 */}
      <div></div>
    </div>
  );
}
