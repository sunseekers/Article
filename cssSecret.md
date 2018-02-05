
暑假实习的时候带我的师傅，告诉我要注重基础，底层实现原理。才能在日新月异的技术行业站住脚跟，以不变应万变，万丈高楼平地起，所以我们应该不断的去学习，去交流。交流，不应该仅仅停留在技术方面，更多的应该是在思维方式。语言只是一种工具，编程的思想才是核心。我们只有在明白了编程的思想之后，才能去创造属于自己的东西，随意切换。授之以鱼不如授之以渔。在我们的时代应该是去创造而不是模仿。回到学校之后，我开始我学习的新旅程；读一本好书亦如交一个有趣的朋友。最近读了一本《CSS揭秘》，里面有很多有意思的CSS技巧，有时间有兴趣的朋友可以去读读这本书，读完之后我们可以一起交流，学习，一起解答你我的迷惑知识点，期待和你的交流。读完这本书的时候我也对书中的知识点进行了总结归纳：

![](https://user-gold-cdn.xitu.io/2017/10/23/1c6cb63a4c4cbd867a7355377bcd404b)
以上是我所用到的知识点概要

本文所有链接均来自《CSS揭秘》，内容基本都来自原书

欢迎交流[sunseekers](https://github.com/sunseekers/CSS_Secret)

<h1 style='color:rgb(230,3,135);'> css编码技巧</h1>
尽量减少代码重复的重复，尽量减少改动时要编辑的地方，易维护，性能高；

 使用css变量，currentColor,inherit...目前css变量很少，兼容性有待改善

 响应式网页设计，每个媒体查询都会增加成本；避免媒体查询

 使用百分比长度来取代固定长度,或者使用与视口相关的单位（vw,vh,vmin,vmax)，她们的值解析为视口宽度或高度的百分比

 当你需要在较大分辨率下得到固定宽度， 使用max-width代替width，因为他可以适应较小的分辨率，而无需使用媒体查询

 替换元素（img,object,video,iframe)设置一个max-width值为100%；

图片元素以行列式进行布局时，让视口的宽度来决定列的数量，弹性和布局（flexbox，display：inline-block）;

 使用多列文本时，指定column-width（列宽）而不是指定column-count（列数），目的他就可以在较小的屏幕上自动显示单列布局

 合理使用简写
 合理使用简写，是一种良好的防卫性编码方式，可以抵御未来的风险；

<h1 style='color:rgb(230,3,135);'> css小技巧</h1>

为什么说能使用html/css解决的问题就不要使用JS呢？两个字，因为简单。简单就意味着更快的开发速度，更小的维护成本，同时往往具有更好的体验；下面我介绍哪些或许你不知道css小技巧。

<h2 style='color:rgb(230,3,135);'>1. 半透明边框</h2>
<i>实现半透明边框可以有很多的实现方法，比如：伪元素和定位相结合，多层div包裹和定位相结合...,一千个读者就有一千个哈利波特，每个人都有一套自己的实现方法，或许那都不是最优的；</i>

问题：代码量有点多，不符合我前面说的css编程技巧，在实际中会出现各种我们想象不到的bug；

解决：利用背景的工作原理，背景与边框的关系；

 background-clip:设置元素的背景（背景图片或者颜色)是否延伸到边框下面；<b><i>重点在切割的位置</i></b>

 border-box: <span style='color:red;'>默认情况</span>  背景延伸到边框外延(但是在边框之下)

 padding-box: 边框下面没有背景，即背景延伸到内边距外延

 content-box: 背景裁剪到内容去外延

自己动手敲的实现的效果图如下：

