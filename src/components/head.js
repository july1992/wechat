import Taro,{Component} from "@tarojs/taro";
import {View,Text,Image} from "@tarojs/components";
import top from './top'
import './head.less'
import Activity from './activtiy'

class head extends Component{


  constructor(){

    super(...arguments)
    this.state={
      store:{
        title:"川湘居",
        notice:"欢迎光临，很高兴为你服务",
        tags:["味道赞","主食真好","分量足"]
      }
    }
  }
  render() {
    let {store}=this.state;
    return (


        <View className="head" >

          <top></top>
          <Image className="back" src={require("../assets/img/backgrund.jpeg")}></Image>

          <View className="store">

            <Image className="store_img" src={require("../assets/img/backgrund.jpeg")}></Image>
            <View className="store_text">

              <Text>{store.title}</Text>
              <Text>{store.notice}</Text>
              <View>
                {

                  store.tags.map((item,index) =>
                    <Text className="tags_text" key={index}>{item}</Text>
                  )

                }
              </View>
            </View>
          </View>


          <Activity/>

        </View>

    )
  }
}

export default head;
