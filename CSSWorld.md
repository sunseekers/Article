前段时间张鑫旭老师的《css 世界》出版，之前看过他写的博客，写的挺好的，一直就在思考要不要买？
有一次逛微博，我看到有人晒了这本书。
我在底下评论了一句：“ 我想问一下里面的内容偏基础还是进阶，和《CSS 揭秘》相比较？”
他回答了我：进阶，《CSS 揭秘》是进阶技巧，《css 世界》是进阶基础  ；听了之后就特别想买，然后就买了，因为我正需要进阶 CSS 的基础，我虽然写了那么多 CSS 布局代码，但是对于他们实现原理却了解的少之又少。即使每次都能实现效果，但是代码不美观，可塑造性很强；
再看这本书的时候，我自个一个劲的在感叹这书写的真好。如果当年我入门 CSS 是看这本书该多好呀！不过现在看也不晚；居然一个多星期就把这本书看完了，爱不释手。因为写的太好了，我想再看第二遍；我更想把这本书推荐给你们，文章内容，链接均来自书中；
推荐理由一：第 12 章 流的改变
《CSS 世界》的第 12 章 流的改变 ,这一章节刷新了我 CSS 的世界观，只想感叹一句 “这书写的真好” ，我的 css 基础得到了进阶；简单介绍书中的几个例子
改变水平流向的 direction
改变了我以前布局只知道用 float 的局限。而且我们都知道 float 会造成高度坍塌，破坏正常的文档流.....文档流被我们破坏之后又要各种打补丁去修改，结果导致代码冗余，可塑性不好等等
我们可以直接用 direction
direction: ltr;表示从左往右的流(默认值)

direction: rtr;表示从右往左的流
打开你的编辑器试一试
<ul dir='rtl'>
      <li>1 改变水平流向的direction</li>
      <li>2 改变水平流向的direction</li>
      <li>3 改变水平流向的direction</li>
      <li>4 改变水平流向的direction</li>
      <li>5 改变水平流向的direction</li>
      <li>6 改变水平流向的direction</li>
    </ul>
原来是水平从左往右的流，因为加了 dir='rtl' 改变了流的方向，变成了从右往左；
再看一个例子：

之所以会这样是因为 direction 属性默认有这么一个特性，即可以改变替换元素或者 inline-block / inline-table 元素的水平呈现顺序；
原文链接
最后再说一个例子，我们要写一款confirm确认框组件，需要同时兼容桌面端和移动端。在桌面端呈现的时候，“确认”按钮是在左边，“取消”按钮是在右边，如图12-2所示。如果移动端访问，为了我们手指点击方便，产品经理希望“确认”按钮在右边，而“取消”按钮在左边，如图12-3所示。
图12-2 桌面端
图12-2 移动端
如果你来实现，你会如何处理这种不同设备、不同按钮顺序的问题呢？
如果按钮右对齐，我们还可以使用浮动 float:right 来解决，但是现在的关键问题是按钮是居中对齐的，说实话用 float 真的解决不了。一番思考后，你发现没什么思路，是不是又会去求助万能的 JavaScript，根据设备改变按钮元素在 DOM 流中的顺序了？
这样听上去好难折腾呀，像我这样的水平折腾一天还不一定能够折腾出来呢~~  但是有了 direction 属性出场！直接一行 direction:rtl，十几个字母就解决啦，按钮顺序就会自动反转，兼容性好，代码又少，，这一定是性价比最高的方法！
@media screen and (max-width: 480px) {
&emsp;.dialog-footer { direction: rtl; }
}
只要是内联元素，只要与书写流相关，都可以试试 direction 属性
当然，direction 属性的作用远不止这些。
改变 CSS 世界纵横规则的 writing-mode
writing-mode 属性定义了文本水平或垂直排布以及在块级元素中文本的行进方向。
writing-mode: horizontal-tb;    /* 默认值 文本流是水平方向(horizontal)的，元素是从上往下(tb:top-bottom)堆叠的*/
writing-mode: vertical-rl;      /* 表示文本是垂直方向(vertical)展示，然后阅读的顺序是从右往左(rl:right-left)，跟我们古诗的阅读顺序一致*/
writing-mode: vertical-lr;      /*表示文本是垂直方向(vertical)展示，然后阅读的顺序还是默认的从左往右(lr:left-right)，也就是仅仅是水平变垂直*/

注意：writing-mode 属性值并不会累加。如果父子元素均设置了 writing- mode:tb-rl ，只会渲染一次，子元素并不会两次“旋转”。

