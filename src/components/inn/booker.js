import {
  Form,
  Space,
  DatePicker,
  ConfigProvider,
  Select,
  Button,
  Popover,
  InputNumber,
  Input,
  message,
} from "antd";
import { DownOutlined } from "@ant-design/icons";
import CityPicker from "../common/CityPicker";
import locale from "antd/locale/zh_CN";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import moment from "moment";
import { useState, useContext } from "react";
import { ValueContext } from "@/pages/_app";
import axios from "axios";
const { RangePicker } = DatePicker;

export default function Booker() {
  // 根组件
  const { isShow, setisShow, token, setToken } = useContext(ValueContext);
  // 表单
  const [form1] = Form.useForm();
  const [form2] = Form.useForm();
  // 存放儿童数
  const [child, setChild] = useState(0);
  // 存放成人数
  const [adult, setAdult] = useState(1);
  // 存放房间数
  const [roomNum, setRoomNum] = useState(1);
  // 存放几晚
  const [night, setNight] = useState(1);
  // 星级选择
  const [level, setLevel] = useState("");
  // 入住时间
  const [checkinTime, setcheckinTime] = useState(moment().format("YYYY-MM-DD"));
  // 离开时间
  const [checkoutTime, setcheckoutTime] = useState(
    moment().add(1, "days").format("YYYY-MM-DD")
  );
  // 备注
  const [description, setDescription] = useState("");

  // 日期渲染函数
  const rendCells = () => {
    return "?";
  };
  // 获得住宿天数
  const getNights = (value) => {
    // if (value) console.log(value[0].unix(), value[1].unix());
    if (value) {
      setcheckinTime(value[0].format("YYYY-MM-DD"));
      setcheckoutTime(value[1].format("YYYY-MM-DD"));
      setNight(
        moment(value[1].format("YYYY-MM-DD")).diff(
          value[0].format("YYYY-MM-DD"),
          "days"
        )
      );
    }
  };
  // 酒店级别信息
  const items = [
    {
      value: "二星（钻）及以下",
      label: <div>二星（钻）及以下</div>,
    },
    {
      value: "三星（钻）",
      label: <div>三星（钻）</div>,
    },
    {
      value: "四星（钻）",
      label: <div>四星（钻）</div>,
    },
    {
      value: "五星（钻）",
      label: <div>五星（钻）</div>,
    },
  ];
  // 地点的选择
  const [position, setPosition] = useState("");
  // 订购酒店操作
  const BookHotel = async (e) => {
    const storedToken = token;
    if (storedToken) {
      axios
        .post("api/mock/bookhotel", {
          token: storedToken,
          id: new Date().getTime(),
          destination: position[2],
          HotelLevel: level,
          checkinDate: checkinTime,
          checkoutDate: checkoutTime,
          RoomCount: roomNum,
          AdultCount: adult,
          ChildCount: child,
          description: description,
        })
        .then((res) => {
          message.success(res.data.message);
          form1.resetFields();
          form2.resetFields();
          // 恢复默认值
          setLevel("");
          setDescription("");
          setRoomNum(1);
          setAdult(1);
          setChild(0);
          setNight(1);
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
      <div className="inn-box">
        <h2>预订酒店</h2>
        <h5>Book Rooms</h5>
        {/* 下面的表单项 */}
        <div className="inn-box-forms">
          <Form style={{ height: "5rem" }} form={form1}>
            <Space.Compact>
              {/* 城市选择器 */}
              <Form.Item
                name="city-picker"
                style={{
                  width: "15rem",
                  textAlign: "center",
                }}
                className="inn-city"
              >
                <CityPicker
                  title={"目的地/酒店名称"}
                  setFunc={setPosition}
                ></CityPicker>
              </Form.Item>
              {/* 时间选择器 */}
              <Form.Item name="date-picker">
                <ConfigProvider locale={locale}>
                  <RangePicker
                    allowClear={false}
                    defaultValue={[
                      dayjs(moment().format("YYYY-MM-DD"), "YYYY年MM月DD日"),
                      dayjs(
                        moment().add(1, "days").format("YYYY-MM-DD"),
                        "YYYY年MM月DD日"
                      ),
                    ]}
                    style={{ width: "33rem" }}
                    format={"YYYY年MM月DD日（dddd）"}
                    placeholder={["入住", "退房"]}
                    separator={<div className="inn-seperator">-{night}晚-</div>}
                    onChange={getNights}
                    // 禁用历史时间
                    disabledDate={(current) => {
                      return current < moment().startOf("day");
                    }}
                  ></RangePicker>
                </ConfigProvider>
              </Form.Item>
            </Space.Compact>
          </Form>

          <Form style={{ display: "flex", marginTop: "1.5rem" }} form={form2}>
            <Space.Compact
              className="dark-use"
              style={{
                flex: "8",
                backgroundColor: "white",
                borderRadius: "0.4rem",
                boxSizing: "border-box",
                border: "1px solid #ccc",
              }}
            >
              {/* 房间及住客 */}
              <div className="inn-lined">
                <p
                  style={{
                    padding: "0.5rem 0 0 1rem",
                  }}
                  className="inn-title"
                >
                  房间及住客
                </p>
                <Popover
                  placement="bottom"
                  content={
                    <div>
                      {/* 房间 */}
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <span>房间：</span>
                        <InputNumber
                          min={1}
                          defaultValue={1}
                          style={{ borderRadius: "1rem", overflow: "hidden" }}
                          onChange={(e) => {
                            setRoomNum(e);
                          }}
                        />
                      </div>
                      {/* 成人 */}
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          margin: "0.5rem 0",
                        }}
                      >
                        <span>成人（18岁及以上）：</span>
                        <InputNumber
                          min={1}
                          defaultValue={1}
                          style={{ borderRadius: "1rem", overflow: "hidden" }}
                          onChange={(e) => {
                            setAdult(e);
                          }}
                        />
                      </div>
                      {/* 儿童 */}
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <span>儿童（0~7岁）：</span>
                        <InputNumber
                          min={0}
                          defaultValue={0}
                          style={{ borderRadius: "1rem", overflow: "hidden" }}
                          onChange={(e) => {
                            setChild(e);
                          }}
                        />
                      </div>
                    </div>
                  }
                  trigger="click"
                >
                  <Button
                    type="text"
                    style={{ height: "3rem", borderRadius: "0 0 0 0.5rem" }}
                  >
                    {roomNum}房间，{adult + child}位
                  </Button>
                </Popover>
              </div>
              {/* 酒店级别 */}
              <div style={{ paddingTop: "0.5rem" }} className="inn-lined">
                <p
                  style={{
                    padding: "0 0 0 1rem",
                  }}
                  className="inn-title"
                >
                  酒店级别
                </p>
                <Select
                  onChange={(e) => {
                    setLevel(e);
                  }}
                  value={level}
                  style={{
                    width: "10rem",
                    marginTop: "0.6rem",
                  }}
                  bordered={false}
                  options={items}
                  allowClear={true}
                ></Select>
              </div>
              {/* 关键词 */}
              <div style={{ padding: "0.5rem 0 0 1rem" }}>
                <p className="inn-title">备注（选填）</p>
                <Input
                  style={{ width: "20rem", height: "3rem", borderRadius: "0" }}
                  bordered={false}
                  placeholder="机场/火车站/酒店名称"
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                ></Input>
              </div>
              {/* 预定按钮 */}
              <Button
                type="primary"
                size="large"
                style={{ flex: "2", fontSize: "1.5rem", height: "5rem" }}
                className="inn-search"
                onClick={BookHotel}
              >
                预订
              </Button>
            </Space.Compact>
          </Form>
        </div>
      </div>
    </div>
  );
}
