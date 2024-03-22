let user = {
    name : '张三丰',
    birth : '2000-10-1'
};

observe(user);
// 显示姓
function showFirstName(){
    document.querySelector('#firstName').textContent = `姓：${user.name[0]}`
}

// 显示名
function showLastName(){
    document.querySelector('#lastName').textContent = `名：${user.name.slice(1)}`
}

// 显示年龄
function showAge(){
    let birthday = new Date(user.birth).getTime();
    let today = new Date().getTime();
    let age = Math.ceil((today-birthday)/31536000000);
    
    document.querySelector('#age').textContent = `年龄：${age}`;
}

// window.__func = showFirstName;
// showFirstName();
// window.__func = null;

// window.__func = showLastName;
// showLastName();
// window.__func = null;

// window.__func = showAge;
// showAge();
// window.__func = null;

autoRun(showFirstName);
autoRun(showLastName);
autoRun(showAge);

user.name = '李白';

/**
 *  数据响应式： 
 *  1. 数据的变化会引发界面的自动更新 
 *  2. 本质是：当数据变化时，会自动运行相关函数 get set
 */