前段时间张鑫旭老师的《css 世界》出版，之前看过他写的博客，写的挺好的，一直就在思考要不要买？

有一次逛微博，我看到有人晒了这本书。
我在底下评论了一句：“ 我想问一下里面的内容偏基础还是进阶，和《CSS 揭秘》相比较？”

他回答了我：进阶，《CSS 揭秘》是进阶技巧，《css 世界》是进阶基础 ；听了之后就特别想买，然后就买了，因为我正需要进阶 CSS 的基础，我虽然写了那么多 CSS 布局代码，但是对于他们实现原理却了解的少之又少。即使每次都能实现效果，但是代码不美观，可塑造性很强；

再看这本书的时候，我自个一个劲的在感叹这书写的真好。如果当年我入门 CSS 是看这本书该多好呀！不过现在看也不晚；居然一个多星期就把这本书看完了，爱不释手。因为写的太好了，我想再看第二遍；我更想把这本书推荐给你们，文章内容，链接均来自书中；

推荐理由一：第 12 章 流的改变

《CSS 世界》的第 12 章 流的改变 ,这一章节刷新了我 CSS 的世界观，只想感叹一句 “这书写的真好” ，我的 css 基础得到了进阶；简单介绍书中的几个例子

改变水平流向的 direction

改变了我以前布局只知道用 float 的局限。而且我们都知道 float 会造成高度坍塌，破坏正常的文档流.....文档流被我们破坏之后又要各种打补丁去修改，结果导致代码冗余，可塑性不好等等

我们可以直接用 direction

direction: ltr;表示从左往右的流(默认值)

direction: rtl;表示从右往左的流

打开你的编辑器试一试
```
<ul dir='rtl'>
   <li>1 改变水平流向的direction</li>
   <li>2 改变水平流向的direction</li>
   <li>3 改变水平流向的direction</li>
   <li>4 改变水平流向的direction</li>
   <li>5 改变水平流向的direction</li>
   <li>6 改变水平流向的direction</li>
</ul> 
```

原来是水平从左往右的流，因为加了 dir='rtl' 改变了流的方向，变成了从右往左；
再看一个例子：


direction属性改变了替换元素的水平呈现顺序
之所以会这样是因为 direction 属性默认有这么一个特性，即可以改变替换元素或者 inline-block / inline-table 元素的水平呈现顺序；

原文链接

最后再说一个例子，我们要写一款confirm确认框组件，需要同时兼容桌面端和移动端。在桌面端呈现的时候，“确认”按钮是在左边，“取消”按钮是在右边，如图12-2所示。如果移动端访问，为了我们手指点击方便，产品经理希望“确认”按钮在右边，而“取消”按钮在左边，如图12-3所示。


图12-2 桌面端

图12-2 移动端
如果你来实现，你会如何处理这种不同设备、不同按钮顺序的问题呢？

如果按钮右对齐，我们还可以使用浮动 float:right 来解决，但是现在的关键问题是按钮是居中对齐的，说实话用 float 真的解决不了。一番思考后，你发现没什么思路，是不是又会去求助万能的 JavaScript，根据设备改变按钮元素在 DOM 流中的顺序了？

这样听上去好难折腾呀，像我这样的水平折腾一天还不一定能够折腾出来呢~~ 但是有了 direction 属性出场！直接一行 direction:rtl，十几个字母就解决啦，按钮顺序就会自动反转，兼容性好，代码又少，，这一定是性价比最高的方法！

@media screen and (max-width: 480px) {
&emsp;.dialog-footer { direction: rtl; }
}
 
只要是内联元素，只要与书写流相关，都可以试试 direction 属性
当然，direction 属性的作用远不止这些。

改变 CSS 世界纵横规则的 writing-mode

writing-mode 属性定义了文本水平或垂直排布以及在块级元素中文本的行进方向。

writing-mode: horizontal-tb; /* 默认值 文本流是水平方向(horizontal)的，元素是从上往下(tb:top-bottom)堆叠的*/
writing-mode: vertical-rl; /* 表示文本是垂直方向(vertical)展示，然后阅读的顺序是从右往左(rl:right-left)，跟我们古诗的阅读顺序一致*/
writing-mode: vertical-lr; /*表示文本是垂直方向(vertical)展示，然后阅读的顺序还是默认的从左往右(lr:left-right)，也就是仅仅是水平变垂直*/


direction属性值
注意：writing-mode 属性值并不会累加。如果父子元素均设置了 writing- mode:tb-rl ，只会渲染一次，子元素并不会两次“旋转”。

writing-mode 不经意改变了哪些规则

