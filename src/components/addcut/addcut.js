import Taro,{Component} from "@tarojs/taro";
import {View,Image,Text} from "@tarojs/components";
import {AtTabs,AtTabsPane} from 'taro-ui'
import './addcut.less'

class Addcut extends Component{

  constructor(){
    super(...arguments)
    this.state={

    }
  }

  render() {
    return (

        <View className='addcut'>

          <Image className='operate_img' src={require(`../../assets/img/delete.png`)}/>
          <Text className='food_num'>0</Text>
          <Image className='operate_img' src={require(`../../assets/img/add.png`)}/>
        </View>

    )
  }
}

export default Addcut;
