import Taro, {Component} from "@tarojs/taro";
import {View, Text, Image} from "@tarojs/components";
import {AtTabs, AtTabsPane} from 'taro-ui'
import './foodlist.less'
import Addcut from '../addcut/addcut'

class Foodlist extends Component {

  constructor() {
    super(...arguments)
    this.state = {}
  }

  render() {
    console.log("----:" + JSON.stringify(this.props.currList))


    let {selectCate, currList} = this.props
    return (

      <View className='foodlist'>

        <Text>{selectCate ? selectCate.name : ""}</Text>
        <View className='foodlist_forlist'>

          {currList.map((value, index) => {

            return (<View key={value.id} className='foodlist_item'>

              <Image className='foodlist_item_img' src={value.img}/>

              <View className='foodlist_item_info'>
                <Text>{value.title}</Text>
                <Text>月售：{value.sole}</Text>
                <Text className='foodlist_item_price'>单价：{value.price}</Text>
                {/*<Addcut/>*/}

                <View className='addcut'>

                  <Image className='operate_img' src={require(`../../assets/img/delete.png`)}/>
                  <Text className='food_num'>0</Text>
                  <Image className='operate_img' src={require(`../../assets/img/add.png`)}/>
                </View>
              </View>


            </View>)
          })}


        </View>
      </View>

    )
  }
}

export default Foodlist;
