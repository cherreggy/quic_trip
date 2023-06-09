import { Cascader } from "antd";
import { useState, useEffect } from "react";

export default function CityPicker(props) {
  var options = [
    {
      value: "国内",
      label: "国内",
      children: [
        {
          value: "热门",
          label: "热门",
          children: [
            {
              value: "北京",
              label: "北京",
            },
            {
              value: "上海",
              label: "上海",
            },
            {
              value: "广州",
              label: "广州",
            },
            {
              value: "深圳",
              label: "深圳",
            },
            {
              value: "成都",
              label: "成都",
            },
            {
              value: "杭州",
              label: "杭州",
            },
            {
              value: "武汉",
              label: "武汉",
            },
            {
              value: "西安",
              label: "西安",
            },
            {
              value: "重庆",
              label: "重庆",
            },
            {
              value: "青岛",
              label: "青岛",
            },
            {
              value: "长沙",
              label: "长沙",
            },
            {
              value: "南京",
              label: "南京",
            },
            {
              value: "厦门",
              label: "厦门",
            },
            {
              value: "昆明",
              label: "昆明",
            },
            {
              value: "大连",
              label: "大连",
            },
            {
              value: "天津",
              label: "天津",
            },
            {
              value: "郑州",
              label: "郑州",
            },
            {
              value: "三亚",
              label: "三亚",
            },
            {
              value: "济南",
              label: "济南",
            },
            {
              value: "福州",
              label: "福州",
            },
          ],
        },
        {
          value: "A-F",
          label: "A-F",
          children: [
            {
              value: "阿勒泰",
              label: "阿勒泰",
            },
            {
              value: "阿克苏",
              label: "阿克苏",
            },
            {
              value: "鞍山",
              label: "鞍山",
            },
            {
              value: "安庆",
              label: "安庆",
            },
            {
              value: "安顺",
              label: "安顺",
            },
            {
              value: "阿拉善左",
              label: "阿拉善左",
            },
            {
              value: "中国澳门",
              label: "中国澳门",
            },
            {
              value: "阿里",
              label: "阿里",
            },
            {
              value: "阿拉善右",
              label: "阿拉善右",
            },
            {
              value: "阿尔山",
              label: "阿尔山",
            },
            {
              value: "巴中",
              label: "巴中",
            },
            {
              value: "百色",
              label: "百色",
            },
            {
              value: "毕节",
              label: "毕节",
            },
            {
              value: "北海",
              label: "北海",
            },
            {
              value: "北京大兴国际机场",
              label: "北京大兴国际机场",
            },
            {
              value: "北京首都机场",
              label: "北京首都机场",
            },
            {
              value: "博乐",
              label: "博乐",
            },
            {
              value: "保山",
              label: "保山",
            },
            {
              value: "白城",
              label: "白城",
            },
            {
              value: "布尔津",
              label: "布尔津",
            },
            {
              value: "白山",
              label: "白山",
            },
            {
              value: "巴彦卓尔",
              label: "巴彦卓尔",
            },
            {
              value: "昌都",
              label: "昌都",
            },
            {
              value: "承德",
              label: "承德",
            },
            {
              value: "常德",
              label: "常德",
            },
            {
              value: "长春",
              label: "长春",
            },
            {
              value: "朝阳",
              label: "朝阳",
            },
            {
              value: "赤峰",
              label: "赤峰",
            },
            {
              value: "长治",
              label: "长治",
            },
            {
              value: "重庆",
              label: "重庆",
            },
            {
              value: "长沙",
              label: "长沙",
            },
            {
              value: "成都",
              label: "成都",
            },
            {
              value: "沧源",
              label: "沧源",
            },
            {
              value: "常州",
              label: "常州",
            },
            {
              value: "池州",
              label: "池州",
            },
            {
              value: "大同",
              label: "大同",
            },
            {
              value: "达州",
              label: "达州",
            },
            {
              value: "稻城",
              label: "稻城",
            },
            {
              value: "丹东",
              label: "丹东",
            },
            {
              value: "迪庆",
              label: "迪庆",
            },
            {
              value: "大连",
              label: "大连",
            },
            {
              value: "大理",
              label: "大理",
            },
            {
              value: "敦煌",
              label: "敦煌",
            },
            {
              value: "东营",
              label: "东营",
            },
            {
              value: "大庆",
              label: "大庆",
            },
            {
              value: "德令哈",
              label: "德令哈",
            },
            {
              value: "鄂尔多斯",
              label: "鄂尔多斯",
            },
            {
              value: "额济纳旗",
              label: "额济纳旗",
            },
            {
              value: "恩施",
              label: "恩施",
            },
            {
              value: "二连浩特",
              label: "二连浩特",
            },
            {
              value: "福州",
              label: "福州",
            },
            {
              value: "阜阳",
              label: "阜阳",
            },
            {
              value: "抚远",
              label: "抚远",
            },
            {
              value: "富蕴",
              label: "富蕴",
            },
            {
              value: "佛山",
              label: "佛山",
            },
          ],
        },
        {
          value: "G-J",
          label: "G-J",
          children: [
            {
              value: "广州",
              label: "广州",
            },
            {
              value: "果洛",
              label: "果洛",
            },
            {
              value: "格尔木",
              label: "格尔木",
            },
            {
              value: "广元",
              label: "广元",
            },
            {
              value: "固原",
              label: "固原",
            },
            {
              value: "中国高雄",
              label: "中国高雄",
            },
            {
              value: "赣州",
              label: "赣州",
            },
            {
              value: "贵阳",
              label: "贵阳",
            },
            {
              value: "桂林",
              label: "桂林",
            },
            {
              value: "红原",
              label: "红原",
            },
            {
              value: "海口",
              label: "海口",
            },
            {
              value: "河池",
              label: "河池",
            },
            {
              value: "邯郸",
              label: "邯郸",
            },
            {
              value: "黑河",
              label: "黑河",
            },
            {
              value: "呼和浩特",
              label: "呼和浩特",
            },
            {
              value: "合肥",
              label: "合肥",
            },
            {
              value: "杭州",
              label: "杭州",
            },
            {
              value: "淮安",
              label: "淮安",
            },
            {
              value: "怀化",
              label: "怀化",
            },
            {
              value: "海拉尔",
              label: "海拉尔",
            },
            {
              value: "哈密",
              label: "哈密",
            },
            {
              value: "衡阳",
              label: "衡阳",
            },
            {
              value: "哈尔滨",
              label: "哈尔滨",
            },
            {
              value: "和田",
              label: "和田",
            },
            {
              value: "花土沟",
              label: "花土沟",
            },
            {
              value: "中国花莲",
              label: "中国花莲",
            },
            {
              value: "霍林郭勒",
              label: "霍林郭勒",
            },
            {
              value: "惠州",
              label: "惠州",
            },
            {
              value: "汉中",
              label: "汉中",
            },
            {
              value: "黄山",
              label: "黄山",
            },
            {
              value: "呼伦贝尔",
              label: "呼伦贝尔",
            },
            {
              value: "菏泽",
              label: "菏泽",
            },
            {
              value: "中国嘉义",
              label: "中国嘉义",
            },

            {
              value: "景德镇",
              label: "景德镇",
            },
            {
              value: "加格达奇",
              label: "加格达奇",
            },
            {
              value: "嘉峪关",
              label: "嘉峪关",
            },
            {
              value: "井冈山",
              label: "井冈山",
            },
            {
              value: "金昌",
              label: "金昌",
            },
            {
              value: "九江",
              label: "九江",
            },
            {
              value: "荆门",
              label: "荆门",
            },
            {
              value: "佳木斯",
              label: "佳木斯",
            },
            {
              value: "济宁",
              label: "济宁",
            },
            {
              value: "锦州",
              label: "锦州",
            },
            {
              value: "建三江",
              label: "建三江",
            },
            {
              value: "鸡西",
              label: "鸡西",
            },
            {
              value: "九寨沟",
              label: "九寨沟",
            },
            {
              value: "中国金门",
              label: "中国金门",
            },
            {
              value: "揭阳",
              label: "揭阳",
            },
            {
              value: "济南",
              label: "济南",
            },
            {
              value: "荆州",
              label: "荆州",
            },
          ],
        },
        {
          value: "K-N",
          label: "K-N",
          children: [
            {
              value: "库车",
              label: "库车",
            },
            {
              value: "康定",
              label: "康定",
            },
            {
              value: "喀什",
              label: "喀什",
            },
            {
              value: "凯里",
              label: "凯里",
            },
            {
              value: "昆明",
              label: "昆明",
            },
            {
              value: "库尔勒",
              label: "库尔勒",
            },
            {
              value: "克拉玛依",
              label: "克拉玛依",
            },
            {
              value: "黎平",
              label: "黎平",
            },
            {
              value: "澜沧",
              label: "澜沧",
            },
            {
              value: "龙岩",
              label: "龙岩",
            },
            {
              value: "临汾",
              label: "临汾",
            },
            {
              value: "兰州",
              label: "兰州",
            },
            {
              value: "丽江",
              label: "丽江",
            },
            {
              value: "荔波",
              label: "荔波",
            },
            {
              value: "吕梁",
              label: "吕梁",
            },
            {
              value: "临沧",
              label: "临沧",
            },
            {
              value: "陇南",
              label: "陇南",
            },
            {
              value: "六盘水",
              label: "六盘水",
            },
            {
              value: "拉萨",
              label: "拉萨",
            },
            {
              value: "洛阳",
              label: "洛阳",
            },
            {
              value: "连云港",
              label: "连云港",
            },
            {
              value: "临沂",
              label: "临沂",
            },
            {
              value: "柳州",
              label: "柳州",
            },
            {
              value: "泸州",
              label: "泸州",
            },
            {
              value: "林芝",
              label: "林芝",
            },
            {
              value: "芒市",
              label: "芒市",
            },
            {
              value: "牡丹江",
              label: "牡丹江",
            },
            {
              value: "中国马祖",
              label: "中国马祖",
            },
            {
              value: "绵阳",
              label: "绵阳",
            },
            {
              value: "梅州",
              label: "梅州",
            },
            {
              value: "中国马公",
              label: "中国马公",
            },
            {
              value: "满洲里",
              label: "满洲里",
            },
            {
              value: "漠河",
              label: "漠河",
            },
            {
              value: "南昌",
              label: "南昌",
            },
            {
              value: "中国南竿",
              label: "中国南竿",
            },
            {
              value: "南充",
              label: "南充",
            },
            {
              value: "宁波",
              label: "宁波",
            },
            {
              value: "南京",
              label: "南京",
            },
            {
              value: "宁蒗",
              label: "宁蒗",
            },
            {
              value: "南宁",
              label: "南宁",
            },
            {
              value: "南阳",
              label: "南阳",
            },
            {
              value: "南通",
              label: "南通",
            },
          ],
        },
        {
          value: "P-W",
          label: "P-W",
          children: [
            {
              value: "攀枝花",
              label: "攀枝花",
            },
            {
              value: "普洱",
              label: "普洱",
            },
            {
              value: "琼海",
              label: "琼海",
            },
            {
              value: "秦皇岛",
              label: "秦皇岛",
            },
            {
              value: "祁连",
              label: "祁连",
            },
            {
              value: "且末",
              label: "且末",
            },
            {
              value: "庆阳",
              label: "庆阳",
            },
            {
              value: "黔江",
              label: "黔江",
            },
            {
              value: "泉州",
              label: "泉州",
            },
            {
              value: "衢州",
              label: "衢州",
            },
            {
              value: "齐齐哈尔",
              label: "齐齐哈尔",
            },
            {
              value: "青岛",
              label: "青岛",
            },
            {
              value: "日照",
              label: "日照",
            },
            {
              value: "日喀则",
              label: "日喀则",
            },
            {
              value: "若羌",
              label: "若羌",
            },
            {
              value: "神农架",
              label: "神农架",
            },
            {
              value: "莎车",
              label: "莎车",
            },
            {
              value: "上海",
              label: "上海",
            },
            {
              value: "沈阳",
              label: "沈阳",
            },
            {
              value: "石河子",
              label: "石河子",
            },
            {
              value: "石家庄",
              label: "石家庄",
            },
            {
              value: "上饶",
              label: "上饶",
            },
            {
              value: "三明",
              label: "三明",
            },
            {
              value: "三亚",
              label: "三亚",
            },
            {
              value: "深圳",
              label: "深圳",
            },
            {
              value: "十堰",
              label: "十堰",
            },
            {
              value: "邵阳",
              label: "邵阳",
            },
            {
              value: "松原",
              label: "松原",
            },
            {
              value: "台州",
              label: "台州",
            },
            {
              value: "中国台中",
              label: "中国台中",
            },
            {
              value: "塔城",
              label: "塔城",
            },
            {
              value: "腾冲",
              label: "腾冲",
            },
            {
              value: "铜仁",
              label: "铜仁",
            },
            {
              value: "通辽",
              label: "通辽",
            },
            {
              value: "天水",
              label: "天水",
            },
            {
              value: "吐鲁番",
              label: "吐鲁番",
            },
            {
              value: "通化",
              label: "通化",
            },
            {
              value: "中国台南",
              label: "中国台南",
            },
            {
              value: "中国台北",
              label: "中国台北",
            },
            {
              value: "天津",
              label: "天津",
            },
            {
              value: "中国台东",
              label: "中国台东",
            },
            {
              value: "唐山",
              label: "唐山",
            },
            {
              value: "太原",
              label: "太原",
            },
            {
              value: "五大连池",
              label: "五大连池",
            },
            {
              value: "乌兰浩特",
              label: "乌兰浩特",
            },
            {
              value: "乌兰察布",
              label: "乌兰察布",
            },
            {
              value: "乌鲁木齐",
              label: "乌鲁木齐",
            },
            {
              value: "潍坊",
              label: "潍坊",
            },
            {
              value: "威海",
              label: "威海",
            },
            {
              value: "文山",
              label: "文山",
            },
            {
              value: "温州",
              label: "温州",
            },
            {
              value: "乌海",
              label: "乌海",
            },
            {
              value: "武汉",
              label: "武汉",
            },
            {
              value: "武夷山",
              label: "武夷山",
            },
            {
              value: "无锡",
              label: "无锡",
            },
            {
              value: "梧州",
              label: "梧州",
            },
            {
              value: "万州",
              label: "万州",
            },
            {
              value: "乌拉特中",
              label: "乌拉特中",
            },
            {
              value: "巫山",
              label: "巫山",
            },
            {
              value: "武隆",
              label: "武隆",
            },
            {
              value: "芜湖",
              label: "芜湖",
            },
          ],
        },
        {
          value: "X-Z",
          label: "X-Z",
          children: [
            {
              value: "兴义",
              label: "兴义",
            },
            {
              value: "夏河",
              label: "夏河",
            },
            {
              value: "中国香港",
              label: "中国香港",
            },
            {
              value: "西双版纳",
              label: "西双版纳",
            },
            {
              value: "新源",
              label: "新源",
            },
            {
              value: "西安",
              label: "西安",
            },
            {
              value: "忻州",
              label: "忻州",
            },
            {
              value: "信阳",
              label: "信阳",
            },
            {
              value: "襄阳",
              label: "襄阳",
            },
            {
              value: "西昌",
              label: "西昌",
            },
            {
              value: "锡林浩特",
              label: "锡林浩特",
            },
            {
              value: "厦门",
              label: "厦门",
            },
            {
              value: "西宁",
              label: "西宁",
            },
            {
              value: "徐州",
              label: "徐州",
            },
            {
              value: "延安",
              label: "延安",
            },
            {
              value: "银川",
              label: "银川",
            },
            {
              value: "宜春",
              label: "宜春",
            },
            {
              value: "永州",
              label: "永州",
            },
            {
              value: "榆林",
              label: "榆林",
            },
            {
              value: "宜宾",
              label: "宜宾",
            },
            {
              value: "郑州",
              label: "郑州",
            },
            {
              value: "张家界",
              label: "张家界",
            },
            {
              value: "舟山",
              label: "舟山",
            },
            {
              value: "扎兰屯",
              label: "扎兰屯",
            },
            {
              value: "张掖",
              label: "张掖",
            },
            {
              value: "昭通",
              label: "昭通",
            },
            {
              value: "湛江",
              label: "湛江",
            },
            {
              value: "中卫",
              label: "中卫",
            },
            {
              value: "张家口",
              label: "张家口",
            },
            {
              value: "珠海",
              label: "珠海",
            },
            {
              value: "遵义",
              label: "遵义",
            },
          ],
        },
      ],
    },
    {
      value: "国际",
      label: "国际",
      children: [
        {
          value: "热门",
          label: "热门",
          children: [
            {
              value: "首尔",
              label: "首尔",
            },
            {
              value: "东京",
              label: "东京",
            },
            {
              value: "曼谷",
              label: "曼谷",
            },
            {
              value: "伦敦(英国)",
              label: "伦敦(英国)",
            },
            {
              value: "巴黎",
              label: "巴黎",
            },
            {
              value: "纽约",
              label: "纽约",
            },
            {
              value: "洛杉矶",
              label: "洛杉矶",
            },
          ],
        },
        {
          value: "亚洲",
          label: "亚洲",
          children: [
            {
              value: "首尔",
              label: "首尔",
            },
            {
              value: "东京",
              label: "东京",
            },
            {
              value: "曼谷",
              label: "曼谷",
            },
            {
              value: "新加坡",
              label: "新加坡",
            },
            {
              value: "迪拜",
              label: "迪拜",
            },
            {
              value: "名古屋",
              label: "名古屋",
            },
            {
              value: "孟买",
              label: "孟买",
            },
          ],
        },

        {
          value: "欧洲",
          label: "欧洲",
          children: [
            {
              value: "罗马",
              label: "罗马",
            },
            {
              value: "维也纳",
              label: "维也纳",
            },
            {
              value: "慕尼黑",
              label: "慕尼黑",
            },
            {
              value: "伦敦(英国)",
              label: "伦敦(英国)",
            },
            {
              value: "巴黎",
              label: "巴黎",
            },
            {
              value: "柏林",
              label: "柏林",
            },
            {
              value: "苏黎世",
              label: "苏黎世",
            },
          ],
        },
        {
          value: "美洲",
          label: "美洲",
          children: [
            {
              value: "多伦多",
              label: "多伦多",
            },
            {
              value: "西雅图",
              label: "西雅图",
            },
            {
              value: "亚特兰大",
              label: "亚特兰大",
            },
            {
              value: "休斯敦",
              label: "休斯敦",
            },
            {
              value: "迈阿密",
              label: "迈阿密",
            },
            {
              value: "纽约",
              label: "纽约",
            },
            {
              value: "洛杉矶",
              label: "洛杉矶",
            },
          ],
        },
        {
          value: "非洲",
          label: "非洲",
          children: [
            {
              value: "开罗",
              label: "开罗",
            },
            {
              value: "开普敦",
              label: "开普敦",
            },
            {
              value: "毛里求斯",
              label: "毛里求斯",
            },
            {
              value: "突尼斯",
              label: "突尼斯",
            },
            {
              value: "阿尔及尔",
              label: "阿尔及尔",
            },
            {
              value: "内罗毕",
              label: "内罗毕",
            },
            {
              value: "喀土穆",
              label: "喀土穆",
            },
          ],
        },
        {
          value: "大洋洲",
          label: "大洋洲",
          children: [
            {
              value: "悉尼(澳大利亚)",
              label: "悉尼(澳大利亚)",
            },
            {
              value: "墨尔本(澳大利亚)",
              label: "墨尔本(澳大利亚)",
            },
            {
              value: "惠灵顿",
              label: "惠灵顿",
            },
            {
              value: "黄金海岸",
              label: "黄金海岸",
            },
            {
              value: "奥克兰(新西兰)",
              label: "奥克兰(新西兰)",
            },
            {
              value: "达尔文",
              label: "达尔文",
            },
            {
              value: "帕皮堤",
              label: "帕皮堤",
            },
          ],
        },
      ],
    },
  ];

  if (props.chinaOnly) {
    options = options.slice(0, 1);
  }

  const onChange = (value) => {
    if (props.setFunc && value) props.setFunc(value);
  };
  // 渲染结果函数
  const display = (label) => {
    return <div>{label[label.length - 1]}</div>;
  };
  return (
    <div>
      <Cascader
        className={props.className ? props.className : null}
        options={options}
        onChange={onChange}
        placeholder={props.title}
        bordered={true}
        displayRender={display}
        value={props.val}
        onClear={() => {
          props.setFunc([]);
        }}
      />
    </div>
  );
}
