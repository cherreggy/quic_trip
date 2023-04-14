import { Tabs, ConfigProvider, Button } from "antd";
import { Carousel } from "antd";
import { Radio, Checkbox, Select } from "antd";
import { CheckOutlined, SwapOutlined } from "@ant-design/icons";
import { use, useState } from "react";
import CityPicker from "../common/CityPicker";

export default function PlaneBooker() {
  // 设置出发和到达城市
  const [start, setStart] = useState([]);
  const [end, setEnd] = useState([]);
  // 控制机票类型
  const [type, setType] = useState("经济/超经舱");
  const typeChange = (e) => {
    setType(e);
  };
  // 交换两个城市
  const handelExchange = () => {
    // console.log(start, end);
    let tmp = [...start];
    setStart([...end]);
    setEnd([...start]);
  };
  return (
    <div>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#9f1bfa",
          },
          components: {
            Tabs: {
              colorBgContainer: "white",
              colorText: "white",
              lineWidth: 1,
              colorPrimary: "#000",
              colorBorderSecondary: "rgba(0, 0, 0, 0)",
              colorBorder: "",
              colorFillAlter: "#6d0099",
              colorTextHeading: "rgba(0, 0, 0, 0.88)",
              colorPrimaryHover: "#ccc",
              colorPrimaryActive: "#555",
              colorTextDisabled: "white",
            },
          },
        }}
      >
        <Tabs
          type="card"
          items={[
            {
              label: <div className="tabs">国内、国际/中国港澳台</div>,
              key: "国内、国际/中国港澳台",
              children: (
                <div className="air-pannel">
                  // 表单组
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "1rem",
                    }}
                  >
                    {/* 单选框 */}
                    <div>
                      <Radio.Group className="air-radio">
                        <Radio value={1}>单程</Radio>
                        <Radio value={2}>往返</Radio>
                        <Radio value={3}>多程（含缺口程）</Radio>
                      </Radio.Group>
                    </div>
                    {/* 下拉菜单 */}
                    <div>
                      <Checkbox>仅看直飞</Checkbox>
                      <Select
                        bordered={false}
                        defaultValue="经济/超经舱"
                        onChange={typeChange}
                        style={{
                          width: 160,
                        }}
                        options={[
                          {
                            value: "经济/超经舱",
                            label: (
                              <div className="air-options">
                                {type == "经济/超经舱" ? (
                                  <CheckOutlined className="air-option-icons"></CheckOutlined>
                                ) : (
                                  ""
                                )}
                                <div className="air-op">经济/超经舱</div>
                              </div>
                            ),
                          },
                          {
                            value: "公务/头等舱",
                            label: (
                              <div className="air-options">
                                {type == "公务/头等舱" ? (
                                  <CheckOutlined className="air-option-icons"></CheckOutlined>
                                ) : (
                                  ""
                                )}
                                <div className="air-op">公务/头等舱</div>
                              </div>
                            ),
                          },
                          {
                            value: "公务舱",
                            label: (
                              <div className="air-options">
                                {type == "公务舱" ? (
                                  <CheckOutlined className="air-option-icons"></CheckOutlined>
                                ) : (
                                  ""
                                )}
                                <div className="air-op">公务舱</div>
                              </div>
                            ),
                          },
                          {
                            value: "头等舱",
                            label: (
                              <div className="air-options">
                                {type == "头等舱" ? (
                                  <CheckOutlined className="air-option-icons"></CheckOutlined>
                                ) : (
                                  ""
                                )}
                                <div className="air-op">头等舱</div>
                              </div>
                            ),
                          },
                        ]}
                      />
                    </div>
                  </div>
                  {/* 城市日期选择器组合 */}
                  <div className="air-cities">
                    <CityPicker
                      setFunc={setStart}
                      className="air-citypicker left"
                      title="出发地"
                      val={start}
                    ></CityPicker>

                    <CityPicker
                      setFunc={setEnd}
                      className="air-citypicker right"
                      title="目的地"
                      val={end}
                    ></CityPicker>
                    {/* 交换按钮 */}
                    <Button
                      className="air-change"
                      type="circle"
                      icon={<SwapOutlined></SwapOutlined>}
                      onClick={(e) => {
                        handelExchange();
                      }}
                    ></Button>
                  </div>
                </div>
              ),
            },
            {
              label: <div className="tabs">特价机票</div>,
              key: "特价机票",
              children: <div>Booker</div>,
              disabled: true,
            },
            {
              label: <div className="tabs">航班动态</div>,
              key: "航班动态",
              children: <div>Booker</div>,
              disabled: true,
            },
            {
              label: <div className="tabs">在线选座</div>,
              key: "在线选座",
              children: <div>Booker</div>,
              disabled: true,
            },
            {
              label: <div className="tabs">退票改签</div>,
              key: "退票改签",
              children: <div>Booker</div>,
              disabled: true,
            },
            {
              label: <div className="tabs">更多服务</div>,
              key: "更多服务",
              children: <div>Booker</div>,
              disabled: true,
            },
          ]}
          style={{ boxShadow: "0 0 15px rgba(0,0,0,0.1)" }}
        />
        {/* 小banner */}
        <Carousel
          className="air-small-banner"
          autoplay={true}
          autoplaySpeed={2000}
          draggable={true}
        >
          <div>
            <img src="https://dimg04.c-ctrip.com/images/0zg3e12000awvccxbC694.jpg" />
          </div>
          <div>
            <img src="https://dimg04.c-ctrip.com/images/0zg3q12000aup39a9F63B.jpg" />
          </div>
          <div>
            <img src="https://dimg04.c-ctrip.com/images/0zg2e12000awvcyo69393.jpg" />
          </div>
          <div>
            <img src="https://dimg04.c-ctrip.com/images/0zg5n12000aup5jivD121.jpg" />
          </div>
        </Carousel>
      </ConfigProvider>
    </div>
  );
}
