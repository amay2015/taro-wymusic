import { View, Text, Image } from "@tarojs/components";
import Taro, {useLoad} from '@tarojs/taro'
import { AtTabBar, AtIcon } from "taro-ui";
import { useState } from "react";
import "./index.scss";

export default function Index() {
  const [current, setCurrent] = useState(0)
  const handleClick = (value) => {
    // setCurrent(value)
    if (value !== 1) return;
    Taro.reLaunch({
      url: "/pages/my/index"
    });
  }
  return (
    <View>
      <AtTabBar
        fixed
        tabList={[
          { title: "发现", iconPrefixClass: "fa", iconType: "feed" },
          { title: "我的", iconPrefixClass: "fa", iconType: "music" }
        ]}
        onClick={handleClick}
        current={current}
        selectedColor={'#d43c33'}
      />
    </View>
  );
}
