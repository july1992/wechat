import Taro, {Component} from "@tarojs/taro";
import {View, Text,Image} from "@tarojs/components";
import {AtTabs, AtTabsPane} from 'taro-ui'
import './food.less'
import Cate from './cata'
import Foodlist from './foodlist'



class Food extends Component {

  constructor() {
    super(...arguments)
    this.state = {
      current: 0,
      selectCate:null,
      tabList: [{title: '点菜'}, {title: '评价'}, {title: '商家'}],
      foodlist: [],
      currList: []
    }
  }

  changeTab(value) {

    console.log("---------:", value)
    this.setState({current: value})
  }

  changeCate(selectCate) {
    console.log("---------选中了：" + selectCate.id + "--:" + selectCate.name)
    this.setState({selectCate: selectCate})
    if (this.state.foodlist.some(value => value.pid === selectCate.id)) {
      // 不用加载数据
      console.log("---------不用加载数据：")
      this.setState(
        {currList: this.state.foodlist.filter(value => value.pid === selectCate.id)}
      )
    }else
    {
      // 要加载数据
      console.log("---------要加载数据：")
      this.setState({
        foodlist: this.state.foodlist.concat(this.getData(selectCate))
      }, () => {
        this.setState(
          {currList: this.state.foodlist.filter(value => value.pid === selectCate.id)}
        )
      })
    }
  }

  getData(selectCate) {

    let imgUrl=`../../assets/img/backgrund.jpeg`

    return Array.from(Array(Math.round(Math.random() * 20)),(v, k) => (
      {
        pid: selectCate.id,
        id: selectCate.id + '_' + k,
        price:Math.round(Math.random()*20),
        sole:Math.round(Math.random()*50),
        img: imgUrl,
        title: '分类' + selectCate.id + '菜品' + (k + 1)
      }
    ))

  }

  render() {
    // const tabList = [{ title: '标签页1' }, { title: '标签页2' }, { title: '标签页3' }]
    let {current, tabList, currList,selectCate} = this.state
    return (

      <View>

        <AtTabs tabDirection='horizontal' current={current} tabList={tabList} onClick={this.changeTab.bind(this)}>
          <AtTabsPane current={current} index={0}>
            <View className='food-body'>
              <Cate onChangeCate={this.changeCate.bind(this)}/>
              <Foodlist selectCate={selectCate} currList={currList}/>

            </View>


          </AtTabsPane>
          <AtTabsPane current={current} index={1}>

            <Cate/>
          </AtTabsPane>
          <AtTabsPane current={current} index={2}>

            <Text>页面3</Text>

          </AtTabsPane>

        </AtTabs>


      </View>

    )
  }
}

export default Food;
