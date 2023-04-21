import { ConfigProvider, Button, DatePicker, message } from "antd";
import { Radio } from "antd";
import { RightOutlined, SwapOutlined } from "@ant-design/icons";
import { createFromIconfontCN, CloseCircleOutlined } from "@ant-design/icons";
import { useState, useContext } from "react";
import { ValueContext } from "@/pages/_app";
import axios from "axios";
import CityPicker from "../common/CityPicker";
import moment from "moment";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import locale from "antd/locale/zh_CN";
const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/c/font_4006149_h0exp2flkq5.js",
});
import Router from "next/router";

export default function TrainBooker(props) {
  // 根组件
  const { isShow, setisShow, token, setToken } = useContext(ValueContext);
  // 控制是否显示返程日期
  const [showReturn, setShowReturn] = useState(false);
  const handleShow = () => {
    setShowReturn(true);
  };
  const handleHide = () => {
    setShowReturn(false);
  };
  // 设置出发和到达城市
  const [start, setStart] = useState([]);
  const [end, setEnd] = useState([]);
  // 交换两个城市
  const handelExchange = () => {
    // console.log(start, end);
    let tmp = [...start];
    setStart([...end]);
    setEnd([...start]);
  };
  // 差异天数
  const [day, setDay] = useState(1);
  // 获取旅程类型
  const [Triptype, setTriptype] = useState("单程");
  // 旅程类型设置
  const handleTriptype = (e) => {
    if (e.target.value === 1) {
      setTriptype("单程");
    } else if (e.target.value === 2) {
      setTriptype("往返");
    } else {
      setTriptype("中转");
    }
  };
  // 起始日期
  const [startDate, setStartDate] = useState(moment().format("YYYY-MM-DD"));
  // 结束日期
  const [endDate, setEndDate] = useState("无");
  // 订购操作
  const BookTrain = () => {
    const storedToken = token;
    if (storedToken) {
      axios
        .post("api/mock/booktrain", {
          token: storedToken,
          id: new Date().getTime(),
          StartPlace: start[2],
          EndPlace: end[2],
          Triptype: Triptype,
          StartDate: startDate,
          EndDate: endDate,
        })
        .then((res) => {
          message.success(res.data.message);
        })
        .catch((err) => {
          message.error("操作失败" + err);
        });
    } else {
      message.error("请先登录");
    }
  };

  return (
    <div>
      <div className="train-pannel">
        {/* 单选框 */}
        <div className="train-radios">
          <Radio.Group onChange={handleTriptype} defaultValue={1}>
            <Radio value={1}>单程</Radio>
            <Radio value={2}>往返</Radio>
            <Radio value={3}>中转</Radio>
          </Radio.Group>

          {/* 右边链接 */}
          <a
            className="train-hover"
            onClick={() => {
              Router.push("/mybook");
            }}
          >
            <IconFont type="icon-huoche" className="train-icon"></IconFont>
            火车票订单
            <RightOutlined className="train-right"></RightOutlined>
          </a>
        </div>
        <div className="air-row-2">
          {/* 城市日期选择器组合 */}
          <div className="train-cities">
            <CityPicker
              setFunc={setStart}
              className="air-citypicker left"
              title="出发地"
              val={start}
              chinaOnly={true}
            ></CityPicker>

            <CityPicker
              setFunc={setEnd}
              className="air-citypicker right"
              title="目的地"
              val={end}
              chinaOnly={true}
            ></CityPicker>
            {/* 交换按钮 */}
            <Button
              className="air-change"
              type="circle"
              icon={<SwapOutlined></SwapOutlined>}
              onClick={() => {
                handelExchange();
              }}
            ></Button>
          </div>
          {/* 日期选择器组合 */}
          <div className="train-dates">
            <ConfigProvider locale={locale}>
              <DatePicker
                className="train-date-left"
                disabledDate={(current) => {
                  return current < moment().startOf("day");
                }}
                defaultValue={dayjs(
                  moment().format("YYYY-MM-DD"),
                  "YYYY年MM月DD日"
                )}
                placeholder="出发日期"
              ></DatePicker>
              <div className="train-date-right">
                {showReturn ? (
                  <div className="train-show-pannel">
                    <DatePicker
                      disabledDate={(current) => {
                        return current < moment().startOf("day");
                      }}
                      placeholder="返程日期"
                    ></DatePicker>
                    <Button
                      className="train-hide"
                      onClick={handleHide}
                      type="ghost"
                      icon={<CloseCircleOutlined></CloseCircleOutlined>}
                    >
                      <span className="train-cancel">取消行程</span>
                    </Button>
                  </div>
                ) : (
                  <Button
                    className="train-show"
                    onClick={handleShow}
                    type="default"
                  >
                    添加返程
                  </Button>
                )}
              </div>
            </ConfigProvider>
          </div>
          {/* 订购按钮 */}
          <Button className="train-book" onClick={BookTrain}>
            买票
          </Button>
        </div>
      </div>
    </div>
  );
}
