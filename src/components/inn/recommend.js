import { Segmented, Carousel } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { useEffect, useState, useRef } from "react";

export default function RecommendInn(props) {
  const ref = useRef();
  // 获取选择的城市
  const [chosenCity, setChosenCity] = useState("");
  const content = null;
  var defaultVal = "";
  const [cityList, setCityList] = useState([]); // 存放城市列表
  // 城市选择器发生变化
  const onCityChange = (e) => {
    setChosenCity(e);
    ref.current.goTo(0);
  };
  useEffect(() => {
    // 根据城市名获取城市列表
    // console.log(props.data[0]);
    const tmp = [];
    props.data.forEach((element) => {
      tmp.push(element.city);
    });
    defaultVal = cityList[0];
    // console.log(cityList[0]);
    setCityList([...tmp]);
    setChosenCity(tmp[0]);
  }, [props.data]);

  return (
    <div className="inn-rec">
      <div className="inn-rec-head">
        {/* 标题 */}
        <h2>
          酒店<span style={{ color: "#9f1bfa" }}>推荐</span>
        </h2>
        {/* 右侧选择城市滑块 */}
        <Segmented
          options={cityList}
          // defaultValue={"上海"}
          onChange={onCityChange}
          style={{ backgroundColor: "transparent" }}
          value={chosenCity}
        />
      </div>
      <div className="inn-rec-content">
        {/* 走马灯大块 */}
        <Carousel
          dots={false}
          arrows={true}
          slide="div"
          prevArrow={<LeftOutlined></LeftOutlined>}
          nextArrow={<RightOutlined></RightOutlined>}
          infinite={false}
          speed={600}
          ref={ref}
        >
          {/* 展示两页，每页3个 */}
          <div>
            <ul>
              {props.data
                .filter((item) => item.city === chosenCity)
                .map((c) =>
                  c.inns.map((item, ind) =>
                    ind < 3 ? (
                      <li key={ind}>
                        <div
                          style={{
                            overflow: "hidden",
                            hight: "5rem",
                            width: "100%",
                          }}
                        >
                          <img src={item.url} />
                        </div>

                        <div className="inn-rec-content-bottom">
                          <h2>
                            <a>{item.name}</a>
                          </h2>

                          <p>
                            {new Array(item.stars).fill(0).map(() => (
                              <img src="star.png" />
                            ))}
                          </p>
                          {/* 评分 */}
                          <div className="rank">
                            <div
                              style={{
                                width: "3rem",
                                height: "2rem",
                                lineHeight: "2rem",
                                color: "#b342ff",
                              }}
                            >
                              <span
                                style={{
                                  fontSize: "1.5rem",
                                }}
                              >
                                {item.rate}
                              </span>
                              /5
                            </div>
                            <div
                              style={{
                                width: "3rem",
                                height: "1.5rem",
                                backgroundColor: "#b342ff",
                                color: "white",
                                lineHeight: "1.5rem",
                                textAlign: "center",
                                borderRadius: "0.3rem",
                                marginLeft: "0.5rem",
                              }}
                            >
                              超棒
                            </div>
                          </div>
                          {/* 点评数目和价格 */}
                          <div className="price">
                            <div style={{ color: "grey" }}>
                              {item.com}条点评
                            </div>
                            <div style={{ color: "#9f1bfa" }}>
                              ￥
                              <span
                                style={{
                                  fontSize: "1.2rem",
                                  fontWeight: "700",
                                }}
                              >
                                {item.price}
                              </span>
                            </div>
                          </div>
                        </div>
                      </li>
                    ) : null
                  )
                )}
            </ul>
          </div>

          {props.data
            .filter((item) => item.city === chosenCity)
            .map((c) => (
              <div>
                <ul>
                  {c.inns.map((item, ind) =>
                    ind > 3 ? (
                      <li key={ind}>
                        <div
                          style={{
                            overflow: "hidden",
                            hight: "5rem",
                            width: "100%",
                          }}
                        >
                          <img src={item.url} />
                        </div>

                        <div className="inn-rec-content-bottom">
                          <h2>
                            <a>{item.name}</a>
                          </h2>

                          <p>
                            {new Array(item.stars).fill(0).map(() => (
                              <img src="star.png" />
                            ))}
                          </p>
                          {/* 评分 */}
                          <div className="rank">
                            <div
                              style={{
                                width: "3rem",
                                height: "2rem",
                                lineHeight: "2rem",
                                color: "#b342ff",
                              }}
                            >
                              <span
                                style={{
                                  fontSize: "1.5rem",
                                }}
                              >
                                {item.rate}
                              </span>
                              /5
                            </div>
                            <div
                              style={{
                                width: "3rem",
                                height: "1.5rem",
                                backgroundColor: "#b342ff",
                                color: "white",
                                lineHeight: "1.5rem",
                                textAlign: "center",
                                borderRadius: "0.3rem",
                                marginLeft: "0.5rem",
                              }}
                            >
                              超棒
                            </div>
                          </div>
                          {/* 点评数目和价格 */}
                          <div className="price">
                            <div style={{ color: "grey" }}>
                              {item.com}条点评
                            </div>
                            <div style={{ color: "#9f1bfa" }}>
                              ￥
                              <span
                                style={{
                                  fontSize: "1.2rem",
                                  fontWeight: "700",
                                }}
                              >
                                {item.price}
                              </span>
                            </div>
                          </div>
                        </div>
                      </li>
                    ) : null
                  )}
                </ul>
              </div>
            ))}
        </Carousel>
      </div>
    </div>
  );
}
