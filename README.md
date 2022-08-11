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
                width:600, // 组件整体宽度  选填
                url:'https://xxxxxx.xxx', //提交URL 必填
                billingCountry:'UY', // 国家 必填
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
