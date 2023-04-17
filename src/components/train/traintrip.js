import { useState, useEffect } from "react";
import { createFromIconfontCN } from "@ant-design/icons";
import axios from "axios";

const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/c/font_4006149_naeew7b1yn.js",
});

export default function TrainTrip() {
  // 存放数据
  const [data, setData] = useState([]);
  // 请求数据
  const getData = async () => {
    const result = await axios.get("api/mock/train/trip");
    // console.log(result);
    setData([...result.data]);
  };
  // 初始化操作
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="train-trip">
      <h2>坐火车去旅行</h2>
      <p>热门火车旅游线路</p>
      <ul className="train-trip-list">
        {data.map((item, ind) => (
          <li key={ind}>
            <img src={item.url} />
            {item.hot ? (
              <div className="hot">
                <IconFont
                  type="icon-hot-for-ux-fill"
                  className="hot-icon"
                ></IconFont>
                推荐
              </div>
            ) : null}
            {/* 描述 */}
            <div className="train-trip-detail">
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
