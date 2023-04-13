import { ProfileOutlined, WhatsAppOutlined } from "@ant-design/icons";
import BoatBooker from "@/components/boat/boatBooker";

export default function Boat() {
  return (
    <div>
      <div className="boat-wrapper">
        {/* 上部 */}
        <div className="top">
          <div className="left">
            <BoatBooker></BoatBooker>
          </div>
          <div className="right">
            <a>
              <img src="bus.png" />
            </a>
            <img src="bus1.png" style={{ marginTop: "1rem" }} />
          </div>
        </div>
        {/* 下部 */}
        <div className="bottom">
          <div className="left">
            <h2>汽车票工具箱</h2>
            <a>
              <ProfileOutlined></ProfileOutlined>
              <span className="text">我的订单</span>
            </a>
            <a>
              <WhatsAppOutlined></WhatsAppOutlined>
              <span className="text">在线客服</span>
            </a>
          </div>
          <div className="right">
            <h2>战略合作</h2>
            <img src="coop.png" />
          </div>
        </div>
      </div>
    </div>
  );
}
