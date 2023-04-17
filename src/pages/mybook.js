import { Card } from "antd";

export default function MyBook() {
  return (
    <div className="my-wrapper">
      {/* 个人信息 */}
      <Card title="个人信息" className="my-card personal">
        <p>
          <span className="my-bald">用户名：</span>用户名
        </p>
        <p>
          <span className="my-bald">邮箱：</span>邮箱
        </p>
        <p>
          <span className="my-bald">性别：</span>女
        </p>
        <p>
          <span className="my-bald">旅行宣言：</span>旅行宣言
        </p>
      </Card>
      {/* 酒店订单 */}
      <Card title="酒店订单" className="my-card">
        <ul>
          <li>
            <p>
              <span className="my-bald">目的地：</span>上海
            </p>
            <p>
              <span className="my-bald">入住日期：</span>入住日期
            </p>
            <p>
              <span className="my-bald">退房日期：</span>退房日期
            </p>
            <p>
              <span className="my-bald">房间及住客：</span>房间及住客
            </p>
            <p>
              <span className="my-bald">酒店级别：</span>酒店级别
            </p>
            <p>
              <span className="my-bald">备注：</span>备注
            </p>
          </li>
          <li>
            <p>
              <span className="my-bald">目的地：</span>上海
            </p>
            <p>
              <span className="my-bald">入住日期：</span>入住日期
            </p>
            <p>
              <span className="my-bald">退房日期：</span>退房日期
            </p>
            <p>
              <span className="my-bald">房间及住客：</span>房间及住客
            </p>
            <p>
              <span className="my-bald">酒店级别：</span>酒店级别
            </p>
            <p>
              <span className="my-bald">备注：</span>备注
            </p>
          </li>
        </ul>
      </Card>
      {/* 机票订单 */}
      <Card title="机票订单" className="my-card">
        <ul>
          <li>
            <p>
              <span className="my-bald">旅程类型：</span>单程
            </p>
            <p>
              <span className="my-bald">出发地：</span>上海
            </p>
            <p>
              <span className="my-bald">目的地：</span>北京
            </p>
            <p>
              <span className="my-bald">是否直飞：</span>是
            </p>
            <p>
              <span className="my-bald">机舱类型：</span>经济舱
            </p>
            <p>
              <span className="my-bald">出发日期：</span>2022年4月16日
            </p>
            <p>
              <span className="my-bald">返回日期：</span>2022年4月17日
            </p>
            <p>
              <span className="my-bald">乘客类型：</span>1成人 0儿童 0婴儿
            </p>
          </li>
        </ul>
      </Card>
      {/* 火车票订单 */}
      <Card title="火车票订单" className="my-card">
        <ul>
          <li>
            <p>
              <span className="my-bald">旅程类型：</span>单程
            </p>
            <p>
              <span className="my-bald">出发地：</span>上海
            </p>
            <p>
              <span className="my-bald">出发日期：</span>出发日期
            </p>
            <p>
              <span className="my-bald">返回日期：</span>无
            </p>
          </li>
        </ul>
      </Card>
      {/* 汽车票订单 */}
      <Card title="汽车票订单" className="my-card">
        <ul>
          <li>
            <p>
              <span className="my-bald">出发城市：</span>上海
            </p>
            <p>
              <span className="my-bald">到达城市：</span>北京
            </p>
            <p>
              <span className="my-bald">出发日期：</span>出发日期
            </p>
          </li>
        </ul>
      </Card>
      {/* 船票订单 */}
      <Card title="船票订单" className="my-card">
        <ul>
          <li>
            <p>
              <span className="my-bald">出发城市：</span>上海
            </p>
            <p>
              <span className="my-bald">到达城市：</span>北京
            </p>
            <p>
              <span className="my-bald">出发日期：</span>出发日期
            </p>
          </li>
        </ul>
      </Card>
    </div>
  );
}
