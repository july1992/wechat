import Taro,{Component} from "@tarojs/taro";
import {View} from "@tarojs/components";
import './top.less'
class top extends Component{


  render() {
    return (

        <View className="top">


          <View className="left">

            <Image className="img" src={require("../assets/img/left.png")}/>
          </View>

          <View className="right">
            <Image className="img" src={require("../assets/img/search.png")}/>
            <Image className="img" src={require("../assets/img/collect.png")}/>
            <Image className="img" src={require("../assets/img/spell.png")}/>
            <Image className="img" src={require("../assets/img/lue.png")}/>

          </View>

        </View>

    )
  }
}

export default top;