1．水平方向也能 margin 合并,普通块元素可以使用 margin:auto 实现垂直居中
水平方向 margin合并

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

margin 垂直方向合并
普通块元素可以使用 margin:auto 实现垂直居中案例

margin:auto 实现垂直居中案例
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

书中有相信介绍 文档流，float ，vertival-align, padding ,margin, border ,line-height, BFC, overflow, position, font......

最后我想再说一说 position: absolute 是具有相当定位的绝对特性；因为这个在我脑海里留下了太深的印象




position：absolute
查看源码

或许你看完这本书，css 基础真的会得到了进阶；至少我有的，以后我的 CSS 代码真的会少很多；

____________________________________________________________________________________________

再次阅读，应该要记住

1. css3 currentColor变量可用于border，background，box-shadow等，使用场景当鼠标移入的时候改变颜色，可减少大量代码

CSS3图标图形生成与currentColor " 张鑫旭-鑫空间-鑫生活

currentColor-CSS3超高校级好用CSS变量 " 张鑫旭-鑫空间-鑫生活



2. 块级元素和display：block并不是一个概念；比如li元素的display：list-item，table的display：table；但是他们都是块级元素，见书13页



3. 块级元素负责结构，内联元素负责样式（在我们的书写样式的时候应该记住）



4. 表现为外部尺寸的块级元素一旦设置了width，流动性就丢失了（display：block；width：100%）后面那个width可以去掉，否则不会自适应

“外部尺寸”block元素的流动性示意 " 《CSS世界》演示页面 （无宽度原则，少了代码，少了计算，少了维护，何乐而不为）



5.首选最小宽度：案例 “首选最小宽度”与凹凸效果 " 《CSS世界》演示页面 实现凹凸字 英文如果出现-会导致换行



6.最大宽度：如果内部没有块级元素或者块级元素没有设定宽度，则最大宽度实际上就是最大的连续内联盒子的宽度



7.宽度最好不要限定死：原因一：流动性丢失，二：包含padding或者border会导致元素变大；最好是宽度分离原则（宽度不影响padding/border属性共存）



8.height：100% 要想生效，他的父级必须要有一个可以生效的高度



9.绝对定位的宽高根据padding-box 计算，非绝对定位的宽高根据content-box计算

10. max-width宽度覆盖width宽度 min-width宽度覆盖max-width即 width < max-width <min-width



11,任意高度元素的展开收起我们可以利用max-height，原理刚刚开始的时候是0，即不显示，然后点金出现高度，有一个缓慢的过程:http://demo.cssworld.cn/3/3-2.php



12. 替换元素和非替换元素的差别就在src和content



13、content内容生成技术用的最多的是::before和::after中；content属性改变仅仅是视觉效果,本质上是没有变化的



14，content属性的应用：辅助元素的生成（清除浮动伪元素）字符内容的生成，计数器（counter）



15. padding box-sizing:content-box(默认) 会增加元素尺寸



16 css属性分两种：一种纯视觉效果，不影响外部尺寸（box-show和outline）另一种是影响外部尺寸的，在移动端我们会用padding添加可点击区域的范围方便我们进行操作

17 padding支持百分比（水平方向或者垂直方向均相对于宽度计算）

18 解决幽灵空白节点的问题我们可以设置font-size：0；从而导致他的height为0



19 如果浏览器支持currentColor属性的话，我们尽可以的用这个，可扩展性强，修改的时候只要修改一个地方就好了



20. 对于普通块元素，在默认的水平流下，margin只能改变左右方向内部尺寸，垂直方向无法改变（如果我们使用writing-mode改变了）



21.滚动浏览器底部留白我们推荐使用margin，因为padding有兼容性问题



22，视觉上的等高，margin-bottom为负，padding-bottom为正，正负抵消，再用overflow：hidden



23. margin 支持百分比（水平方向或者垂直方向均相对于宽度计算）



24 . 如果想要某个块级元素右对齐，我们可以使用margin-left:auto ,毕竟浮动是个小魔鬼，他和text-align控制左中右对齐正好遥相呼应



25. border-width,outline,box-shadow,text-shadow 等等，不支持百分比



26 块级元素负责结构，内联元素接口内容



27 ex单位的价值在于不受字体和字号影响的内联元素的垂直居中对齐效果（height：1ex） 基于ex单位的天然垂直居中对齐效果 " 《CSS世界》演示页面

28 div 的高度是由line-height高度决定的，而不是font-size（《CSS世界》demo原型页面索引 " 《CSS世界》演示页面

