import { Carousel } from "antd";

export default function SmallBanner() {
  return (
    <Carousel
      className="inn-small-banner"
      autoplay={true}
      autoplaySpeed={2000}
      draggable={true}
    >
      <div>
        <img src="https://dimg04.c-ctrip.com/images/0zg4612000ap2m6ht3DD7.png" />
      </div>
      <div>
        <img src="https://dimg04.c-ctrip.com/images/0zg3j12000augu1mgB200.png" />
      </div>
      <div>
        <img src="https://dimg04.c-ctrip.com/images/0zg5312000artha0v5BF6.png" />
      </div>
      <div>
        <img src="https://dimg04.c-ctrip.com/images/0zg4o12000as5h90h6782.jpg" />
      </div>
    </Carousel>
  );
}
