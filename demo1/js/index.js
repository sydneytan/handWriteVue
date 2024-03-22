let vm = new Vue({
    // 配置对象
    el:'.container',
    data:{
        // 界面数据
        title : '淘淘手机',
        goods : goods,
    },
    computed:{
        count: function(){
            let sum = this.goods.reduce((val,cur)=>{return val+cur.choose},0);
            return sum;
        }
    }
});


/**
 *  数据响应式： 
 *  1. 数据的变化会引发界面的自动更新 
 *  2. demo2
 */