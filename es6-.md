那些我所不知道的 `JavaScript ` （二）
# class

`class` 就是一个语法糖，我用一段代码解释

```
class Warrior {
  constructor(weapon) {
    this.weapon = weapon;
  }

  wield() {
    return "Wielding " + this.weapon;
  }

  static duel(warrior1, warrior2) {
    return warrior1.wield() + " " + warrior2.wield();
  }
}
相当于下面：
function Warrior(weapon){
  this.weapon = weapon
}
Warrior.prototype.wield = function (){    
  return "Wielding " + this.weapon;
}
Warrior.duel = function(warrior1,warrior2){
  return warrior1.wield() + " " + warrior2.wield();
}

```
`vue` 里面的 `v-model` 也是一个语法糖

在 `javascript` 中所有的内容都会在运行时发生变化包括对象的原型和函数的原型

`javaScript` 自身支持真正的 `getter` 和 `setter` 方法，用于访问普通数据的属性，同时也可以用于计算属性值，验证属性值，或者做其他我们想做的事

```
const nija = {
  ninjas: ["Yoshi", "Kuma", "Hattori"],
  num:0,
  numset:0,
  get firstnija(){
    console.log(this.num++)//记录访问的次数，访问属性的时候立即生效
    return this.ninjas[0]
  },
  set firstnija(val){
    console.log(this.numset++)//记录修改的次数
    return this.ninjas[0]=val
  }
}
```
我们在属性名前加关键字 `get` 定义`getter` 方法，在属性名前加 `set` 关键字，定义 `setter` 方法

我们通过代理控制对另一个对象的访问，可以简单的理解为通用化的`getter`和 `setter` ，区别是每个 `setter` 和 `getter` 仅能控制单个对象属性，而代理
可用于对象通用化处理，包括调用对象的方法。代理更加强大。好像`vue 3.0`使用的就是反向代理来进行数据的实时渲染

当我们想要知道代码是如何工作或者试图查找严重错误根源的时候，最强有力的工具是记录日志，在特定的时候输出有用的信息行为

# 模块
模块是比对象和函数更大的代码块单元，使用模块可以将程序进行归类；

在 `javaScript ES6` 之前只有两种作用域：全局作用域和函数作用域（后来有了命名空间或者模块作用域）

模块系统实现：

    1. 定义模块接口，通过接口可以调用模块的功能（对象和闭包实现定义接口）
    思路：通过函数模块返回代表模块公共接口的对象。该对象必须包含模块提供的方法，
    而这些方法将通过闭包保持模块内部变量，甚至在模块函数执行完成之后仍然保持模块变量。
    
    2. 隐藏模块的内部实现，使模块的使用者无需关注模块内部的实现细节。
    同时，隐藏模块的内部实现（立即执行函数作为模块），避免有可能产生的副作用和对bug的不必要修改（隐藏实现细节）
             
模块模式
``` 
//使用函数扩展模块，使用对象实现接口
 const module=function(){
 let numClick = 0
 const handleClick=()=>{
   alert(++numClick)
 }
 return {
   countClick:()=>{
     document.addEventListener('click',handleClick)
   }
 }
}();
//模块扩展和上面放在一起
(function(module){
 let numClick = 0
 const handleClick=()=>{
   alert(++numClick)
 }
   module.countClick1=()=>{
   return 23
     document.addEventListener('click',handleClick)
   }
   return module
})(module)
```
通过独立的立即执行函数扩展模块，无法共享模块私有变量，因为每个函数都分别创建了新的作用域。
虽然这是一个缺点，但并不致命，我们仍然可以使用模块模式保持 `JavaScript` 应用模块化。

`AMD` 和`CommonJS` 的主要区别是：`AMD` 的设计理念是明确基于浏览器的，而 `CommonJS` 的设计是面向 `JavaScript` 环境（例如`node`服务端）而不限于浏览器
`AMD`优点：自动处理依赖，无需考虑模块引入的顺序，异步加载模块，避免堵塞，在同一个文件中可以定义多个模块

`CommonJS` 每一个文件只能定义一个模块，同步加载，加载速度快，不需要立即执行函数，不会泄露全局作用域。`npm` 包都是 `commonjs`
`CommonJS` 提供变量 `module`，该变量具有属性 `exports`，通过 `exports` 可以很容易地扩展额外属性。最后，`module.exports` 作为模块的公共接口
只有通过 `module.exports` 对象暴露的对象或函数才可以在模块外部访问。这个过程与模块模式的类似，唯一的区别是无需返回一个全新的对象，模块已经提供了扩展接口和属性的方法
`CommonJS` 优势：
语法简单。只需定义 `module.exports` 属性，剩下的模块代码与标准 `JavaScript` 无差异。引用模块的方法也很简单，只需要使用 `require` 函数。
`CommonJS` 是 `Node.js` 默认的模块格式，所以我们可以使用 `npm` 上成千上万的包

