import { Segmented, Carousel } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

export default function RecommendInn() {
  return (
    <div className="inn-rec">
      <div className="inn-rec-head">
        {/* 标题 */}
        <h2>
          酒店<span style={{ color: "#9f1bfa" }}>推荐</span>
        </h2>
        {/* 右侧选择城市滑块 */}
        <Segmented
          options={["上海", "北京", "广州", "杭州"]}
          defaultValue="上海"
          style={{ backgroundColor: "transparent" }}
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
        >
          {/* 展示两页，每页3个 */}
          <div>
            <ul>
              <li key={0}>
                <div
                  style={{ overflow: "hidden", hight: "5rem", width: "100%" }}
                >
                  <img src="https://dimg04.c-ctrip.com/images/0206u120009i7e6j6F0EB_R_300_225_R5_Q70_D.jpg" />
                </div>

                <div className="inn-rec-content-bottom">
                  <h2>
                    <a>上海崇明岛曼溪锄禾·瀛家民宿</a>
                  </h2>

                  <p>
                    <img src="star.png" />
                    <img src="star.png" />
                    <img src="star.png" />
                    <img src="star.png" />
                    <img src="star.png" />
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
                        4.8
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
                    <div style={{ color: "grey" }}>672条点评</div>
                    <div style={{ color: "#9f1bfa" }}>
                      ￥
                      <span style={{ fontSize: "1.2rem", fontWeight: "700" }}>
                        328
                      </span>
                    </div>
                  </div>
                </div>
              </li>
              <li key={1}>
                <div
                  style={{ overflow: "hidden", hight: "5rem", width: "100%" }}
                >
                  <img src="https://dimg04.c-ctrip.com/images/0206u120009i7e6j6F0EB_R_300_225_R5_Q70_D.jpg" />
                </div>

                <div className="inn-rec-content-bottom">
                  <h2>
                    <a>上海崇明岛曼溪锄禾·瀛家民宿</a>
                  </h2>

                  <p>
                    <img src="star.png" />
                    <img src="star.png" />
                    <img src="star.png" />
                    <img src="star.png" />
                    <img src="star.png" />
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
                        4.8
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
                    <div style={{ color: "grey" }}>672条点评</div>
                    <div style={{ color: "#9f1bfa" }}>
                      ￥
                      <span style={{ fontSize: "1.2rem", fontWeight: "700" }}>
                        328
                      </span>
                    </div>
                  </div>
                </div>
              </li>
              <li key={2}>
                <div
                  style={{ overflow: "hidden", hight: "5rem", width: "100%" }}
                >
                  <img src="https://dimg04.c-ctrip.com/images/0206u120009i7e6j6F0EB_R_300_225_R5_Q70_D.jpg" />
                </div>

                <div className="inn-rec-content-bottom">
                  <h2>
                    <a>上海崇明岛曼溪锄禾·瀛家民宿</a>
                  </h2>

                  <p>
                    <img src="star.png" />
                    <img src="star.png" />
                    <img src="star.png" />
                    <img src="star.png" />
                    <img src="star.png" />
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
                        4.8
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
                    <div style={{ color: "grey" }}>672条点评</div>
                    <div style={{ color: "#9f1bfa" }}>
                      ￥
                      <span style={{ fontSize: "1.2rem", fontWeight: "700" }}>
                        328
                      </span>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li key={3}>
                <div
                  style={{ overflow: "hidden", hight: "5rem", width: "100%" }}
                >
                  <img src="https://dimg04.c-ctrip.com/images/0206u120009i7e6j6F0EB_R_300_225_R5_Q70_D.jpg" />
                </div>

                <div className="inn-rec-content-bottom">
                  <h2>
                    <a>上海崇明岛曼溪锄禾·瀛家民宿</a>
                  </h2>

                  <p>
                    <img src="star.png" />
                    <img src="star.png" />
                    <img src="star.png" />
                    <img src="star.png" />
                    <img src="star.png" />
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
                        4.8
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
                    <div style={{ color: "grey" }}>672条点评</div>
                    <div style={{ color: "#9f1bfa" }}>
                      ￥
                      <span style={{ fontSize: "1.2rem", fontWeight: "700" }}>
                        328
                      </span>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </Carousel>
      </div>
    </div>
  );
}
