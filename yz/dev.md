## 有赞云·设计平台
[文档](https://doc.youzanyun.com/doc#/content/27027/36212) | [控制台](https://diy.youzanyun.com/) →设计平台

测试店铺的[图片空间](https://store.youzan.com/shop/v2/showcase/attachment/index#/)


# 模板预览地址
按下F12进入开发者模式后，按下快捷键CTRL+SHIFT+M打开手机模拟器查看。

* [testmodule](https://h5.youzan.com/wscshop/decorate/extension-preview?templateId=201335463&status=testing&cloudType=1)
* [创意家居/小商品美食](https://h5.youzan.com/wscshop/decorate/extension-preview?templateId=200760664&status=testing&cloudType=1)
* [日用百货/美食/红酒](https://h5.youzan.com/wscshop/decorate/extension-preview?templateId=201424399&status=testing&cloudType=1)
* [美食蛋糕/特产/红酒](https://h5.youzan.com/wscshop/decorate/extension-preview?templateId=201501592&status=testing&cloudType=1)

其他公司参考

* [https://h5.youzan.com/wscshop/decorate/extension-preview?templateId=201347872&status=testing&cloudType=1](https://h5.youzan.com/wscshop/decorate/extension-preview?templateId=201347872&status=testing&cloudType=1)
# 开发者工具介绍
## 初次使用
1. 下载对应平台开发工具 [mac](https://b.yzcdn.cn/youzanyun-dev-tool/v1.0.0/youzanyun-developer-tool-darwin-x64-1.0.0.zip) | [windows](https://b.yzcdn.cn/youzanyun-dev-tool/v1.0.0/youzanyun-developer-tool-win32-x64-1.0.0.zip) 后解压。
2. 在 [node中文网](http://nodejs.cn/) 下载安装最新版 nodejs。一路点击下一步，安装好后按住 Win+R，输入 cmd 打开终端，在终端执行 node -v 能显示对应 node 版本，说明安装成功。
3. 在 [git 官网](https://git-scm.com/) 下载对应操作系统的安装包，安装即可。安装好后在终端输入 git --version 能显示 git 版本信息即说明已安装好。
4. 在任意文件夹中打开终端，执行以下 git 命令，下载模板空间的代码。首次下载需要输入用户名和密码，用户名为注册手机号，密码为对应模板空间的 GitToken。下载好后即可见一个 cnzoom 文件夹
```
git clone https://diy.youzanyun.com/git/cnzoom.git
```
用户名和密码:咨询老杨 

1. 进入 cnzoom 文件夹，分别在 showcase-components 和 showcase-editor 两个文件夹中打开终端，分别执行 npm install 下载依赖包。下载完成后运行第一步解压的 youzanyun-developer-tool.exe 即可正常打开有赞开发者工具，如果打开后一直白屏，可使用快捷键 CTRL+R 强制刷新，或点击顶部菜单栏的 View→Reload。登录账号即可进入界面, 账号密码为对应的git账号密码。
2. 在左侧“设计平台模板”中点击导入项目，项目名为 cnzoom，目录为之前下载的 cnzoom 文件夹。导入后点击项目即可进入“微页面模板开发”，下分“自定义组件管理”，“MOCK 数据管理”，“本地模板管理”三个菜单。
## npm install报错
```
npm ERR! Unexpected end of JSON input while parsing near '..."^1.0.4","leche":"^2.'
https://blog.csdn.net/genius_yym/article/details/84645915
```
## 端口占用
打开有赞开发者工具时，偶尔会报“端口占用”的错误，产生原因是有赞开发者工具所需的 31240、31250 两个端口被其他程序占用，须手动关闭端口再打开开发者工具，手动关闭端口的方法如下：

1. 查看占用 31240、31250 两端口的进程号：
```
netstat -aon|findstr "31240"
// 终端显示一个进程号，此处以 4344 为例
netstat -aon|findstr "31250"
// 终端显示一个进程号，此处以 5499 为例
```
1. 按进程号强制关闭指定进程：
```
taskkill /pid 4344 /pid 5944 /F
// 按进程号关闭指定进程，加"/F"为强制关闭
```
# 模板空间
一个模板空间即为一个由有赞托管的 git 仓库，用于存放模板。目前仅有一个模板空间，命名为 cnzoom。使用前需确保已经安装了 git。初次使用应先拉取模板空间代码，在命令行输入 git clone 即可将远程仓库代码克隆至本地。

# 模板
模板由一个个组件组成，名称不可更改。模板开发页面有官方提供的一些组件，也可在自定义组件页面开发自定义组件，因为 C 端为移动端，有赞称之为 **h5 组件**。开发自定义组件时还需开发配套的编辑器，有赞称为**编辑器组件**，用于商家在后台给该组件配置数据，类似 AE 模板的表单。

项目（即模板空间）文件夹中存在两个子级文件夹，showcase-components 和 showcase-editor，分别对应 **h5 组件**和**编辑器组件**。

# h5 组件
组件分为官方组件和自定义组件，自定义组件的源码在文档 showcase-components 文件夹的 src 文件夹中，各个组件分文件夹存储，文件夹名即为组件名，但组建的创建和删除必须通过有赞开发者工具操作，不能直接操作文件，以免引起错误。一个自定义组件就是一个 vue 实例，组件有两个传参 componentIndex 和 componentData，componentIndex 为组件在模板中的序列，componentData 为表单数据。可引入 vant 库编写组件代码。

## 新建自定义组件
自定义组件存放于 cnzoom/showcase-components/src 中，每个以 extension-cnzoom-开头的文件夹即为一个自定义组件，每个组件都有一个 App.vue 作为入口文件，其中，测试组件（extension-cnzoom-testcomponent）中存放了供其他所有组件使用的 mixin，入口文件为_mixins.scss，因为被所有组件引用，路径、名称不能修改。mixin 文件夹中为按功能划分的 mixin，分为基础类，商品类，图标类，样式重置。

在开发者工具→微页面模板开发→自定义组件管理点击“创建自定义组件”，按照以下命名规范输入组件中文名与英文名。

**命名规范：**

组件名称命名以组件类别+所属类别的序号为准。例如，展示商品的组件均以商品+英文字母命名。如第一个两列分布的商品类组件命名为两列商品，第二个命名为两列商品 02，以此类推。为便于模板开发与后续升级，一个组件所涉及的展示形式不宜过多，例如两列商品只用于展示一行两列左右布局样式固定的效果。

## 组件命名
| 组件名称   | 英文名称   | 已有组件   | 组件介绍   | 
|:----|:----|:----|:----|
| 首焦轮播   | banner   | 首焦轮播   | 轮播组件，用于创建带背景图片的轮播，轮播图宽度在 750 像素以内，高度在 1000 像素以内，背景图片宽度为 750 像素。   | 
|    |    | 首焦轮播 B   | 轮播组件，用于创建带左右切换按钮的图片轮播。   | 
| 组件标题   | title   | 组件标题 B   | 用于展示单行标题样式，可自定义额外的内容区，描述内容不可过多。   | 
| 头条公告   | headlines   | 头条公告  headlines02   | 可自定义图标的滚动文字头条。   | 
| 店铺分类   | categarage   | 店铺分类 B  categarage2   | 纯文字类型的分类导航组件，可自定义组件样式、内容区样式以及分类链接样式。   | 
| 优惠券   | coupon   | 优惠券 B   | 上下布局式优惠券，优惠券数量过多时可横向滑动。   | 
|    |    | 优惠券 C   | 由分割线分割的优惠券，文字及分割线颜色均可自定义，当优惠券数量较多时可横向滑动。目前只用于固定金额的代金券，暂不支持随即代金券、折扣券或兑换券。   | 
| 图片混排   | pictures   | pictures01   | 1+n形式的图片混排（TODO）   | 
| 大图滑动   | picslider   | 大图滑动 B   | todo 用于创建无缝滑动的图片展示效果。可自定义额外内容区。   | 
|    |    | 大图滑动   | 简单的图片滑动展示效果。图片宽度在 750 像素以内，高度小于 1000 像素。   | 
| 榜单商品   | goodstop   |    |    | 
| 特价促销   | discount   | 特价促销   | 带渐变背景色的特价商品展示组件，商品数过多时横向滑动。   | 
| 商品滑动   | goodsslider   | 商品滑动   | 带背景图片的商品展示组件，商品数过多时横向滑动。   | 
| 商品轮播   | goodsswiper   | 商品轮播   | 带左右箭头的商品图轮播展示组件，图片尺寸固定。   | 
| 单列商品   | x1goods   |    |    | 
| 两列商品   | x2goods   | 两列商品   | 一行两列左右布局的商品展示组件。   | 
|    |    | 两列商品 B   | 带单独内容区的复杂商品展示组件，内容区可自定义背景颜色和背景图片。一行显示两列商品，且商品图文呈上下排列。   | 
| 三列商品   | x3goods   | 三列商品 B   | 带单独内容区设置的复杂商品展示组件，一行显示三列商品，且商品图文呈上下排列。   | 
| 倒计时   | countdown   | 倒计时A   |    | 

## TODO
1. categarage03 图文组合类分类（上图下文）。
2. 删除 goods01, 替换为 x2goods01，优化 x2goods01 为一行两列左右布局的通用商品展示组件。
3. goods02
4. 删除 goods04，重构为 goodstop01, 一行一个商品横向显示带 top 图标的通用榜单商品展示组件。
5. 删除 goods05，替换为 x3goods02.（按钮增加渐变背景功能 | 背景图片按钮）
## 组件开发
新建的组件不能立即在自定义组件页面显示，须重新开启本地服务。

1. 在终端打开 showcase-components 和 showcase-editor 两个文件夹。

Windows 环境下可先进入对应文件夹，然后按住 shift 点击鼠标右键，在对话框中选择“在此处打开 power shell”：

![图片](https://uploader.shimo.im/f/eSdxR5pYE9YpCKWO.PNG!thumbnail)


1. 在两个终端分别执行 npm run dev 开启本地 node 服务器。

如果只进行组件开发，则只需在 showcase-components 文件夹下开启服务。

1. 在编辑器中编写代码开发组件。

在 src 目录下，各个目录即对应了各个自定义的组件，组件使用 vue 开发，一个组件即是一个 vue 实例。组件的入口文件必须为 App.vue，vue 语法介绍见下方。在只进行组件开发时，可直接在自定义组件管理页面的对应组件点击预览，预览界面与浏览器相似，可按下 CTRL+shift+i 打开开发者工具进行开发。代码更改后按 CTRL+R 即可刷新预览。需要注意的是，在进行单独的组件预览时，表单数据为空，需要使用自定义的测试数据。

## 使用mock数据帮助开发
组件开发时，使用 mockjs 的模拟数据进行渲染，以便调节样式，使用方法：

1. 在组建的 script 标签中按需引入 testcomponent 文件夹下的 mock.js 。
```
// 引入模拟商品数据
import { getMockGoods } from "../extension-cnzoom-testcomponent/mock";
```
2. 在组件 data 中定义 mock 数据：
```
// 获取指定数量的商品数据，不指定时默认为 6 个
data() {
  return {
    MOCK: getMockGoods(10),
  };
},
```
3. 更改模板中列表渲染的数据
```
// v-for="(item, index) in componentData.goods" :key="item.id"
// 改为
v-for="(item, index) in MOCK" :key="item.id"
// v-for="(item, index) in componentData.goods || MOCK"
```
开发后及时注释掉mocjs的引用，避免打包文件体积过大。
## [Vue.js](https://cn.vuejs.org/v2/guide/)
```
待续
```
## [Vant](https://youzan.github.io/vant/#/zh-CN/intro)
vant 为有赞开源的移动端 vue 样式库，可按需引入其中的组件，方便自定义组件的开发。

```
import { Row, Col } from "vant"; // 按需引入
components: { // 注册使用
  "van-row": Row,
  "van-col": Col
},
```
# 编辑器组件
编辑器组件源码在 showcase-editor 的 src/editors 文件夹中，一个文件夹对应一个编辑器组件。编辑器组件使用 React.js 编写，一个编辑器组件即是一个 React 类，各组件继承自 editor-base，后者定义了一些基础方法，各子类须根据自身情况重写部分静态方法或属性。

## 图标
 info 属性的 icon 字段为自定义组件在装修界面的图标。新建组件默认为公告图标，可替换为其他图标地址。目前可用的地址有：

| 图标对应的基础组件名   | 地址链接   | 
|:----|:----|
| 标题文本   | [https://img.yzcdn.cn/public_files/2019/02/12/add4829af43def85a200029c3e485d77.png](https://img.yzcdn.cn/public_files/2019/02/12/add4829af43def85a200029c3e485d77.png)   | 
| 商品   | https://img.yzcdn.cn/public_files/2019/02/12/a6806f6ff8c220aa7a57eb89d253e126.png   | 
| 图片广告   | https://img.yzcdn.cn/public_files/2019/02/12/3eca94ec0230266e1b9824b8379a5e3d.png   | 
| 图文导航   | https://img.yzcdn.cn/public_files/2019/02/12/135fd18ac2eb5cf1f6d9e53637ed50fa.png   | 
| 富文本   | https://img.yzcdn.cn/public_files/2019/02/12/d93ed6186c2ade5c8ad0b0057e787c5b.png   | 
| 魔方   | https://img.yzcdn.cn/public_files/2019/02/12/6c2cc2100fa2db454aaf649c19e0ffc9.png   | 
| 辅助分割   | https://img.yzcdn.cn/public_files/2019/02/12/eae47c9a22c8d49ecbe88b4e6ca689e6.png   | 
| 商品搜索   | https://img.yzcdn.cn/public_files/2019/02/12/a41dd5cfb7dd0cf236ebc3ffefe90585.png   | 
| 店铺信息   | https://img.yzcdn.cn/public_files/2019/03/19/1fa070a2861badb70b7a780cd4fcd67f.png   | 
| 进入店铺   | https://img.yzcdn.cn/public_files/2019/03/19/6e4c6d423febf05ef147d4a3421e6b66.png   | 
| 公告   | https://img.yzcdn.cn/public_files/2019/02/12/c52262f634e5fbba92f69abb8d7134ee.png   | 
| 在线客服   | https://img.yzcdn.cn/public_files/2019/03/19/a9d0aa02480277a3f4377d12eaf68259.png   | 
| 优惠券   | https://img.yzcdn.cn/public_files/2019/02/12/6366c7167fc140370d6734b9fbfdf3fe.png   | 

getInitialValue 方法可对编辑器表单内容赋初始值。初始值在表单初次使用时生效，在点击保存后发生改动的表单值与未改动的初始值都保存为表单值，存在 componentData 对象中。

```
 static getInitialValue() {
    return {
      type: 'extension-cnzoom-testcomponent', // 组件名
      content: 'content 字段的初始值'
    };
  }
```
validate 方法为表单内容校验函数，在表单内容发生改动，即触发 onchange 与 onblur 事件后，触发该检验函数。该方法有三个传参 value, prevValue, changedProps。value 为当前表单值，prevValue 为上一次表单值，changedProps 则是所有数据发生改动的字段。
```
static validate(value, prevValue, changedProps) {
    const changeValue = changedProps[0];
    return new Promise(resolve => {
      const errors = {};
      if (value[changeValue] == '') {
        errors[changeValue] = '不能为空';
      }
      resolve(errors);
    });
  }
```
校验函数返回一个 Promise 对象，抛出一个 errors 对象，errors 的 key 为错误发生的字段，value 为错误信息。错误信息会在对应 controlGroup 组件上红色高亮显示。
```
<ControlGroup
  showError={showError} // 全局设置，是否强制显示错误
  error={validation.text_value} // 显示 text_value 字段的报错信息
>
...
</ControlGroup>
```
## 编码
具体详见测试组件的代码注释

## 预览
实时预览编辑器组件的改动须开启本地 node 服务，将该编辑器所属自定义组件添加到一个模板中，预览该模板即可预览编辑器组件的改动。需注意的是，在店铺装修界面点击保存该模板后方可通过 Ctrl+R 刷新界面，如果改动了模板内任一组件的表单数据都会导致该模板无法正常刷新。点击保存后后台会自动打印出该模板的所用组件的数据。可通过 Ctrl+shift+i 打开开发者工具查看。

## [React.js](https://zh-hans.reactjs.org/docs/getting-started.html)
```
待补充
```
## [Zent](https://youzan.github.io/zent/zh/guides/install)
Zent 为有赞开源的 PC 端 React 样式库，可按需引入其中的组件，方便编辑器组件的开发。目前主要用到表单类组件，根据实际需要取舍：

```
import { Tabs, Slider, Icon, Radio, Select, ColorPicker, Checkbox, Input } from 'zent';
const RadioGroup = Radio.Group;
const RadioButton = Radio.Button;
const Option = Select.Option;
const CheckboxGroup = Checkbox.Group;
const TabPanel = Tabs.TabPanel;
```
## [Sass](https://www.sass.hk/docs/)
编辑器组件的样式采用 sass 编写。

变量

嵌套

混合

函数

# MOCK
mock 数据（此处的mock数据指开发者工具中“mock数据管理”栏的优惠券和商品数据），即模拟数据，用于在开发或者测试时预览模板效果。


