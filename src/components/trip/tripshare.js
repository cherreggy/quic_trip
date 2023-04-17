import {
  QuestionCircleOutlined,
  PictureOutlined,
  FileTextOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import { List, ConfigProvider } from "antd";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import locale from "antd/locale/zh_CN";
import axios from "axios";

export default function TripShare() {
  // 存放原始数据
  const [data, setData] = useState([]);
  // 请求原始数据
  const getData = async () => {
    const result = await axios.get("api/mock/trip/rec");
    // console.log(result);
    setData([...result.data]);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      {/* 题目 */}
      <div className="trip-share-head">
        <h3>推荐游记</h3>
        <a>
          什么是优质游记？申请必看{" "}
          <QuestionCircleOutlined></QuestionCircleOutlined>
        </a>
      </div>
      {/* 下面的列表展示 */}
      <ConfigProvider locale={locale}>
        <List
          bordered
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              {
                <div className="trip-share-item">
                  <img src={item.url} className="img" />
                  <div className="trip-share-item-right">
                    <div className="top">
                      <a>{item.title}</a>
                      <div className="user">
                        <img src={item.avatar} className="avatar" />
                        {item.username}
                      </div>
                      <p className="detail">{item.detail}</p>
                    </div>
                    <div className="bottom">
                      <div>
                        <PictureOutlined></PictureOutlined>
                        {item.img}
                      </div>
                      <div>
                        <FileTextOutlined></FileTextOutlined>
                        {item.review}
                      </div>
                      <div>
                        <EyeOutlined></EyeOutlined>
                        {item.watch}
                      </div>
                    </div>
                  </div>
                  {/* 精华或者头条展示 */}
                  <div className="show">
                    {item.jinghua ? (
                      <div className="jinghua">
                        <img src="jinghua.png" />
                      </div>
                    ) : null}
                    {item.toutiao ? (
                      <div className="toutiao">
                        <img src="toutiao.png" />
                      </div>
                    ) : null}
                  </div>
                </div>
              }
            </List.Item>
          )}
          pagination={{
            pageSize: 8,
            showQuickJumper: true,
          }}
        />
      </ConfigProvider>
    </div>
  );
}
