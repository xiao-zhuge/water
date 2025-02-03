import{S as a}from"./StudyMenu-4861f7a2.js";import{u as i}from"./useMarked-b2d6c03a.js";import{_ as p,r as u,a as l,p as d,e as m,b as k,c as y,d as r,f as h}from"./index-6446050f.js";import"./_commonjsHelpers-042e6b4d.js";const g=`
## Cookie

### 一. 组成
- key: 键
- value: 值
- domain: 域，表示这个cookie属于哪个网站，比如baidu.com表示这个cookie属于baidu.com这个网站
- path: 路径，表示这个cookie属于这个网站的哪个路径，比如/name, 那么该路径及其子路径都会携带该cookie
- secure: 是否使用安全传输，如果为true，那么只有https请求会携带该cookie
- expire: 过期时间 GMT格式，与max-age只能设置一个
- max-age: 过期时间，相对时间，比如设置1000会认为1000s后过期，并转成GMT时间存在expire中
- httponly: 是否只用于http请求，如果为true，js将无法获取该cookie

### 二. 请求携带条件
1. 没有cookie
2. cookie中的域和请求是匹配的， **cookie不在乎端口**
> baidu.com可匹配baidu.com、www.baidu.com、blogs.baidu.com
3. path和请求的paht可匹配
> /name可匹配 /name、/name/1
4. 验证cookie的安全传输

### 三. 设置cookie
#### 1. 服务端
\`\`\`JS
// set-cookie: 键=值; path=?; domain=?; expire=?; max-age=?; secure; httponly
res.setHeader('set-cookie', 'token=1234; path=/; max-age=1000; httponly=true')
\`\`\`

#### 2. 客户端
\`\`\`JS
document.cookie = "键=值; path=?; domain=?; expire=?; max-age=?; secure";
\`\`\`

### 四. 删除cookie
设置**max-age=-1**，那么会认为马上过期，浏览器会在下次请求时候自动删除该cookie

### 五. 多端应用
因为浏览器会自动携带cookie，但是其他设备不会，所以其他设备可以在请求头中加上身份信息
\`\`\`JS
res.header('authorization', 6)
\`\`\`

> cookie中间键: cookie-parser
`,f=`
## 使用node的crypto模块实现对称加密

\`\`\`js
const crypto = require('crypto');
// console.log(crypto.getCiphers()); // 获取所有支持的加密算法

// 128为私钥
const secret = Buffer.from('x8wggaph8y5aikoo');

module.exports = function () {
    // 准备一个随机向量：iv，方式私钥泄漏
    const iv = Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8);

    return {
        // 加密
        encrypt(str) {
            const cry = crypto.createCipheriv('aes-128-cbc', secret, iv); // 使用 aes-128-cbc 算法加密
            let result = cry.update(str, 'utf-8', 'hex'); // 输入的编码格式是utf-8, 输出的是 hex
            result += cry.final('hex');
            return result;
        },
        // 解密
        decrypt(str) {
            const decry = crypto.createDecipheriv('aes-128-cbc', secret, iv);
            let result = decry.update(str, 'hex', 'utf-8');
            result += decry.final('utf-8');
            return result;
        },
    };
};
\`\`\`
`,_=""+new URL("cors-06baaf85.png",import.meta.url).href,x=`
## 跨域

## jsonp

#### 1. 实现方式

\`\`\`js
///////// 服务端
const router = express.Router();

router.get('/', async(req, res) => {
    // 获取完数据后的特殊处理
    // 将数据转换成json格式，并放到一个函数中
    const json = JSON.stringify(result);
    const script = \`callback(\${json})\`;
    res.header('content-type', 'application/javascript').send(script)
})

///////// 客户端

// 将请求作为script元素的src属性，添加到document中

function jsonp(url) {
    const script = document.createElement('script');
    script.src = url;
    document.body.appendChild(script);
    script.onload = function() {
        script.remove();
    }
}

function callback(data) {
    // 因为服务端将结果包装在了callback，所以当浏览器加载script后自动运行返回的代码，也就是运行callback函数
    console.log(data)
}

jsonp(http://172.168.0.1:5001/api/userlist)
\`\`\`

#### 2. 缺点
- 只能使用get请求，因为script标签就是get请求
- 会改变服务器返回格式

## CORS

### 一. 简单请求

#### 简单请求判断
1. 请求方式是 get post header
2. 请求头仅包含安全字段
> 常见安全字段: Accept、Accept-Language、Content-Language、Content-Type、DPR、Downlink、Save-Data、Viewport-Width、Width
3. 请求头如果包含content-type，只能是下面几个值之一
> text/plain  multipary/form-data  application/x-www-form-unlencoded

#### 简单请求交互
1. 请求头中会自动添加Origin字段，来表示我的源地址路径
2. 服务器在响应头中加入 **Access-Control-Allow-Origin**

### 二. 需要预检的请求
1. 浏览器发送预检请求，询问服务器是否允许
    - 请求方法 options
    - 无请求体
    - 请求头中包含字段
        - Origin: 请求源
        - Access-Control-Request—Method: 后续真实请求的请求方法
        - Access-Control-Request-Headers: 真实请求会改动的请求头
        
2. 服务器允许
    - Access-Control-Request-Origin: 允许的源
    - Access-Control-Request-Methods: 允许的请求方法
    - Access-Control-Request-Headers: 允许的请求头
    - [Access-Control-Max-Age: 1000]: 1000s之内不用再访问是否允许

3. 浏览器发送真实请求

![](${_})

#### 三. 带身份信息(cookie)的请求

在请求头中添加：Access-Control-Allow-Credentials: true

> 默认情况下，js只能获取部分基础响应头，如果要访问其他响应头内容，需要服务器添加白名单: **Access-Control-Expose-Headers: a,b,c**

> 中间键：cors
`;const C={cookie:g,symmetricEncryption:f,crossDomain:x},S={components:{StudyMenu:a},setup(){const o=u("cookie"),e=l([{key:"cookie",title:"Cookie"},{key:"symmetricEncryption",title:"对称加密"},{key:"crossDomain",title:"跨域"}]),c=d(()=>i(C[o.value]));return{menu:e,curSelected:o,mdContent:c}}},b={class:"page study-page"},v={class:"content"},A=["innerHTML"];function w(o,e,c,t,M,R){const s=m("StudyMenu");return k(),y("div",b,[r("div",v,[r("div",{class:"markdown-body",innerHTML:t.mdContent},null,8,A)]),h(s,{menu:t.menu,curSelected:t.curSelected,"onUpdate:curSelected":e[0]||(e[0]=n=>t.curSelected=n)},null,8,["menu","curSelected"])])}const H=p(S,[["render",w],["__scopeId","data-v-cab24208"]]);export{H as default};
