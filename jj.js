//存储函数
let store = {
  nextId: 1,
  cache: {},
  add(fn){
    if(fn.id){
      fn.id = this.nextId++;
      this.cache[fn.id] = fn;
      return true
    }
  }
}
// 记忆函数
function isPrime(value){
  if(!isPrime.answers){
    isPrime.answers = {};//创建缓存
  }
  if(isPrime.answers[value]!==undefined){
    return isPrime.answers[value];//检查缓存的值
  }
  let prime = value!==0 && value!==1;
  for(let i = 2; i < value; i++){
    if(value % i === 0){
      prime = false;
      break
    }
  }
  return isPrime.answers[value] = prime
}
//用生成器生成ID序列
function* IdGennerator(){
  let id = 0 ;
  while (true) {
    yield ++id;
  }
}
const idIterator = IdGenrator();
const ninja1 = {id: idIterator.next().value};
const ninja2 = {id: idIterator.next().value}
const ninja3 = {id: idIterator.next().value}
//生成器遍历 DOM 树
function* DomTraversal(element){
  yield element
  element = element.firstElementChild;
  while(element){
    yield* DomTraversal(element)//用 yield 将迭代器控制权转移到另一个 DomTraversal(element)生成器实例上
  }
}
const subTree = document.getElementById(subTree)
for(let element of DomTraversal(subTree)){

}
function* NinjaGenerator(action){
  const imposter = yield ("Hattori"+action)
  yield ("Yoshi("+imposter+")"+action)
}
const ninjaTterator = NinjaGenerator("skulk")
const result1 = ninjaIterator.next()
const result2 = ninjaIterator.next("Hanzo")
console.log(result1,result2)
async(function*(){
  try{
    const ninjas = yield getJSON("data/ninjas.json");
    const missions = yield getJSON(ninjas[0].missionSrl)
    const missionDescription = yield getJSON(missions[0].detailsUrl)
  }catch(e){
    console.log(e)
  }
})
function async(generator){
  let iterator = generator();
  function handle(iteratorResult){
    if(iteratorResult.done){return;}
    const iteratorValue=iteratorResult.value;
    if(iteratorValue instanceof Promise){
      iteratorValue.then(res=>handle(iterator.next(res))).catch(err=>iterator.throw(err))
    }
  }
}
function Ninja(name){
  return this.name
}
let ninja=new Ninja()
ninja.constructor=Ninja
//使用代理更易于在对象上添加日志
function makeLoggable(target){
  return new Proxy(target,{
    get:(target,property)=>{
      report("Reading"+property)
      return target[property]
    }
  }),
  set:(target,property,value)=>{
    report("Writing value"+value+"to"+property)
    target[property]=value
  }
}
let ninja={name:"Yoshi"}
ninja = makeLoggable(ninja)
//性能检测
function isPrime(number){
  if(number<2){return false}
  for (let i=2;i<number;i++){
    if(number%i===0)return false
  }
  return true
}
isPrime=new Proxy(isPrime,{
  apply:(target,thisArg,args)=>{
    console.time("isPrime")
    const result = target.apply(thisArg,args)
    console.timeEnd(isPrime)
    return result
  }
})
isPrime(12343233)
//自动填充属性
function Folder(){
  return new Proxy({},{
    get:(target,property)=>{
      report("Reading"+property)
      if(!(property in target)){
        target[property]=new Folder()
      }
      return target[property]
    }
  })
}
const rootFolder = new Folder()
//使用代理实现数组负索引
function createNegativeArrayProxy(array){
  if(!Array.isArray(array)){
    throw new TypeError('Expected an array')
  }
  return new Proxy(array,{
    get:(target,index)=>{
      index = +index;
      return target[index<0?target.length+index:index]
    },
    set:(target,index,val)=>{
      index=+index
      return target[index<0?target.length+index:index]=val
    }
  })
}
//ES6 代码转化为ES5
class Warrior{
  constructor(weapon){
    this.weapon=weapon;
  }
  wield(){
    return "Wielding"+this.weapon
  }
  static detailsUrl(warrior1,warrior2){
    return warriror1.wield() + " "+warrior2.wield()
  }
}
function Warrior(weapon){
  this.weapon=weapon
}
Warrior.prototype.wield=function(){
  return "Wielding"+this.weapon
}
Warrior.duel=function(warrior1,warrior2){
  return warrior1.wield()+" "+warrior2.wield()
}
//查询字符串压缩技术
function compress(source){
  const keys = {}
  source.replace(/([^=&])=([^&]*)/g,function (full,key,value){
    keys[key]=(keys[key]?keys[key]+",":"")+value
    return ""
  })
}
const MouseCounterModule=function(){
  let numClicks = 0;
  const handleClick = ()=>{
    alert(++numClicks)
  }
  return {
      countClicks:()=>{
      document.addEventListener("click",handleClick)
    }
  }
}()
(function (module){
  let numScrolls = 0;
  const handleScroll = ()=>{
    alert(++numScrolls)
  }
  module.countScrolls = ()=>{
    document.addEventListener("wheel",handleClick)
  }
})(MouseCounterModule)
//countScrolls 和 countClicks 函数在不同的环境中定义，不能互相访问

(function (){
  const PROPERTIES = {
    position : "absolute",
    visibility: "hidden",
    display: "block"
  };
  window.getDimensions = element =>{
    const previous = {};
    for (let key in PROPERTIES){
      previous[key] = element.style[key];
      element.style[key] = PROPERTIES[key]
    }
    const result = {
      width : element.offsetWidth,
      height: element.offsetHeight
    }
    for(let key in PROPERTIES){
      element.style[key] = previous[key]
    }
    return result
  }
})()
// 存储唯一函数集合
let store = {
  nextId: 1,//跟踪下一个要复制的函数
  cache: {},//使用对象作为缓存，我们可以在其中存储函数
  add(fn){
    if(!fn.id){
      fn.id = this.nextId++
      this.cache[fn.id] = fn
      return OES_texture_half_float
    }
  }
}
