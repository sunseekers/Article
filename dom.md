实现高度动态化的 `web` 应用的重要手段，就是通过修改 `DOM` 来响应用户操作（我们`vue`和`react` 就是利用虚拟`DOM，diff`算法来实现的）

属性和特性并不是共享一个相同的值，虽然 `HTML DOM` 的原生特性，通常都能被属性表示，
但是元素上我们放置的自定义特性，并不能被自动元素属性表示，访问这些自定义属性值，我们需要使用
`DOM` 方法的 `getAttribute（）` 和 `setAttribute（）`

我们常用的 `style` 元素属性，他并不是一个字符串，而是一个对象
`js` 中定义的 `style` 属性值高于 `!important` ,`!important` 高于内敛样式
在 `javascript` 中，`style` 属性要用驼峰命名是因为，在 `js` 解析器会将连字符作为减法运算，没人
希望看到这样的结果，所以我们要用驼峰命名

对于隐藏元素我们去获取他们的尺寸方法是：

1.将 `display` 属性设置为 `block`(获取 `offsetHeight` 和 `offsetWidth` 的真实值)
                   
2.将 `visibility` 设置为 `hidden`

3.将 `position` 设置为 `absolute`

4.获取元素尺寸

5.恢复先前更改的属性

```
(function(){
  const PROPERTIES = {
    position:'absolute',
    visibility:"hidden",
    display:"block"
  }
  window.getDimensions = element=>{
    const previous = {}
    for (let key in PROPERTIES){
      previous[key]=element.style[key]
      element.style[key]=PROPERTIES[key]
    }
    const result = {
      width:element.offsetWidth,
      height:element.offsetHeight
    }
    for( let key in previous){
      element.style[key]=previous[key]//把修改的属性给修改回去
    }
  }
})
```
改变一个元素的特性（或者修改其内容）的时候，不一定只影响该元素，相反，他可能会导致连级变化
，因为重新计算布局十分昂贵，因此浏览器可能的少，可能延缓布局工作。我们可以进行批量的读写操作来避免抖动


`JavaScript` 是单线程
定时器是一种 `javascript` 特性，能够在一段时间后异步执行的代码

事件循环不仅仅包括事件队列，而且是具有两个队列，除了事件还保持浏览器执行的其他操作
这些操作被成为任务（宏任务和微任务）

宏任务：创建主文档对象，解析 `HTML`，执行主线（或全局）`Javascript` 代码，更改当前 `URL` 以及各种事件，
例如页面加载，输入，网络事件和定时器。在浏览器角度看，宏任务代表一个一个离散的独立工作单元

微任务：更新应用程序的状态，但必须在浏览器任务继续执行其他任务之前执行，浏览器任务包括重新渲染页面 `UI`
微任务包括：`promise` 回调函数，`DOM` 发生变化，微任务需要尽可能快的通过异步方式执行，同时不能产生新的微任务

`macro-task`(宏任务)：包括整体代码 `script，setTimeout，setInterval`

`micro-task`(微任务)：`Promise`，`process.nextTick`

一个任务一旦开始执行，就不会被另一个任务中断
事件监听和添加任务是独立于事件循环的，尽管主线程仍在执行，仍然可以向队列添加任务
浏览器不会同时创建两个相同的间隔计时器

`setTimeout` 和 `setInterval` 的区别：

`setTimeout` 内代码在前一个回调函数执行完之后，至少延迟xxms执行（取决于事件队列的状态，等待时间只会大于xxms

`setIntertval`会尝试每xx执行一次回调函数，不关心前一个回调函数是否执行

定时器使用0，意味着通知浏览器尽快执行回调函数，但与其他微任务不同，再回调函数之前可以执行页面渲染，
允许浏览器更新ui，使得web应用程序交互性更强

事件捕获：首先被顶部元素捕获，并依次向下传递

事件冒泡：目标元素捕获之后，事件处理转向冒泡，从目标元素向顶部元素冒泡
`addEventListener` 默认是事件冒泡