![](https://user-gold-cdn.xitu.io/2017/11/3/57c702358e19f8ff8010de0a47fbb1e7)

[<span style='background:red; width:80px;height: 30px;display:flex;align-items:center;justify-content: center;border-radius: 8px;cursor: pointer;color:#fff;'><b>试一试</b></span>](http://dabblet.com/gist/012289cc14106a1bd7a5)

<h2 style='color:rgb(230,3,135);'>2. 灵活背景定位</h2>
<i>有时候我们希望图片和容器的边角之间能留出一定的空隙，类似padding的效果，对于固定尺寸大小的容器来说我们可以利用 background-position 实现，但是内容往往是不固定？background-position的值和padding一致也可实现，但是每次修改都要三个地方，代码不够DRY</i>

解决：background-origin calc()

 background-origin: 规定了指定背景图片background-image 属性的原点位置的背景相对区域,<b><i>重点在background-position位置的源点</i></b>

 border-box: 背景将会延伸到延伸到外边界的边框，而且是「边框在上、背景在下」，这个用border-style 为dashed可以直接看得出来

 padding-box:<span style='color:red;'>默认情况</span>  背景描绘在padding盒子，边框里不会有背景出现。同样，背景将会延伸到最外边界的padding.

 content-box:背景描绘在内容区范围.

![](https://user-gold-cdn.xitu.io/2017/10/23/0d35c3e379894fc91350b9a450ab18a5)

[<span style='background:red; width:80px;height: 30px;display:flex;align-items:center;justify-content: center;border-radius: 8px;cursor: pointer;color:#fff;'><b>试一试</b></span>](http://dabblet.com/gist/b5fcb42d055427ab6c1a)

自己动手敲的实现的效果图如下：

![](https://user-gold-cdn.xitu.io/2017/10/23/91e4a902ffe6545172ec1e5545139fcd)

[<span style='background:red; width:80px;height: 30px;display:flex;align-items:center;justify-content: center;border-radius: 8px;cursor: pointer;color:#fff;'><b>试一试</b></span>](http://dabblet.com/gist/012289cc14106a1bd7a5)

<h2 style='color:rgb(230,3,135);'>3. 多重边框</h2>

<i>你还在用多个元素层层包裹来模拟多重边框吗？不，我在用伪元素实现，哈哈。但是她们都需要我们添加额外的元素，或者大量的代码来污染我们的结构</i>

解决方案：box-shadow,outline
>* box-shadow: 向框添加一个或多个阴影;

> inset : 默认阴影在边框外。
使用inset后，阴影在边框内（即使是透明边框），背景之上内容之下。

> offset-x,offset-y : 
这是头两个 length 值，用来设置阴影偏移量。offset-x 设置水平偏移量，如果是负值则阴影位于元素左边。 offset-y 设置垂直偏移量，如果是负值则阴影位于元素上面。可用单位请查看 length 。
如果两者都是0，那么阴影位于元素后面。这时如果设置了 blur-radius 或 spread-radius 则有模糊效果。

> blur-radius : 这是第三个 length 值。值越大，模糊面积越大，阴影就越大越淡。 不能为负值。默认为0，此时阴影边缘锐利。

> spread-radius : 这是第四个 length 值。取正值时，阴影扩大；取负值时，阴影.收缩。默认为0，此时阴影与元素同样大。

> color：边框的 color 。如果没有指定，则由浏览器决定——通常是color的值，不过目前Safari取透明。

![](https://user-gold-cdn.xitu.io/2017/10/23/fa7b99fa7d7aadfc00f21a9a18733521)

如果你只需要两层，那就可以设置一层常规的边框，再加上outline（描边）属性来产生内外层边框；
例如我们常见的：

![](https://user-gold-cdn.xitu.io/2017/10/23/df89be6783022badbbc63d29385969d9)

>* outline: 是用来设置一个或多个单独的轮廓属性的简写属性 ， 例如 outline-style, outline-width 和 outline-color;轮廓不占据空间，它们被描绘于内容之上

>* outline-offset: 一个元素边缘或边框之间的间隙;

[<span style='background:red; width:80px;height: 30px;display:flex;align-items:center;justify-content: center;border-radius: 8px;cursor: pointer;color:#fff;'><b>试一试</b></span>](http://dabblet.com/gist/525eb8e9cdade71723c1)

<h2 style='color:rgb(230,3,135);'>4. 边框内圆角</h2>
<i>有时候我们需要一个容器，只有内侧有圆角，边框或者描边的四个角在外部仍然保持直角形状</i>

解决方案：<b>box-shadow和outline结合</b>

实现原理： outline（描边）不会跟着元素的圆角走（因而显示直角）；box-shadow却是会跟着元素走的；，两者相结合，box-shadow会填补描边和容器圆角之间的空隙；

![](https://user-gold-cdn.xitu.io/2017/10/23/7311cb36ddbd45af7ef193dd2bccb03d)

[<span style='background:red; width:80px;height: 30px;display:flex;align-items:center;justify-content: center;border-radius: 8px;cursor: pointer;color:#fff;'><b>试一试</b></span>](http://dabblet.com/gist/170fe436f290083cc24c)

<h2 style='color:rgb(230,3,135);'>5. 连续的图像边框</h2>

<i>有时候我们想把一副图案应用为边框，而不是背景？你或许会想到border-image，但是行不通，border-image他的原理基本上就是九宫格伸缩法，把图片切割成九块，然后把她们应用到元素边框相应的边和角 </i>

border-image的工作原理：

![](https://user-gold-cdn.xitu.io/2017/10/23/d5ece788bb9f875bb5b8f05b66f4a7bd)

![](https://user-gold-cdn.xitu.io/2017/10/23/621415a8aef311c62c0983c1762d0735)

效果图如上所示：

解决方案：<b>css渐变和背景的扩展，在背景图之上在加一层纯色实色背景，给两层背景指定不同的background-clip;
<i>渐变是可以和背景图片一起使用的，而且背景图片的预发和平时的写法是一样的。而且写在前面的优先级会比较高，会盖在后面的图片上面</i></b>

[<span style='background:red; width:80px;height: 30px;display:flex;align-items:center;justify-content: center;border-radius: 8px;cursor: pointer;color:#fff;'><b>试一试</b></span>](http://dabblet.com/gist/55b5f131c45702a55684)

<h2 style='color:rgb(230,3,135);'>7. 平行四边形</h2>

<i>有没有办法只让容器的形状倾斜而保持其内容不变呢？或许你会想到嵌套两层元素，外层skew（）,对内容在应用一次反相skew变形，从而抵消变形的效果。但是意味着我们不得不使用一层额外的HTML元素包裹内容.有些累赘</i>

解决方案：<b>伪元素，把样式应用到伪元素上，对伪元素进行变形，再把伪元素定位+层级放到到住宿元素下面</b>

光说不练，假把式[<span style='background:red; width:80px;height: 30px;display:flex;align-items:center;justify-content: center;border-radius: 8px;cursor: pointer;color:#fff;'><b>试一试</b></span>](http://dabblet.com/gist/f2d98791ab1f0b238aa9)

<h2 style='color:rgb(230,3,135);'>8. 梯形标签页</h2>

<i>在网页中我们经常见到梯形形状的标签页，常见的技巧都是比较杂乱，或者说难以维护的，那他们是如何实现的呢？</i>

解决方案： <b>三维世界中旋转一个矩形，由于透视关系，我们在二维图像上看到一个梯形，再结合平行四边实现的方法便能实现</b>

> perspective: 观察者与z=0平面的距离;

对元素使用了3D变形之后，其内部的变形效应是"不可逆转的"，和2D变形不同（2D变形内部的逆向变形可以抵消外部的变形效应）；

为了让他的尺寸更好掌握，我们可以为他指定transform-origin：bottom;也可用scale()对他在进行美观操作；

![](https://user-gold-cdn.xitu.io/2017/10/23/e9b1f3b61eae6f84430713c7ad097e58)

![](https://user-gold-cdn.xitu.io/2017/10/23/b2d529c38ff3b3bae60ffa258481fee6)img src='img/tix.png'/>

[<span style='background:red; width:80px;height: 30px;display:flex;align-items:center;justify-content: center;border-radius: 8px;cursor: pointer;color:#fff;'><b>试一试</b></span>](http://dabblet.com/gist/1345dc9399dc8e794502)

<h2 style='color:rgb(230,3,135);'>9. 简单的饼图</h2>

<i>饼图在网页中的运用极为常见，比如简单的统计表，进度指示器，如果我们不用图像处理器，和JavaScript，那要如何去实践呢？</i>

解决方案:<b>伪元素，变形属性和css渐变实现</b>
> 1.把这个元素设置为一个圆形；

![](https://user-gold-cdn.xitu.io/2017/10/23/267fc4fd84dd98f5537ede39ea565e4f)

> 2.用一个简单线性渐变来把图像的有半部分设为其他颜色

![](https://user-gold-cdn.xitu.io/2017/10/23/a89c17cdd12a26bbc72b501ae46a4171)

> 3.用伪元素覆盖到这个元素的渐变区域上面去（看起来这个元素和第一步效果一样），通过旋转来决定漏出多大扇区；

![](https://user-gold-cdn.xitu.io/2017/10/23/d506c64b7aff9ab9cddaa78ea1bdf08c) 
> 4.选择任意角度
![](https://user-gold-cdn.xitu.io/2017/10/23/bb18f3cef1dc13cb5c599603f66fd0fe)

[<span style='background:red; width:80px;height: 30px;display:flex;align-items:center;justify-content: center;border-radius: 8px;cursor: pointer;color:#fff;'><b>试一试</b></span>](http://dabblet.com/gist/722909b9808c14eb7300)

<i>如果我们想要看到一个静态的不同比率的饼状图哪有如何解决呢？</i>

解决方案：<b> 很简单，我们只需将上面用到的那个动画处于暂停状态就好了</b>
animation-play-state: paused;
animation-delay: 设置为负；负的动画延时，让动画一开始就直接跳至设置的时间点。即负负得正；

[<span style='background:red; width:80px;height: 30px;display:flex;align-items:center;justify-content: center;border-radius: 8px;cursor: pointer;color:#fff;'><b>试一试</b></span>](http://dabblet.com/gist/66e1e52ac2a44ad87aa4)

<h2 style='color:rgb(230,3,135);'>10. 自适应内部元素</h2>
<i>如果不给一个元素指定具体的height，他就会自动适应其内容的高度，如果我们希望width也具有类似的行为该怎么实现呢？？</i>

解决方案: <b>css内部与外部尺寸模型:min-content</b>

[max-content,min-content,fit-content](http://www.zhangxinxu.com/wordpress/2016/05/css3-width-max-contnet-min-content-fit-content/)

min-content：宽度表示的并不是内部那个宽度小就是那个宽度，而是，采用内部元素最小宽度值最大的那个元素的宽度作为最终容器的宽度。

首先，我们要明白这里的“最小宽度值”是什么意思。替换元素，例如图片的最小宽度值就是图片呈现的宽度，对于文本元素，如果全部是中文，则最小宽度值就是一个中文的宽度值；如果包含英文，因为默认英文单词不换行，所以，最小宽度可能就是里面最长的英文单词的宽度。So，大家明白的说。

[<span style='background:red; width:80px;height: 30px;display:flex;align-items:center;justify-content: center;border-radius: 8px;cursor: pointer;color:#fff;'><b>试一试</b></span>](http://dabblet.com/gist/82eb1575806f6eff9c37)

<h2 style='color:rgb(230,3,135);'>11. 满幅的背景，定宽的内容</h2>

![](https://user-gold-cdn.xitu.io/2017/10/23/8714509b03144b0c8b9bb4819ce6770b)
类似的布局我们在网页中经常遇见，通常是在页脚和导航；如果我们只使用一个元素该如实现这个效果呢？</i>
解决方案<b>calc()函数</b>

margin:0 auto;所产生的左右外边距实际上都等于视口宽度的一半减去内容宽度的一半；
因此我们可以使用margin：0 calc(50%-width/2);

如果你觉得还有疑虑的话：[<span style='background:red; width:80px;height: 30px;display:flex;align-items:center;justify-content: center;border-radius: 8px;cursor: pointer;color:#fff;'><b>试一试</b></span>](http://dabblet.com/gist/763229b68fa27c5c1bfa)

<h2 style='color:rgb(230,3,135);'>12. 垂直居中</h2>
<i>在css中对元素进行水平居中垂直居中，我们在页面布局的时候会经常用到。相信每个人都有一套自己实现的方式；</i>
<b>我想介绍一下FlexBox的解决方案</b>

 display: flex;

 align-items：垂直方向上的对齐方式；
 
 justify-content：水平方向上的对齐方式；

试一试我推荐的方案吧！[<span style='background:red; width:80px;height: 30px;display:flex;align-items:center;justify-content: center;border-radius: 8px;cursor: pointer;color:#fff;'><b>试一试</b></span>](http://dabblet.com/gist/00b5cd0de91a439616e8)

<h2 style='color:rgb(230,3,135);'>13. 紧贴底部的页脚</h2>

<i>一个具有块级样式的页脚，当页面内容足够长时他一切正常，但是当页面比较短时，就会出现问题；页脚就不能像我们期望中那样紧贴在视口的最底部，而是在内容的下方</i>

![](https://user-gold-cdn.xitu.io/2017/10/23/37971f927581195e0d80afa86ef6456e)

解决方案:<b>flex弹性布局</b>

>* flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。

> flex-grow：定义项目的放大比例。默认0，不放大。1等分剩余空间

> flex-shrink：项目的缩小比例默认为1，如果空间不足，等比缩小

> flex-basis：项目占据主轴空间

[<span style='background:red; width:80px;height: 30px;display:flex;align-items:center;justify-content: center;border-radius: 8px;cursor: pointer;color:#fff;'><b>试一试</b></span>](http://dabblet.com/gist/410e43c60863a8dba193)

<h2 style='color:rgb(230,3,135);'>14. 缓动效果</h2>

<i>给过渡和动画加上缓动效果是一种流行的表现手法，可以让界面显得更加生动和真实，但是在现实世界中，物体从a到b点的移动往往不是 完全匀速的，因此我们需要对动画效果加以调整，使得更加逼真</i>

解决方案：<b>我们可以用animation-timing-function的调速函数和反向版本，模拟现实世界的速度变化css的transform只对块级元素有用</b>

如果是反反复复的循环函数，我们也可以用可用animation-direction来反转循环的周期函数；

animation-direction:reverse;反转每一个循环周期；

animation-direction:alternate;反转第偶数循环周期；

animation-direction:alternate-reverse;反转第奇循环周期；

首先介绍一下animation-timing-function

animation-timing-function：属性定义CSS动画在每一动画周期中执行的节奏。可能值为一或多个；(ease-in,ease-out,ease-in-out,linear,steps(),cubic-bezier())；

![](https://user-gold-cdn.xitu.io/2017/10/23/2f6cb03031226daf71a915572fb18518)

cubic-bezier()函数，允许我们指定自定义调速函数；cubic-bezier(x1,y1,x2,y2);(x1,y1)表示第一个-P1控制锚点的坐标,(x2,y2)，表示第二个-P2;曲线的片段分别固定在(0,0)-P0起点,(1,1)-P4终点;

我们需要关注的是 P1 和 P2 两点的取值，而其中 X 轴的取值范围是 0 到 1，当取值超出范围时 cubic-bezier 将失效；Y 轴的取值没有规定，当然也毋须过大。

<b>把控制锚点的水平坐标和垂直坐标互换，就可以得到任何调速函数的反向版本</b>
<img src='https://user-gold-cdn.xitu.io/2017/10/23/1e1fa80f6a095f44476a73fbba60c515'/>

steps()：是一个阶跃函数，用于把整个操作领域切分为相同大小的间隔，每个间隔都是相等的。

steps 第一个参数指定了时间函数中的间隔数量（必须是正整数）；第二个参数可选，接受 start 和 end 两个值，指定在每个间隔的起点或是终点发生阶跃变化，默认为 end。


![](https://user-gold-cdn.xitu.io/2017/10/23/99b34979566024bc9c6c3f8b461414ae)

弹跳动画，球体自由落体运动，在下降的过程中匀加速我们可用ease-out;弹起方向是匀减速我们可用ease-in;

动手看效果吧！[<span style='background:red; width:80px;height: 30px;display:flex;align-items:center;justify-content: center;border-radius: 8px;cursor: pointer;color:#fff;'><b>试一试</b></span>](http://dabblet.com/gist/1b37089310d0a5a2d8e6)

<h2 style='color:rgb(230,3,135);'>15. 逐帧动画</h2>
<i>有时候我们想要实现连续的动画帧，动画帧之间然不需要过渡的状态。而我们在实现中往往会失败？</i>

解决方案:<b>steps()会根据你指定的步数量，把整个动画切分为多个针，而且整个动画帧与帧之间硬切，不会有任何过渡效果</b>

step-start和step-end是steps(1,start)和steps(1,end)的简写；

动手看效果吧！[<span style='background:red; width:80px;height: 30px;display:flex;align-items:center;justify-content: center;border-radius: 8px;cursor: pointer;color:#fff;'><b>试一试</b></span>](http://dabblet.com/gist/bcc082518391f45b41dc)

<h2 style='color:rgb(230,3,135);'>16. 沿环形平移的动画</h2>

<i>当一个元素沿着环形进行移动的同时，我们希望它能保存自己原本的的朝向。那我们该如何去实现呢？或许你已经有了你的方法啦！但我的方法可能会比你的更加优化</i>

我们可以用前面介绍的嵌套的两层相互抵消，用内层的变形来抵消外层变形的效果；即两层的旋转方向相反；

动手看效果吧！[<span style='background:red; width:80px;height: 30px;display:flex;align-items:center;justify-content: center;border-radius: 8px;cursor: pointer;color:#fff;'><b>试一试</b></span>](http://dabblet.com/gist/87d80a51a5294ec07aea)

但是这样还不是特别理想，如果只用一个元素那要怎么去实现呢？

transform-origin只是一个语法糖，实际上你总是可以用translate()来代替；变形函数并不是孤立存在；如下图可证实：

![](https://user-gold-cdn.xitu.io/2017/10/23/2d152f8de1b7728988c9101e92fc2ad0)

这个原理我目前还不是特别能够理解，但你可以试试
[<span style='background:red; width:80px;height: 30px;display:flex;align-items:center;justify-content: center;border-radius: 8px;cursor: pointer;color:#fff;'><b>试一试</b></span>](http://dabblet.com/gist/6c647a5599dc11145f2c)

<h2 style='color:rgb(230,3,135);'>17. 自定义复选框</h2>
<i>我们对于美得追求是永无止境的，但是复选框，单选框的样式的样式总是不如我们如意。虽然js能够实现效果，但是代码停臃肿。那我们有什么去实现呢？</i>

解决方案：<b>:checked伪类，这个伪类只有在复选框被勾选时才会匹配，不论是由用户交互触发，还是有脚本触发</b>

> 当< label > 元素与复选框关联之后，可以起到触发开关的作用

> label 不是复选框那样的<i>替换元素</i>,我们可以为他添加生成性内容(伪元素),并基于复选框的状态来为其设置样式，然后把真正的复选框隐藏起来（但不能把它从tab键切换焦点的队列中完全删除），再生成性内容美化一番，用来顶替原来的复选框！

<i>可替换元素就是浏览器根据元素的标签和属性，来决定元素的具体显示内容</i>

>* 例如浏览器会根据<img>标签的src属性的值来读取图片信息并显示出来，而如果查看(x)html代码，则看不到图片的实际内容；又例如根据< input >标签的type属性来决定是显示输入框，还是单选按钮等。

![](https://user-gold-cdn.xitu.io/2017/10/23/dbe4b7418e15c9233e4f5ded4a42ffe7)

[<span style='background:red; width:80px;height: 30px;display:flex;align-items:center;justify-content: center;border-radius: 8px;cursor: pointer;color:#fff;'><b>试一试</b></span>](http://dabblet.com/gist/e269f10328615254e29e)