writing-mode 不经意改变了哪些规则

1．水平方向也能 margin 合并,普通块元素可以使用 margin:auto 实现垂直居中


水平方向 `margin` 合并
CSS 
.box {
  width: 182px;
  height: 182px;
    background-color: red;
    overflow: hidden;
}
.list {
    padding: 20px;
    margin: 20px;
    background-color: #eee000;
    color: #000;    
}

/* IE8+ */
.verticle-mode {
    writing-mode: tb-rl;
    -webkit-writing-mode: vertical-rl;      
    writing-mode: vertical-rl;
}
HTML
  <p><strong>默认流-垂直margin合并</strong></p>
  <div class="box ">
      <div class="list">margin:20px;</div>
      <div class="list">margin:20px;</div>
  </div>
  <p><strong>垂直流-水平margin合并</strong></p>
  <div class="box verticle-mode">
      <div class="list">margin:20px;</div>
      <div class="list">margin:20px;</div>
  </div>
效果图



普通块元素可以使用 margin:auto 实现垂直居中案例



查看源码


可以使用 text-align:center 实现图片垂直居中
查看源码




可以使用 text-indent 实现文字下沉效果查看源码


在看着本书之前，我从来不知道 margin 能够实现垂直方向的合并，居中， text-align:center 能够实现图片垂直居中，太不可思议啦！ 用的不是什么技巧，而是 CSS 里面最基础的一些属性；简单的改变了，流的方向；
总的来说：改变水平流向的 direction；改变 CSS 世界纵横规则的 writing-mode，两者是没有交集的。因为 vertical-rl 此时的文档流为垂直方向，rl 表示水平方向，此时再设置 direction:rtl ，实际上值 rtl 改变的是垂直方向的内联元素的文本方向，一横一纵，没有交集。而且 writing-mode 可以对块状元素产生影响，直接改变了 CSS 世界的纵横规则，要比 direction 强大得多。。
推荐理由二：第 10 章 元素的显示与隐藏
《CSS 世界》 的第 10 章 元素的显示与隐藏，看到元素的显示与隐藏，就想到了 display: none 和 visibility: hidden;她们的区别就是一个占据空间，一个不占空间。然而事实上并不只是这么简单。我只想感叹 CSS 真是门大学问呀，我只看到了他浮在水面上的那冰山一角；再次感叹这本书写的真好
display 与元素的显隐


display:none: 让元素不可见，不占据空间，辅助设备无法访问，但资源有加载，DOM可访问




display:none 显隐控制并不会影响 CSS3 animation 动画的实现，但是会影响 CSS3 transition 过渡效果执行




对于计数器列表元素，如果设置 display:none，则该元素加入计数队列。举个例子，10 个列表从 1 开始递增，假设第二个列表设置了 display:none，则原来的第三个列表计数变成 2 ，最后总计数是 9 。




在 Firefox 浏览器下，display:none 的元素的 background-image 图片是不加载的，包括父元素 display:none 也是如此；如果是 Chrome 和 Safari 浏览器，则要分情况，若父元素 display:none，图片不加载，若本身背景图所在元素隐藏，则图片依旧会去加载；对 IE浏览器而言，无论怎样都会请求图片资源


visibility 与元素的显隐


隐藏的元素空间依旧保留
visibility 具有继承性；如果父元素设置 visibility:hidden，子元素也会看不见，究其原因是继承性，子元素继承了 visibility:hidden，但是，如果子元素设置了 visibility:visible ，则子元素又会显示出来。查看源码
visibility:hidden 不会影响计数器的计数，这和 display:none 完全不一样。举个例子
CSS3 transition 支持的 CSS 属性中有 visibility,但是并没有 display。


推荐理由三
推荐理由三，我想让你自己去看那本书，书中介绍了很多很基础我们经常使用的，从原理开始讲解，很容易看懂。最后想说 css 样式不是某一个单一属性的作用，而是众多属性相互结合相互作用；
书中有相信介绍 文档流，float ，vertival-align, padding ,margin, border ,line-height, BTC, overflow, position, font......
最后我想再说一说 position: absolute 是具有相当定位的绝对特性；因为这个在我脑海里留下了太深的印象

查看源码
或许你看完这本书，css 基础真的会得到了进阶；至少我有的，以后我的 CSS 代码真的会少很多；

作者：sunseekers
链接：https://juejin.im/post/5a78232e6fb9a06358655748
来源：掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。