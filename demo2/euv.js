
/**
 *  
 * @param {Object} obj 
 */
function observe(obj){
    for(let key in obj){
        let internalValue = obj[key];
        let funcs = new Set();
        Object.defineProperty(obj,key,{
            get : function(){
                // 在用某个属性时，直接调用 get() 而不是去内存拿 
                // 依赖收集，记录： 是哪个函数在用我
                if(window.__func){
                    funcs.add(__func);
                }
                return internalValue;
            },
            set : function(val){
                internalValue = val;
                // 派发更新，运行：执行用我的函数
                for(let func of funcs){
                    func();
                }
            }
        })
    }
}

function autoRun (fn){
    window.__func = fn;
    fn();
    window.__func = null;
}