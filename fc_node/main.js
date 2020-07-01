// 큐 먼저 들어간게 먼저 나온다. FIFO
console.log("Queue")
const queue = []
queue.push(1)
queue.push(2)
console.log(queue)
const r = queue.shift()
console.log(r)
const r2 = queue.shift()
console.log(r2)
console.log("---------------")
// 스택 나중에 들어간게 먼저 나온다. LIFO
console.log("Stack")
const stack = []
stack.push(1)
stack.push(2)
console.log(stack)
var s = stack.pop()
console.log(s)
var s2 = stack.pop()
console.log(s2)