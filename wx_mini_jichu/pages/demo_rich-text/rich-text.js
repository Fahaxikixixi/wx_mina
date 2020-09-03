// pages/demo_rich-text/rich-text.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        //1. 标签字符串   最常用的（rich-text  可存放的识别的标签div,li,a,ul,sapn等）
        //html: `<ul class="apps-nav clearfix"><li class="nav" data-spm-ab="apps-1"><a href="//market.m.taobao.com/app/fdilab/download-page/main/index.html?acm=lb-zebra-634493-8610359.1003.4.8191397&amp;scm=1003.4.lb-zebra-634493-8610359.OTHER_15917306779921_8191397"><img src="data:image/webp;base64,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" alt="手机app - 淘宝" class="app-icon"></a><div class="app-qr"><img class="J_QRCode" data-src="//img.alicdn.com/tps/i4/TB1ULEoIXXXXXbXXXXXCBLiJXXX-83-83.jpg_80x80.jpg" src="//g.alicdn.com/s.gif" alt="使用手机扫描淘宝的二维码"><p>扫一扫淘宝</p></div></li></ul>`
        //2.对象数组（不直观，不方便使用）
        html: [{
            //1.div标签 name属性来指定
            name: "div",
            //2.标签上有哪些属性
            attrs: {
                //标签上的属性 class  style
                class: "my_div",
                style: "color:red"
            },
            //3. 子节点：children 要求接收的数据类型和nodes第二种渲染方式的数据类型一致
            children: [{
                name: "p",
                attrs: {},
                //放文本
                children: [{
                    type: "text",
                    text: "hellod MINA"
                }]
            }]
        }]
    },


})