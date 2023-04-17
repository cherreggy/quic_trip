import { use, useEffect, useState } from "react";
import TrainSelector from "./trainselector";
import { createFromIconfontCN } from "@ant-design/icons";
import axios from "axios";

const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/c/font_4006149_naeew7b1yn.js",
});

export default function CheapInn() {
  const [list, setList] = useState([]);
  const [data, setData] = useState([]);
  // 请求原始数据
  const getData = async () => {
    const result = await axios.get("api/mock/train/inn");
    // console.log(result);
    setData([...result.data]);
  };
  // 获取城市列表
  const getList = () => {
    const tmp = [];
    data.forEach((item) => {
      tmp.push(item.city);
    });
    // console.log(tmp);
    setList([...tmp]);
  };
  // 初始化操作
  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    getList();
  }, [data]);

  const [ind, setInd] = useState(0);
  return (
    <div className="train-inn">
      <h2>优惠酒店</h2>
      <TrainSelector data={list} setInd={setInd} ind={ind}></TrainSelector>
      <ul className="train-inn-list">
        {data[ind]
          ? data[ind].inns.map((item, ind) => (
              <li key={`${ind}`}>
                <img src={item.url} />
                <h3>{item.title}</h3>
                <p className="rate">
                  <span className="real">{item.rate}</span>/5
                </p>
                <p className="price">
                  ￥<span className="real">{item.price}</span>
                </p>
                {item.hot ? (
                  <div className="hot">
                    <IconFont
                      type="icon-hot-for-ux-fill"
                      className="hot-icon"
                    ></IconFont>
                    推荐
                  </div>
                ) : null}
              </li>
            ))
          : null}
      </ul>
    </div>
  );
}
