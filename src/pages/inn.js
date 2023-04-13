import BigBanner from "@/components/inn/bigbanner";
import Booker from "@/components/inn/booker";
import SmallBanner from "@/components/inn/smallbanner";
import RecommendInn from "@/components/inn/recommend";
import SeasonRec from "@/components/inn/seasonrec";
export default function Inn() {
  return (
    <div>
      <div className="wrapper-inn">
        {/* 左侧长条内容 */}
        <div className="inn-left">
          {/* 酒店预订模块 */}
          <Booker></Booker>
          {/* 小轮播图 */}
          <div style={{ width: "50rem" }}>
            <SmallBanner></SmallBanner>
          </div>
          {/* 推荐板块 */}
          <RecommendInn></RecommendInn>
          {/* 当季热推 */}
          <SeasonRec></SeasonRec>
        </div>
        {/* 右侧吸顶长条 */}
        <div className="inn-right">
          {/* 大轮播图 */}
          <BigBanner></BigBanner>
        </div>
      </div>
    </div>
  );
}
