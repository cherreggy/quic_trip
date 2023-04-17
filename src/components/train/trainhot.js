import { useEffect, useState } from "react";
import TrainSelector from "./trainselector";
import axios from "axios";

export default function TrainHot() {
  const [ind, setInd] = useState(0);
  const [list, setList] = useState([]);
  const [data, setData] = useState([]);
  // 请求原始数据
  const getData = async () => {
    const result = await axios.get("api/mock/train/hotline");
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

  return (
    <div className="train-hot">
      <h2>热门路线</h2>
      <TrainSelector data={list} setInd={setInd} ind={ind}></TrainSelector>
      <ul className="train-hot-list">
        {data[ind]
          ? data[ind].target.map((item, id) => (
              <li key={id}>
                <p>
                  {list[ind]}到{item.name}火车票
                </p>
                <p>
                  <span className="price">
                    ￥<span>{item.price}</span>
                  </span>
                  起
                </p>
              </li>
            ))
          : null}
      </ul>
    </div>
  );
}
