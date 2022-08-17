# yoopayjs
#安装依赖
```
npm install element-ui 
npm install  less
npm install axios
```
#安装yoopayjs 
```
npm install yoopayjs
```
#更新 yoopayjs
```
npm update yoopayjs
```
#使用yoopayjs
```
//main.js
    // 引入组件结构
    import yoopayjs from "yoopayjs";
    // 引入组件样式
    import 'yoopayjs/yoopay-js.css'
    // 注册组件到全局
    Vue.use(yoopayjs);

//组建中使用
    <yoopay-js ref="yoopayjs" @subCallback='subCallback'></yoopay-js>
    //methods 初始化 yoopayjs
    methods:{
        initYoopayJS(){
            this.$refs.yoopayjs.inintYoopayJS({
                width:100, // 组件整体宽度百分比宽度  选填
                paddingTop:20, // 组件内边距  选填
                paddingBottom:20, // 组件内边距  选填
                paddingRight:20, // 组件内边距  选填
                paddingLeft:20, // 组件内边距  选填
                url:'https://xxxxxx.xxx', //提交URL 必填
                billingCountry:'US', // 国家或地区代码(C2代表中国 US代表美国) 必填
                billingAddr:'xxx 街道', //街道 必填
                billingCity:'xxx 市', //城市 必填
                billingState:'xxx 州', // 州 必填
                billingZip:'033300', //邮编 必填
                billingApartment:'xxx号楼 xx单元 xxxx' //具体房间号  必填
            })
        },
        //提交之后 处理函数
        subCallback(data){
            console.log(data)
        }
    }

    mounted(){
        this.initYoopayJS()
    }
```
#提交参数说明
```
    cardType:卡类型 四种 PayPal Visa MasterCard Amex
    cardNumber:卡号
    cardName:姓名
    cardExpdateMonth:卡有效期 月份
    cardExpdateYear:卡有效期 年份
    cardCvv2:安全码
    billingCountry: 卡所属国家
    billingAddr: 街道
    billingApartment: 具体房间号
    billingCity: 城市
    billingState: 州
    billingZip:邮编
```
#提交方式 
```
infoForm(){
  let obj = {
    cardType:this.cardType,
    cardNumber:this.cardInfo.cardNumber,
    cardName:this.cardInfo.cardName,
    cardExpdateMonth:this.cardInfo.cardExpdateMonth,
    cardExpdateYear:this.cardInfo.cardExpdateYear,
    cardCvv2:this.cardInfo.cardCvv2,
    billingCountry:this.cardInfo.billingCountry,
    billingAddr:this.cardInfo.billingAddr, // 街道
    billingApartment:this.cardInfo.billingApartment, // 具体房间号
    billingCity:this.cardInfo.billingCity,// 城市
    billingState:this.cardInfo.billingState, // 州
    billingZip:this.cardInfo.billingZip // 邮编
  }
  return obj
},
submitForm(formName) {
  if(this.cardType === 'PayPal'){
    this.$http.post(this.url,{cardType:this.cardType}).then(res => {
      console.log(res)
    })
  }else{
    this.$refs[formName].validate((valid) => {
      if(valid){
        this.$http.post(this.url,this.infoForm()).then(res => {
          this.$emit('subCallback',res)
        })
      } else {
        console.log('error submit!!');
        return false;
      }
    });
  }
},
```