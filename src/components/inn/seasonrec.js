import { Select } from "antd";
import { SwapOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import axios from "axios";
export default function SeasonRec() {
  // 存放所有数据
  const [data, setData] = useState([]);
  // 存放已经选择城市
  const [chosenCity, setChosenCity] = useState(0);
  // 城市列表
  const [cityList, setCityList] = useState([]);
  // 加载数据函数
  const getData = async () => {
    // 请求该部分数据
    const result = await axios.get("/api/mock/inn/season");
    var tmp = result.data;
    setData([...tmp]);
  };
  const getCityList = () => {
    // 获取城市列表
    const tmp = [];
    data.forEach((item, ind) => {
      // console.log(item.city);
      tmp.push({ label: item.city, value: ind });
    });
    setCityList([...tmp]);
    // console.log(tmp);
  };
  // console.log("构造函数", data);
  // 初始化和读数据操作
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getCityList();
  }, [data]);

  return (
    <div className="sea-rec">
      <div className="sea-rec-head">
        {/* 标题 */}
        <h2>
          当季<span style={{ color: "#9f1bfa" }}>热推</span>
        </h2>
        {/* 右侧选择城市下拉菜单 */}
        <span style={{ color: "grey", fontSize: "1rem", marginLeft: "1rem" }}>
          出发地
        </span>
        {
          <Select
            defaultValue={chosenCity}
            style={{
              width: 120,
              marginLeft: "0.5rem",
            }}
            options={cityList}
            onChange={(e) => {
              setChosenCity(e);
              // console.log(e);
            }}
          />
        }
      </div>
      <div className="sea-rec-body">
        <div className="left">
          <div style={{ display: "flex" }}>
            <img src="rec1.png" style={{ marginLeft: "0.5rem" }} />
            <h2>当季热卖·跟团游</h2>
          </div>
          <ul>
            {data[chosenCity]
              ? data[chosenCity].parta.map((item, ind) => (
                  <li key={ind}>
                    <img src={item.url} />
                    <div className="info">
                      <h5>{item.title}</h5>
                      <p>
                        {item.rate ? (
                          <>
                            <span>{item.rate}</span>分
                          </>
                        ) : null}
                        {item.people ? <> | {item.people}人出游</> : null}
                      </p>
                    </div>
                    <div className="price">
                      ￥<span>{item.price}</span>起
                    </div>
                    {/* 左上角标记 */}
                    <div className={"marker" + (ind + 1)}>{ind + 1}</div>
                  </li>
                ))
              : null}
          </ul>
        </div>

        <div className="right">
          <div style={{ display: "flex" }}>
            <img src="rec2.png" style={{ marginLeft: "0.5rem" }} />
            <h2>周末畅游·特价机票</h2>
          </div>
          <ul>
            {data[chosenCity]
              ? data[chosenCity].partb.map((item, ind) => (
                  <li key={ind}>
                    <img src={item.url} />
                    <div className="info">
                      <h5>
                        {data[chosenCity].city + " "}
                        <SwapOutlined></SwapOutlined>
                        {" " + item.target}
                      </h5>
                      <p>
                        {item.start}去 {item.end}回
                      </p>
                    </div>
                    <div className="price">
                      ￥<span>{item.price}</span>起
                    </div>
                    {/* 左上角标记 */}
                    <div className={"marker" + (ind + 1)}>{ind + 1}</div>
                  </li>
                ))
              : null}
          </ul>
        </div>
      </div>
    </div>
  );
}
