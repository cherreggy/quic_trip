import { Select } from "antd";

export default function SeasonRec() {
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
        <Select
          defaultValue="上海"
          style={{
            width: 120,
            marginLeft: "0.5rem",
          }}
          options={[
            {
              value: "上海",
              label: "上海",
            },
            {
              value: "北京",
              label: "北京",
            },
            {
              value: "广州",
              label: "广州",
            },
            {
              value: "杭州",
              label: "杭州",
            },
          ]}
        />
      </div>
      <div className="sea-rec-body">
        <div className="left">
          <div style={{ display: "flex" }}>
            <img src="rec1.png" style={{ marginLeft: "0.5rem" }} />
            <h2>当季热卖·跟团游</h2>
          </div>
          <ul>
            <li>
              <img src="https://dimg04.c-ctrip.com/images/0301z120009mvor6o8266_C_160_160.jpg" />
              <div className="info">
                <h5>黄山风景区3日2晚私家团</h5>
                <p>
                  <span>4.9</span>分 | 80人出游
                </p>
              </div>
              <div className="price">
                ￥<span>398</span>起
              </div>
              {/* 左上角标记 */}
              <div className="marker">1</div>
            </li>
            <li>
              <img src="https://dimg04.c-ctrip.com/images/0301z120009mvor6o8266_C_160_160.jpg" />
              <div className="info">
                <h5>黄山风景区3日2晚私家团</h5>
                <p>
                  <span>4.9</span>分 | 80人出游
                </p>
              </div>
              <div className="price">
                ￥<span>398</span>起
              </div>
              {/* 左上角标记 */}
              <div className="marker">1</div>
            </li>
            <li>
              <img src="https://dimg04.c-ctrip.com/images/0301z120009mvor6o8266_C_160_160.jpg" />
              <div className="info">
                <h5>黄山风景区3日2晚私家团</h5>
                <p>
                  <span>4.9</span>分 | 80人出游
                </p>
              </div>
              <div className="price">
                ￥<span>398</span>起
              </div>
              {/* 左上角标记 */}
              <div className="marker">1</div>
            </li>
            <li>
              <img src="https://dimg04.c-ctrip.com/images/0301z120009mvor6o8266_C_160_160.jpg" />
              <div className="info">
                <h5>黄山风景区3日2晚私家团</h5>
                <p>
                  <span>4.9</span>分 | 80人出游
                </p>
              </div>
              <div className="price">
                ￥<span>398</span>起
              </div>
              {/* 左上角标记 */}
              <div className="marker">1</div>
            </li>
            <li>
              <img src="https://dimg04.c-ctrip.com/images/0301z120009mvor6o8266_C_160_160.jpg" />
              <div className="info">
                <h5>黄山风景区3日2晚私家团</h5>
                <p>
                  <span>4.9</span>分 | 80人出游
                </p>
              </div>
              <div className="price">
                ￥<span>398</span>起
              </div>
              {/* 左上角标记 */}
              <div className="marker">1</div>
            </li>
          </ul>
        </div>

        <div className="right">
          <div style={{ display: "flex" }}>
            <img src="rec2.png" style={{ marginLeft: "0.5rem" }} />
            <h2>周末畅游·特价机票</h2>
          </div>
          <ul>
            <li>
              <img src="https://dimg04.c-ctrip.com/images/0301z120009mvor6o8266_C_160_160.jpg" />
              <div className="info">
                <h5>黄山风景区3日2晚私家团</h5>
                <p>
                  <span>4.9</span>分 | 80人出游
                </p>
              </div>
              <div className="price">
                ￥<span>398</span>起
              </div>
              {/* 左上角标记 */}
              <div className="marker">1</div>
            </li>
            <li>
              <img src="https://dimg04.c-ctrip.com/images/0301z120009mvor6o8266_C_160_160.jpg" />
              <div className="info">
                <h5>黄山风景区3日2晚私家团</h5>
                <p>
                  <span>4.9</span>分 | 80人出游
                </p>
              </div>
              <div className="price">
                ￥<span>398</span>起
              </div>
              {/* 左上角标记 */}
              <div className="marker">1</div>
            </li>
            <li>
              <img src="https://dimg04.c-ctrip.com/images/0301z120009mvor6o8266_C_160_160.jpg" />
              <div className="info">
                <h5>黄山风景区3日2晚私家团</h5>
                <p>
                  <span>4.9</span>分 | 80人出游
                </p>
              </div>
              <div className="price">
                ￥<span>398</span>起
              </div>
              {/* 左上角标记 */}
              <div className="marker">1</div>
            </li>
            <li>
              <img src="https://dimg04.c-ctrip.com/images/0301z120009mvor6o8266_C_160_160.jpg" />
              <div className="info">
                <h5>黄山风景区3日2晚私家团</h5>
                <p>
                  <span>4.9</span>分 | 80人出游
                </p>
              </div>
              <div className="price">
                ￥<span>398</span>起
              </div>
              {/* 左上角标记 */}
              <div className="marker">1</div>
            </li>
            <li>
              <img src="https://dimg04.c-ctrip.com/images/0301z120009mvor6o8266_C_160_160.jpg" />
              <div className="info">
                <h5>黄山风景区3日2晚私家团</h5>
                <p>
                  <span>4.9</span>分 | 80人出游
                </p>
              </div>
              <div className="price">
                ￥<span>398</span>起
              </div>
              {/* 左上角标记 */}
              <div className="marker">1</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
