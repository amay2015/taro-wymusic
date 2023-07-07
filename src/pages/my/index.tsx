import Taro from "@tarojs/taro";
import { View, Text, Image, Swiper, SwiperItem } from "@tarojs/components";
import { Component } from "react";
import { AtTabBar, AtSearchBar, AtIcon, AtAvatar } from "taro-ui";
import "./index.scss";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 1,
      searchValue: ''
    }
  }

  goSearch(value) {
    this.setState({
      searchValue: value
    })
  }

  onActionClick () {
    console.log('开始搜索')
  }

  switchTab(value) {
    if (value !== 0) return;
    Taro.reLaunch({
      url: "/pages/index/index"
    });
  }

  USER_COUNT = [
    {name: '动态', value: 2},
    {name: '关注', value: 22},
    {name: '粉丝', value: 10000},
  ]

  render() {
    return (
      <View className='my_container'>
        <AtSearchBar actionName='搜一下' value={this.state.searchValue} onChange={this.goSearch.bind(this)} onActionClick={this.onActionClick.bind(this)} />
        <View className='header'>
          <View className='header__left'>
            {/* <Image src={''} className='header__img' /> */}
            <AtAvatar circle image='' text='头像' size='large'></AtAvatar>
            <View className='header__info'>
              <View className='header__info__name'>may</View>
              <View className='header__info__level'><Text>LV.9</Text></View>
            </View>
          </View>
          <AtIcon prefixClass='fa' value='sign-out' size='30' color='#d43c33' className='exit_icon'></AtIcon>
        </View>
        <View className='user_count'>
          {this.USER_COUNT.map((item) => <View className='user_count__sub'>
            <View className='user_count__sub--num'>{item.value}</View>
            <View>{item.name}</View>
          </View>)}
        </View>

        <AtTabBar
          fixed
          selectedColor="#d43c33"
          tabList={[
            { title: "发现", iconPrefixClass: 'fa', iconType: "feed" },
            { title: "我的", iconPrefixClass: 'fa', iconType: "music" }
          ]}
          onClick={this.switchTab.bind(this)}
          current={this.state.current}
        />
      </View>
    )
  }
}

export default Index;