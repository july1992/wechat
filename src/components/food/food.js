import Taro,{Component} from "@tarojs/taro";
import {View,Text} from "@tarojs/components";
import { AtTabs, AtTabsPane } from 'taro-ui'
import './food.less'
import Cate from './cata'


class Food extends Component{

  constructor(){
    super(...arguments)
    this.state={
      current:0,
      tabList : [{ title: '点菜' }, { title: '评价' }, { title: '商家' }]
    }
  }

  handleClick(value){

    console.log("---------:",value)
    this.setState({current:value})
  }
  render() {
    // const tabList = [{ title: '标签页1' }, { title: '标签页2' }, { title: '标签页3' }]
    let {current,tabList}=this.state
    return (

        <View>
          你说啥
          <AtTabs tabDirection='horizontal' current={current} tabList={tabList} onClick={this.handleClick.bind(this)}>
            <AtTabsPane  current={current} index={0} >

              <Cate/>

            </AtTabsPane>
            <AtTabsPane  current={current} index={1} >

              <Cate/>
            </AtTabsPane>
            <AtTabsPane current={current} index={2} >

              <Text>页面3</Text>

            </AtTabsPane>

          </AtTabs>



        </View>

    )
  }
}

export default Food;