29 行距=line-height - font-size，line-height小于1，会使得文字部分重合在一起，对于纯文字line-height直接决定最终高度，对于替换元素只能决定最小高度



30 单行文本垂直居中对齐，直接用line-height，多行文本对齐需要外层包裹一个元素line-height设置高度，里面有用vertical-align配合line-height



31 无论内联元素 line-height怎么设置，最终父级元素高度都是由数值最大的那个line-height决定（《CSS世界》demo原型页面索引 " 《CSS世界》演示页面



32 vertical-align支持数值，和负值，他的百分比是相对于line-height计算的，line-height的百分比是相对于font-size计算的，vertical-align有效果的前提：内联元素或者display：table-cell，对于块化后的元素vertical-align是没有效果的



33 float：浮动的本质就是为了实现文字环绕效果（原理是父元素的高度坍塌），而不是各种复杂的布局。我们是否在布局的时候常常误用float呢？建议尽可能少的使用float，因为他的布局容错性差，容易出现比较严重的布局问题（兼容性，高度坍塌）



float：包裹性，块状化并格式化上下文（只要float不是none，他的display会变成block或者table），float的使命是破坏文档流



34 float的天然克星clear（只能在一定程度上消除浮动的影响，并不能从根本上解决问题），clear：none（左右浮动起来默认）both（两边抗浮动）；clear 让自身不能和前面的浮动元素相邻，对后面的浮动元素是不闻不问的；clear属性只对块级元素有用，:after等伪元素默认都是内联元素，这就是为什么当我们使用：after要加display：block的原因



35 BFC 结界：如果一个元素具有BFC，内部的元素在怎么翻江倒海，翻云覆雨，都不会影响外部的元素，所以BFC元素是不可能发生margin重叠的（<html>,float值不是none，overflow值是auto，scroll，hidden，display值是：table-cell，table-caption，inline-block，position的值不是relation和static）

BFC最重要的用途不是去margin重叠或者清除float，而是实现更加健壮，更智能的自适应布局



36 overflow-x和overflow-y，永远不会出现一个方向溢出剪裁或者滚动，另一个方向内容溢出显示（overflow-x和overflow-y属性中的一个值设为visible(默认），另一个值设置为hidden，scroll，auto，则visible的样式会如同auto）html元素和textarea默认是有滚动条的

无论什么浏览器，默认的滚动条都是来自html元素而不是body;overflow:hidden仅仅是滚动条不存在(我们的视觉效果），滚动依然存在



37 单行文字溢出显示点点点效果

{
overflow:hidden;
text-overflow:ellipsis;
white-space:nowrap
}
38 《CSS世界》demo原型页面索引 " 《CSS世界》演示页面



39 position：absolute和float在一起的时候float会失效，设置了 position：absolute就没有必要设置display：inline-block了。对于绝对定位元素来说height：100%,是第一个具有相对定位属性的祖先元素的高度，height:inherit是单纯的父元素的高度继承；在绝对定位中white-space：nowrap可以让宽度表现从包裹性变成最大可用宽度



40 有时候为了减少代码之间的耦合性，在绝对定位中我们使用border撑开间距，注意不要设置overflow：hidden（184）



41 具有相对特性的无依赖absolute绝对定位（无依赖定位就是相对定位，仅仅是不占据css流空间而已），absolute是一个非常独立的css属性，其样式和行为表现不依赖其他任何css属性就可以完成，当我们仅仅只设置position：absolute；会变成相对定位

无依赖absolute绝对定位应用场景：各类图表定位超越常规布局排版，下拉列表的定位184



42 text-align可以改变absolute元素的位置191（原理是幽灵空白节点和无依赖absolute定位不占据空间共同作用）



43 overflow的剪裁对于固定定位（position：fixed不适用），overflow对于absolute有时候也会不起作用。我们可以使用clip属性进行裁剪，clip属性起作用元素必须是相对定位或者绝对定位193.clip仅仅是决定了哪部分的是可见，视觉上的隐藏，元素依然是原来的大小，非不可见部分无法响应点击事件



44 position：relative最小化原则，因为会改变层级关系，所以我们要尽量少用，怕出现多个relative，一层一层依赖，最后导致整个项目高度耦合



45 我们可以利用absolute模仿fixed定位



46 z-index和定位元素（static除外）flex盒子的子元素在一起的时候才有作用，css世界的层叠顺序是 装饰 < 布局 < 内容

当元素发生层叠的时候遵循，谁大谁先上（有层叠水平标识的时候）和后来者居上（层叠水平一致，层叠顺序相同）的原则，z-index：auto相当于普通元素定位遵循谁大谁先上

47 z-index最好设置不要超过2