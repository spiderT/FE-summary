# 设计模式

- [设计模式](#设计模式)
  - [1. 常用设计模式，以及应用场景](#1-常用设计模式以及应用场景)
    - [1. 单例（Singleton）模式](#1-单例singleton模式)
    - [2. 原型（Prototype）模式](#2-原型prototype模式)
    - [3. 工厂方法（Factory Method）模式](#3-工厂方法factory-method模式)
    - [4. 抽象工厂（Abstract Factory）模式](#4-抽象工厂abstract-factory模式)
    - [5. 建造者（Builder）模式](#5-建造者builder模式)
    - [6. 代理（Proxy）模式](#6-代理proxy模式)
    - [7. 适配器（Adapter）模式](#7-适配器adapter模式)
    - [8. 桥接（Bridge）模式](#8-桥接bridge模式)
    - [9. 装饰（Decorator）模式](#9-装饰decorator模式)
    - [10. 外观（Facade）模式](#10-外观facade模式)
    - [11. 享元（Flyweight）模式](#11-享元flyweight模式)
    - [12. 组合（Composite）模式](#12-组合composite模式)
    - [13. 模板方法（TemplateMethod）模式](#13-模板方法templatemethod模式)
    - [14. 策略（Strategy）模式](#14-策略strategy模式)
    - [15. 命令（Command）模式](#15-命令command模式)
    - [16. 职责链（Chain of Responsibility）模式](#16-职责链chain-of-responsibility模式)
    - [17. 状态（State）模式](#17-状态state模式)
    - [18. 观察者（Observer）模式](#18-观察者observer模式)
    - [19. 中介者（Mediator）模式](#19-中介者mediator模式)
    - [20. 迭代器（Iterator）模式](#20-迭代器iterator模式)
    - [21. 访问者（Visitor）模式](#21-访问者visitor模式)
    - [22. 备忘录（Memento）模式](#22-备忘录memento模式)
    - [23. 解释器（Interpreter）模式](#23-解释器interpreter模式)
  - [2. vue/react中应用什么设计模式](#2-vuereact中应用什么设计模式)

## 1. 常用设计模式，以及应用场景

> 设计模式的六大原则

1. 开闭原则（Open Close Principle）—— 对扩展开放，对修改关闭。在程序需要进行拓展的时候，不能去修改原有的代码，实现一个热插拔的效果。简言之，是为了使程序的扩展性好，易于维护和升级。想要达到这样的效果，我们需要使用接口和抽象类。

2. 里氏代换原则（Liskov Substitution Principle）—— 里氏代换原则是面向对象设计的基本原则之一。 里氏代换原则中说，任何基类可以出现的地方，子类一定可以出现。LSP 是继承复用的基石，只有当派生类可以替换掉基类，且软件单位的功能不受到影响时，基类才能真正被复用，而派生类也能够在基类的基础上增加新的行为。里氏代换原则是对开闭原则的补充。实现开闭原则的关键步骤就是抽象化，而基类与子类的继承关系就是抽象化的具体实现，所以里氏代换原则是对实现抽象化的具体步骤的规范。

3. 依赖倒转原则（Dependence Inversion Principle）—— 这个原则是开闭原则的基础，具体内容：针对接口编程，依赖于抽象而不依赖于具体。

4. 接口隔离原则（Interface Segregation Principle）—— 使用多个隔离的接口，比使用单个接口要好。它还有另外一个意思是：降低类之间的耦合度。由此可见，其实设计模式就是从大型软件架构出发、便于升级和维护的软件设计思想，它强调降低依赖，降低耦合。

5. 迪米特法则，又称最少知道原则（Demeter Principle）—— 一个实体应当尽量少地与其他实体之间发生相互作用，使得系统功能模块相对独立。

6. 合成复用原则（Composite Reuse Principle）—— 尽量使用合成/聚合的方式，而不是使用继承。

> 23种设计模式

### 1. 单例（Singleton）模式

某个类只能生成一个实例，该类提供了一个全局访问点供外部获取该实例，其拓展是有限多例模式。

简介：单例模式是一种常用的模式，我们在多次引入其他模块时，并不需要每次都创建一个新的模块对象，复用之前创建过的对象不仅能减少内存的开销，同时也可以体验共享对象带来的便利。简单来说就是使用闭包持久保存函数上一次的执行结果，在之后的调用中直接返回。  
例如js 中模块加载的方式：require、import都使用到了该模式.  

```js
const getSingle = function (fn) {
  // 通过闭包保存创建过的对象
  let result;
  return function () {
    return result || (result = fn.apply(this, arguments));
  };
};

const createPerson = getSingle((name) => name);

const person1 = createPerson("Jack");
const person2 = createPerson("Merry");

console.log(person1, person2); // 'Jack'  'Jack'
```

### 2. 原型（Prototype）模式

将一个对象作为原型，通过对其进行复制而克隆出多个和原型类似的新实例。  

```js
const myCar = {
  name: "Ford Escort",

  drive() {
    console.log("Weeee. I'm driving!");
  },

  panic() {
    console.log("Wait. How do you stop this thing?");
  },
};

const yourCar = Object.create(myCar);
console.log(yourCar.name);
```

### 3. 工厂方法（Factory Method）模式

定义一个用于创建产品的接口，由子类决定生产什么产品。  

```js
function createPerson(name, age) {
  return {
    name,
    age,
    job(v) {
      console.log(`${this.name} is a ${v}`);
    },
  };
}

const p1 = createPerson("Andy", 20);
const p2 = createPerson("Candy", 35);
p1.job("FE"); // Andyis a FE
p2.job("RD"); // Candyis a RD
```

### 4. 抽象工厂（Abstract Factory）模式

提供一个创建产品族的接口，其每个子类可以生产一系列相关的产品。

### 5. 建造者（Builder）模式

将一个复杂对象分解成多个相对简单的部分，然后根据不同需要分别创建它们，最后构建成该复杂对象。

### 6. 代理（Proxy）模式

为某对象提供一种代理以控制对该对象的访问。即客户端通过代理间接地访问该对象，从而限制、增强或修改该对象的一些特性。

例如 防抖动函数（debounce 常用于控制用户输入后回调函数触发的时机），节流函数（throttle 常用于控制resize、scroll等事件的触发频率）.  

```js
function throttle(fn, delay = 1000) {
  let flag = true; // 是否已有定时器
  let timer = null;
  return function (...args) {
    if (!flag) return;
    flag = false;
    clearTimeout(timer); // 清除
    timer = setTimeout(() => {
      fn.apply(this, args);
      flag = true;
    }, delay);
  };
}
// 处理函数
function handle() {
  console.log(Math.random());
}
// 滚动事件
window.addEventListener("scroll", throttle(handle));
```

### 7. 适配器（Adapter）模式

将一个类的接口转换成客户希望的另外一个接口，使得原本由于接口不兼容而不能一起工作的那些类能一起工作。

### 8. 桥接（Bridge）模式

将抽象与实现分离，使它们可以独立变化。它是用组合关系代替继承关系来实现，从而降低了抽象和实现这两个可变维度的耦合度。

### 9. 装饰（Decorator）模式

动态的给对象增加一些职责，即增加其额外的功能。

### 10. 外观（Facade）模式

为多个复杂的子系统提供一个一致的接口，使这些子系统更加容易被访问。

### 11. 享元（Flyweight）模式

运用共享技术来有效地支持大量细粒度对象的复用。

### 12. 组合（Composite）模式

将对象组合成树状层次结构，使用户对单个对象和组合对象具有一致的访问性。

### 13. 模板方法（TemplateMethod）模式

定义一个操作中的算法骨架，而将算法的一些步骤延迟到子类中，使得子类可以不改变该算法结构的情况下重定义该算法的某些特定步骤。

### 14. 策略（Strategy）模式

定义了一系列算法，并将每个算法封装起来，使它们可以相互替换，且算法的改变不会影响使用算法的客户。

一个基于策略模式的程序至少由两部分组成：  

第一个部分是一组策略类，策略类封装了具体的算法，并负责具体的计算过程。  
第二个部分是环境类Context，Context接受客户的请求，随后把请求委托给某一个策略类。要做到这点，说明Context 中要维持对某个策略对象的引用.  

策略模式可以用于组合一系列算法，也可用于组合一系列业务规则.  

```js
// 不同绩效有不同的奖金策略： 每个策略接受同类型的参数返回相同的结果
const strategies = {
  S(salary) {
    return salary * 3;
  },
  A(salary) {
    return salary * 2;
  },
  B(salary) {
    return salary;
  },
  C(salary) {
    return 0;
  },
};

const calculateBonus = (salary, strategy) => strategies[strategy](salary);

console.log(calculateBonus(10000, "S")); // 30000
console.log(calculateBonus(10000, "C")); // 0
```

### 15. 命令（Command）模式

将一个请求封装为一个对象，使发出请求的责任和执行请求的责任分割开。  

命令（command）指的是一个执行某些特定事情的指令  

核心: 命令中带有execute执行、undo撤销、redo重做等相关命令方法，建议显示地指示这些方法名  

```js
function IncrementCommand() {
  this.val = 0; // 当前值
  this.stack = []; // 命令栈
  this.stackPosition = -1; // 栈指针位置
}

IncrementCommand.prototype = {
  constructor: IncrementCommand,

  // 执行
  execute() {
    this.clearRedo();

    // 定义执行的处理
    const command = () => (this.val += 1);

    // 执行并缓存起来
    command();
    this.stack.push(command);
    this.stackPosition++;
    this.getValue();
  },

  canUndo() {
    return this.stackPosition >= 0;
  },

  canRedo() {
    return this.stackPosition < this.stack.length - 1;
  },

  // 撤销
  undo() {
    if (!this.canUndo()) {
      return;
    }
    this.stackPosition--;
    // 命令的撤销，与执行的处理相反
    const command = () => (this.val -= 1);
    // 撤销后不需要缓存
    command();
    this.getValue();
  },

  // 重做
  redo() {
    if (!this.canRedo()) {
      return;
    }

    // 执行栈顶的命令
    this.stack[++this.stackPosition]();
    this.getValue();
  },

  // 在执行时，已经撤销的部分不能再重做
  clearRedo() {
    this.stack = this.stack.slice(0, this.stackPosition + 1);
  },

  // 获取当前值
  getValue() {
    console.log(this.val);
  },
};

const incrementCommand = new IncrementCommand();

// 模拟事件触发，执行命令
const eventTrigger = {
  // 某个事件的处理中，直接调用命令的处理方法
  increment: function () {
    incrementCommand.execute();
  },

  incrementUndo: function () {
    incrementCommand.undo();
  },

  incrementRedo: function () {
    incrementCommand.redo();
  },
};

eventTrigger["increment"](); // 1
eventTrigger["increment"](); // 2
eventTrigger["incrementUndo"](); // 1
```

### 16. 职责链（Chain of Responsibility）模式

把请求从链中的一个对象传到下一个对象，直到请求被响应为止。通过这种方式去除对象之间的耦合。

### 17. 状态（State）模式

允许一个对象在其内部状态发生改变时改变其行为能力。

### 18. 观察者（Observer）模式

也叫发布-订阅模式  
多个对象间存在一对多关系，当一个对象发生改变时，把这种改变通知给其他多个对象，从而影响其他对象的行为。  

例如浏览器的dom事件通知机制(document.addEventListener)，以及vue框架中数据改变时自动刷新dom的双向绑定机制都是基于该模式  

```js
const Observer = function () {
  const clientList = {}; // 订阅者数组

  // 订阅
  this.listen = function (type, cb) {
    if (!clientList[type]) {
      clientList[type] = [];
    }

    // 收集订阅者的处理
    typeof cb === "function" && clientList[type].push(cb);
  };

  // 取消订阅
  this.remove = function (type, cb) {
    const fns = clientList[type];
    if (!cb) {
      clientList[type] = [];
    } else if (fns && fns.length) {
      clientList[type] = fns.filter((fn) => fn !== cb);
    }
  };

  // 通知订阅者
  this.trigger = function () {
    const key = [].shift.call(arguments),
      fns = clientList[key];

    if (fns && fns.length) {
      fns.map((fn) => fn.apply(this, arguments));
    }
  };
};

const observer = new Observer();

observer.listen("msg", function getMsg() {
  const value = [].pop.call(arguments);
  console.log(value + "来信了");
});

observer.trigger("msg", "Andy"); // Andy来信了
observer.trigger("msg", "Cindy"); // Cindy来信了
```

### 19. 中介者（Mediator）模式

中介者模式主要用于一个系统中存在大量的对象，而且这些大量的对象需要互相通信，因为两个对象需要通信，一个对象必须要持有另一个对象，这样就会导致，系统里每个对象都互相引用，会引起混乱，中介者把所有的对象都统一管理起来，其他的对象通过中介者去和别的对象通信。  

定义一个中介对象来简化原有对象之间的交互关系，降低系统中对象间的耦合度，使原有对象之间不必相互了解。使网状的多对多关系变成了相对简单的一对多关系（复杂的调度处理都交给中介者）  

```js
// 排名方法
const A = {
  score: 10,
  changeTo: function (score) {
    this.score = score;
    // 通过中介者获取
    rankMediator(A);
  },
};

const B = {
  score: 20,
  changeTo: function (score) {
    this.score = score;
    rankMediator(B);
  },
};

const C = {
  score: 30,
  changeTo: function (score) {
    this.score = score;
    rankMediator(C);
  },
};

// 中介者，计算排名
function rankMediator(person) {
  const scores = [A.score, B.score, C.score].sort(function (a, b) {
    return a < b;
  });
  console.log(scores.indexOf(person.score) + 1, scores);
}

A.changeTo(100); // 1 [ 100, 30, 20 ]
B.changeTo(200); // 1 [ 200, 100, 30 ]
C.changeTo(50); // 3 [ 200, 100, 50 ]
```

### 20. 迭代器（Iterator）模式

提供一种方法来顺序访问聚合对象中的一系列数据，而不暴露聚合对象的内部表示。

迭代器模式简单来说就是将迭代过程从业务逻辑中抽离，简化开发，其分为内迭代和外迭代。目前许多语言都已经内置了迭代器的实现，如ES5中的forEach函数就是一种内迭代的实现。  

```js
// 封装 对象和数组的遍历
function each(obj, cb) {
  let value;

  if (Array.isArray(obj)) {
    for (let i = 0; i < obj.length; ++i) {
      value = cb.call(obj[i], i, obj[i]);

      if (value === false) {
        break;
      }
    }
  } else {
    for (let i in obj) {
      value = cb.call(obj[i], i, obj[i]);

      if (value === false) {
        break;
      }
    }
  }
}
```

### 21. 访问者（Visitor）模式

在不改变集合元素的前提下，为一个集合中的每个元素提供多种访问方式，即每个元素有多个访问者对象访问。

### 22. 备忘录（Memento）模式

在不破坏封装性的前提下，获取并保存一个对象的内部状态，以便以后恢复它。

### 23. 解释器（Interpreter）模式

提供如何定义语言的文法，以及对语言句子的解释方法，即解释器。











## 2. vue/react中应用什么设计模式

参考：[react/vue中的设计模式](https://zhuanlan.zhihu.com/p/270380299)
