import Taro, {Component} from "@tarojs/taro";
import {View, Text} from "@tarojs/components";
import './activity.less'

class Activity extends Component {

  constructor() {
    super(...arguments)
    this.state = {

      activity: [
        {
          type: "cut",
          info:
            [{total: 48, cut: 10}, {total: 58, cut: 20}, {total: 100, cut: 30}]
        },
        {
          type: "tow",
          info:
            [{total: 100, cut: 29}, {total: 200, cut: 30}, {total: 300, cut: 40}]
        },
        {
          type: "third",
          info:
            [{total: 123, cut: 10}, {total: 234, cut: 20}, {total: 345, cut: 30}]
        }


      ]

    }
  }

  getTextByType(type){
    console.log("------")
    switch(type){
      case "cut":
        console.log("1111111")
        return "减"
        break;
      case "tow":
        console.log("222222")
        return "二"
        break;
      case "third":
        console.log("3333333")
        return "三"
        break;
      default :
        return ""
        break;
    }
  }

  getLine(array){

   return array.map((item,index)=>`满${item.total}减${item.cut}`).join(";")
  }
  render() {
    let {activity}=this.state;
    if(activity===null || activity.length===0){
      return null
    }
    let {activity:[firstItem]}=this.state;


    return (

      <View className="activity">

        <Text className="type">{this.getTextByType(firstItem.type)}</Text>
        <Text>{this.getLine(firstItem.info)}</Text>
        <Text className="length">{this.state.activity.length}个活动</Text>

      </View>

    )
  }
}

export default Activity;
