import { RetweetOutlined } from "@ant-design/icons";
import { Tabs, ConfigProvider } from "antd";
import { Button, Form, DatePicker } from "antd";
import { createFromIconfontCN } from "@ant-design/icons";
import { Space } from "antd";
import CityPicker from "@/components/common/CityPicker";
import locale from "antd/locale/zh_CN";
import "dayjs/locale/zh-cn";
import moment from "moment";
import { useState } from "react";

const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/c/font_4006149_4g3vm8vfgxf.js",
});

export default function BoatBooker(props) {
  const [busCity, setBusCity] = useState([]);
  const [boatCity, setBoatCity] = useState([]);
  // 交换上下两个值
  const handelExchange = () => {
    console.log(busCity, boatCity);
    let tmp = [...busCity];
    setBusCity([...boatCity]);
    setBoatCity([...tmp]);
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
                      setFunc={setBusCity}
                      val={busCity}
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
                      setFunc={setBoatCity}
                      val={boatCity}
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
                      setFunc={setBusCity}
                      val={busCity}
                    ></CityPicker>
                  </Form.Item>
                  <Form.Item
                    colon={false}
                    name="到达城市"
                    label={<span style={{ color: "white" }}>到达城市</span>}
                  >
                    <CityPicker
                      chinaOnly={true}
                      setFunc={setBoatCity}
                      val={boatCity}
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
