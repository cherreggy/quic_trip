import TrainBooker from "@/components/train/trainbooker";
import CheapInn from "@/components/train/cheapinn";
import TrainTrip from "@/components/train/traintrip";
import TrainHot from "@/components/train/trainhot";
import MainPage from "./mainpage";

function TrainBody(props) {
  return (
    <div className="train-back">
      <div className="train-wrapper">
        {/* 订票组件 */}
        <TrainBooker setRoute={props.setRoute}></TrainBooker>
        {/* 优惠酒店 */}
        <CheapInn></CheapInn>
        {/* 坐火车去旅行 */}
        <TrainTrip></TrainTrip>
        {/* 热门路线 */}
        <TrainHot></TrainHot>
        {/* 展示图 */}
        <img src="train-img.png" className="train-img" />
        {/* 底部图 */}
        <img src="train-img1.png" className="train-img-bottom" />
      </div>
    </div>
  );
}

export default function Train() {
  return (
    <MainPage
      content={<TrainBody></TrainBody>}
      defaultOpenKeys={["3"]}
      defaultSelectedKeys={["3-1"]}
    ></MainPage>
  );
}
