import { RetweetOutlined } from "@ant-design/icons";
import { Tabs, ConfigProvider } from "antd";
import { Button, Form, DatePicker, message } from "antd";
import { createFromIconfontCN } from "@ant-design/icons";
import axios from "axios";
import { Space } from "antd";
import CityPicker from "@/components/common/CityPicker";
import locale from "antd/locale/zh_CN";
import "dayjs/locale/zh-cn";
import moment from "moment";
import { useState, useContext } from "react";
import { ValueContext } from "@/pages/_app";

const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/c/font_4006149_4g3vm8vfgxf.js",
});

export default function BoatBooker(props) {
  // 根组件属性
  const { isShow, setisShow, token, setToken } = useContext(ValueContext);
  // 出发和结束城市
  const [StartCity, setStartCity] = useState([]);
  const [EndCity, setEndCity] = useState([]);
  const [busCity, setBusCity] = useState([]);
  const [boatCity, setBoatCity] = useState([]);
  // 交换上下两个值
  const handelExchange = () => {
    // console.log(busCity, boatCity);
    let tmp = [...StartCity];
    setStartCity([...EndCity]);
    setEndCity([...tmp]);
  };
  // 设置开始时间
  const [startDate, setStartDate] = useState("");
  // 两种票型切换
  const [BusOrBoat, setBusOrBoat] = useState("汽车票订购");
  // 汽车票订购
  const BookBus = async () => {
    // console.log(StartCity,EndCity,startDate,BusOrBoat)
    const storedToken = token;
    if (storedToken) {
      axios
        .post("http://localhost:3000/api/mock/bookbusorboat", {
          token: storedToken,
          id: new Date().getTime(),
          StartPlace: StartCity[2],
          EndPlace: EndCity[2],
          StartDate: startDate,
          BusOrBoat: BusOrBoat,
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
    <ConfigProvider
      theme={{
        components: {
          Tabs: {
            colorBgContainer: "#9f1bfa",
            colorPrimary: "#fff",
            colorFillAlter: "#fae8ff",
            controlHeight: 32,
          },
        },
        token: {
          colorPrimary: "#9f1bfa",
        },
      }}
    >
      <Tabs
        onChange={(val) => setBusOrBoat(val)}
        type="card"
        items={[
          {
            label: "汽车票订购",
            key: "汽车票订购",
            // 汽车票面板
            children: (
              <div className="ticket bus">
                <Form style={{ position: "relative" }}>
                  <Form.Item
                    colon={false}
                    name="出发城市"
                    label={<span style={{ color: "white" }}>出发城市</span>}
                  >
                    <CityPicker
                      chinaOnly={true}
                      setFunc={setStartCity}
                      val={StartCity}
                    ></CityPicker>
                  </Form.Item>
                  <Button
                    type="ghost"
                    shape="circle"
                    style={{
                      position: "absolute",
                      left: "0.8rem",
                      top: "2rem",
                      backgroundColor: "#fae8ff",
                      color: "#9f1bfa",
                    }}
                    icon={<RetweetOutlined></RetweetOutlined>}
                    onClick={handelExchange}
                  ></Button>
                  <Form.Item
                    colon={false}
                    name="到达城市"
                    label={<span style={{ color: "white" }}>到达城市</span>}
                    style={{ marginTop: "2rem" }}
                  >
                    <CityPicker
                      chinaOnly={true}
                      setFunc={setEndCity}
                      val={EndCity}
                    ></CityPicker>
                  </Form.Item>
                  <Form.Item
                    colon={false}
                    name="到达城市"
                    label={<span style={{ color: "white" }}>选择日期</span>}
                  >
                    <ConfigProvider locale={locale}>
                      <DatePicker
                        disabledDate={(current) => {
                          return current < moment().startOf("day");
                        }}
                        onChange={(val) =>
                          setStartDate(val.format("YYYY-MM-DD"))
                        }
                      />
                    </ConfigProvider>
                  </Form.Item>
                </Form>
                <Button
                  type="default"
                  style={{
                    background:
                      "linear-gradient(45deg, rgb(255 163 120), rgb(201 123 255))",
                    border: "none",
                    color: "white",
                    width: "100%",
                  }}
                  size="large"
                  icon={
                    <IconFont
                      type="icon-qichepiao"
                      style={{ fontSize: "1.6rem" }}
                    ></IconFont>
                  }
                  onClick={BookBus}
                >
                  订购
                </Button>
              </div>
            ),
          },
          {
            label: "船票订购",
            key: "船票订购",
            // 船票面板
            children: (
              <div className="ticket bus boat">
                <Form style={{ position: "relative" }}>
                  <Form.Item
                    colon={false}
                    name="出发城市"
                    label={<span style={{ color: "white" }}>出发城市</span>}
                  >
                    <CityPicker
                      chinaOnly={true}
                      setFunc={setStartCity}
                      val={StartCity}
                    ></CityPicker>
                  </Form.Item>
                  <Form.Item
                    colon={false}
                    name="到达城市"
                    label={<span style={{ color: "white" }}>到达城市</span>}
                  >
                    <CityPicker
                      chinaOnly={true}
                      setFunc={setEndCity}
                      val={EndCity}
                    ></CityPicker>
                  </Form.Item>
                  <Form.Item
                    colon={false}
                    name="到达城市"
                    label={<span style={{ color: "white" }}>选择日期</span>}
                  >
                    <ConfigProvider locale={locale}>
                      <DatePicker
                        onChange={(val) =>
                          setStartDate(val.format("YYYY-MM-DD"))
                        }
                        disabledDate={(current) => {
                          return current < moment().startOf("day");
                        }}
                      />
                    </ConfigProvider>
                  </Form.Item>
                </Form>
                <Button
                  type="default"
                  style={{
                    background:
                      "linear-gradient(45deg, rgb(189 252 255), rgb(255 138 225))",
                    border: "none",
                    color: "white",
                    width: "100%",
                  }}
                  size="large"
                  icon={
                    <IconFont
                      type="icon-lunchuan"
                      style={{ fontSize: "1.6rem" }}
                    ></IconFont>
                  }
                  onClick={BookBus}
                >
                  订购
                </Button>
              </div>
            ),
          },
        ]}
      />
    </ConfigProvider>
  );
}