`ES6` 结合了他们两者的优势
`export` ===> 导出模块标识符
`import`  ===> 导入模块标识符


```
//在最后将所有的模块标识符全部导出（Ninja.js 文件）
const ninja = "Yoshi";
const message = "Hello";　　←---　定义所有的模块标识符

function sayHiToNinja() {
　 return message + " " + ninja;
}

export { message, sayHiToNinja };
//import 全部导入
import { message, sayHiToNinja} from "Ninja.js";　　←---　使用关键字import从模块中导入标识符
//使用*别名导入（ninjaModule.message,ninjaModule.sayHiToNinja
import * as ninjaModule from "Ninja.js";　　←---　使用*导入所有的标识符
                                
```
默认导出
```
export default class Ninja {　　←---　使用export default关键字定义模块的默认导出
　 constructor(name) {
　　 this.name = name;
　}
}

export function compareNinjas(ninja1, ninja2) {　　←---　使用默认导出的同时，我们还可以指定导出的名称
　 return ninja1.name === ninja2.name;
}

import ImportedNinja, {compareNinjas} from "Ninja.js";//默认导出和命名导出
导入已命名的导出内容必须使用花括号，但是导入默认的导出不需要。同时，注意到我们可以为默认导出自定义名称，不一定需要使用导出时的命名


```
我们可以在export末尾或者import开始进行重命名。通过关键字as设置别名
`export { sayHi as sayHello}`//导出名字叫sayHello
`import { greet as sayHello } from "Hello.js";`//导入的greet的改名叫sayHello
总结：

```
代码                                                  含义
export const ninja = "Yoshi";	                   导出变量
export function compare(){}	                       导出函数
export class Ninja{}	                           导出类
export default class Ninja{}	                   导出默认类
export default function Ninja(){}	               导出默认函数

const ninja = "Yoshi";
function compare(){};
export {ninja, compare};                           导出存在的变量

export {ninja as samurai, compare};	               使用别名导出变量
import Ninja from "Ninja.js";	                   导入默认导出
import {ninja, Ninja} from "Ninja.js";	           导入命名导出
import * as Ninja from "Ninja.js";	               导入模块中声明的全部导出内容
import {ninja as iNinja} from "Ninja.js";	       通过别名导入模块中声明的全部导出内容
```

`Map` 和 `Set`

`Map`可以创建字典类型，建立键值对的映射关系，在处理特殊的编程任务的时候特别有用
set集合中的成员都是唯一的，不允许出现重复的成员

数组：
`pop` 和 `push` 方法只影响数组最后一个元素：`pop` 移除最后一个元素，`push` 在数组末尾增加元素。
`shift` 和 `unshift` 方法修改第一个元素，之后的每一个元素的索引都需要调整。
因此，`pop` 和 `push` 方法比 `shift` 和 `unshift` 要快很多，非特殊情况不建议使用 `shift` 和 `unshift` 方法。


映射数组（`Map`）：主要思想是将数组中的每个元素的属性映射到新数组的元素上。`JavaScript` 的 `map` 函数可以实现便捷操作

测试数组：
`every` ：当且仅当全部的回调函数都返回 `true` 时，`every` 方法才返回 `true`，否则返回 `false`。
`some` ：如果有一项元素执行回调函数时，返回 `true`，`some` 方法返回 `true`；否则，`some` 方法返回 `false`

数组查找：
`find`： `find()` 方法返回数组中满足提供的测试函数的第一个元素的值。否则返回 `undefined`。
`filter`：`filter()` 方法创建一个新数组, 其包含通过所提供函数实现的测试的所有元素
`indexOf`：`indexOf()` 方法返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1。
`findIndex` ：`findIndex()` 方法返回数组中满足提供的测试函数的第一个元素的索引。否则返回-1。
`find` 和 `findIndex` 的区别是：`find` 返回元素本身，`findIndex` 返回元素索引

不要把 对象当作 `Map` ；因为对象的 `key` 必须是字符串，如果想映射为其他类型，他会默默转化为字符串，没有任何提示
`map` 是键值对的集合，`key` 可是是任意类型的值，甚至可以是对象

