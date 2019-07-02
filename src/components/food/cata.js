import Taro, {Component} from "@tarojs/taro";
import {View, Text, Image} from "@tarojs/components";
import './cate.less'

class Cata extends Component {

  constructor() {
    super(...arguments);
    this.state = {
      selectCate:null,
      cate: [{
        id:0,
        name: '专场'
      },
        {
          id:1,
          name: '热销'
        },
        {
          id:2,
          name: '折扣'
        },
        {
          id:3,
          name: '主食'
        },
        {
          id:4,
          name: '热炒'
        },
        {
          id:5,
          name: '凉菜'
        },
        {
          id:6,
          name: '特色乱炖'
        }


      ]
    }
  }

  clickHander(item){

    console.log("---:"+item.id);
    if(this.state.selectCate&&this.state.selectCate.id!==item.id){

      this.setState({
        selectCate:item
      },() => {
        this.props.onChangeCate && this.props.onChangeCate(this.state.selectCate)
      })
    }else if(!this.state.selectCate){

      this.setState({
        selectCate:item
      },() => {
        this.props.onChangeCate && this.props.onChangeCate(this.state.selectCate)
      })
    }
  }

  render() {
   let {cate,selectCate}=this.state;
    return (

      <View className='cate'>


        {

          cate.map((item, index) => {

            return (<Text onClick={this.clickHander.bind(this,item)} className={'cate_name'+ ' ' +((selectCate && selectCate.id===item.id)? 'select':'')} key={item.id}>{item.name}...{index}</Text>)
          })
        }

      </View>

    )
  }
}

export default Cata;
