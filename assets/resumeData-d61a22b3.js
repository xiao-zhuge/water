const e=[{name:"成川科技(苏州)有限公司",post:"前端组长",timeRange:"2023.03-至今",jobs:"前端负责人，负责公司所有前端相关工作，开发多套系统包括天车调度系统，封装地图组件库，地图编辑器。",contributes:["整理前端需求，设计前端页面","使用node建立tcp socket服务，并整理16进制数据与天车通讯","开发通用地图组件库，开发套索选择功能算法"],opacity:0},{name:"北京极智嘉机器人有限公司",post:"前端开发工程师",timeRange:"2020.06-2023.02",jobs:"负责公司分拣产品线前端所有工作，把3D展示引入系统，将3D技术引入公司(导致公司所有其他系统都要引进3D，所有其他前端同事都开始学习3D)，工作之余创新开发3D微展厅、3D数字孪生等相关3D产品。",contributes:["独立负责公司分拣产品线前端所有工作","为公司引入3D技术，创新3D地图","创新3D微展厅","创新分拣3D数字孪生系统","获得优秀个人奖","参加公司黑客比赛(第四名)"],opacity:0},{name:"苏州柳凌软件开发有限公司",post:"软件开发工程师",timeRange:"2017.06-2020.06",jobs:"主要负责公司多个后台和物联网产品前端开发工作，使用vue全家桶及相关技术，完成所有前端开发工作。",contributes:["独立开发过C++和C#项目","独立负责前端所有工作"],opacity:0},{name:"合肥工业大学",post:"硕士研究生",timeRange:"2014.09-2017.06",jobs:"完成导师与柳凌合作的物联网项目。",contributes:["发表两篇核心期刊论文(EI)","申请两项发明专利","入党"],opacity:0}],t=[[{name:"天车控制器",time:"2023.09-至今",technology:"nodejs、vue全家桶、electron",description:"本系统与天车直接通讯，控制天车行为运动和传感器使能，通过nodejs的net模块与天车建立tcp连接进行通讯，并通过electron打包成桌面应用供用户使用。",difficulty:["搭建系统框架","整理天车指令(通讯采取16进制buffer数组的形式)"],opacity:0},{name:"天车调度系统地图组件库",time:"2023.06-至今",technology:"webpack、pixijs",description:"为了统一地图的展示、将地图单独抽离成一个组件库，定义了地图元素的展示方式和应有的属性，同时提供多个辅助类，比如：坐标系辅助，选择器辅助，区域辅助等。",difficulty:["搭建系统框架","使用proxy代理元素实现响应式数据","使用[Symbol.tostringtag]来定义元素唯一类型","为地图元素类添加[Symbol.iterator](), 使类可迭代(迭代children属性), 并重写数组中的map、filter等方法","套索选择功能算法实现"],opacity:0},{name:"半导体天车调度系统",time:"2023.03-至今",technology:"vue3、vite、pixijs、arco design",description:"解决半导体生产过程中需要频繁对物流调度的问题，主要解决在PC端实时监控仓库的运行情况，并对任务、设备、告警等信息进行管理和控制。",difficulty:["搭建系统框架，使用pixijs还原车间地图"],opacity:0}],[{name:"分拣3D数字孪生系统、分拣3D微展厅、分拣3D实施系统（创新）",time:"2020.12-2023.02",technology:"threejs、solidworks、blender、vue、webVR",description:"为了让用户更好的读懂地图，真正实现所见即所得，个人将分拣后台系统中的2D地图全部换成3D地图，并单独开发一整套3D数字孪生系统；为了更好的展示公司机器人和设备的运行状况和状态，结合3D技术开发出一套虚拟展厅系统，让用户更好更快的了解分拣机器人和设备，给前端销售人员提供了方便；为了很好的介绍分拣业务场景，同时解决销售无法快速给客户提出解决方案的问题，将所有分拣业务场景抽离出来，做成一套3D实施系统，让前端人员与客户交流更简单。",difficulty:["个人独立创新3D系统，建模及实现"],opacity:0},{name:"分拣手持设备app开发",time:"2021.04-2023.02",technology:"uniapp、sqlite",description:"此系统为分拣配套系统，当分拣机器人投递满包裹后，需要使用手持设备对格口上的笼车进行封包收箱操作，并在操作完成后，对格口进行释放，已方便机器人再次投递包裹。",difficulty:["在维护分拣后台的同时，使用uniapp重写系统"],opacity:0},{name:"分拣后台管理系统",time:"2020.06-2023.02",technology:"vue全家桶、echats、富文本编辑器、threejs、pixijs",description:"为智慧仓储包裹分拣提供一整套解决方案，按照不同的分配规则快速分拣包裹，主要包括包裹分拣、商品分拣、订单分拣等业务场景，系统页面主要分为供包站页面、后台数据管理页面、3D地图页面。",difficulty:["个人独立完成整个项目前端工作","引入3D地图增强真实体验并解决3D中的各种问题（模型问题、深度渲染问题等）"],opacity:0}],[{name:"员工通讯系统",time:"2019.01-2020.06",technology:"vue、react、uniapp、electron",description:"为了方便员工和客户之间沟通，开发一整套聊天软件，同时有后台管理系统，管理员可以看到所有的聊天记录并且进行封号等处理。其中app端使用uniapp跨平台框架开发，pc端使用electron+vue+react+node开发，后台管理系统使用electron+vue开发。",difficulty:["PC端为了实现同时可输入文字、表情和图片，采用了可编辑div的解决方案，使用exceCommand来插入消息或图片并实现了复制功能"],opacity:0},{name:"TMMC员工管理系统",time:"2018.11-2018.12",technology:"react全家桶、antd UI、electron",description:"TMMC配套员工管理系统，管理员工签到、任务控制、生产计划等信息",difficulty:["学习electron及打包系统"],opacity:0},{name:"通讯录微信小程序",time:"2018.07-2018.10",technology:"微信小程序、nodejs、express、mysql、pm2",description:"公司员工通讯录小程序，包括电话、座机号、邮箱和部门等信息",difficulty:["学习node开发服务器、Ubuntu服务器部署等"],opacity:0},{name:"多套物联网管理系统(TMC温控箱、TMCC、压铸机后台)",time:"2017.06-2020.06",technology:"vue2全家桶、konva、iview、less、qrcode、对接萤石云、对接高德地图API、echarts",description:"TMC温控箱配套后台系统。监控TMC数据，并对数据进行分析，并对接萤石云实现实时监控车间工作状况；TMCC实时监控车间注塑机的运行状态，并对注塑机的关键信息（电量、产量、使用率）进行统计分析展示；压铸机管理后台对压铸机用电量、运行状态、报警信息等数据进行采集并上报，实现监控压铸机实时的运行状态、用电量、生产量、报警信息、维护信息。同时对设备的使用率、完成率和用电量进行统计分析。",difficulty:["使用konva(canvas2D库)实现滑块滑动验证功能","使用konva(canvas2D库)还原车间实时布局图","独立开发"],opacity:0}]];export{e as C,t as P};
