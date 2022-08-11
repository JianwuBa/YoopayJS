// 引入封装好的组件
import YoopayJS from "./yoopayjs";

const arr = [YoopayJS];
const install = (Vue)=> arr.forEach((item) => Vue.component(item.name, item));
export default install;