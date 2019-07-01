import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.less'
import head from '../../components/head'
import Food from '../../components/food/food'


export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <head></head>
        <Food></Food>

        <Text>你说啥 sss!</Text>

      </View>
    )
  }
}
