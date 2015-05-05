// Simple stack based on linked list
var stack = (function() {
    var head = null
    
    function pushOne(obj) {
        return head = {
            val: obj,
            tail: head
        }
    }

    function isEmpty() { return head == null }

    function push() {
        return Array.prototype.map.call(arguments, pushOne)
    }

    function pop() {
        var ret = null
        if (head !== null) {
            ret = head.val
            head = head.tail
        }
        return ret
    }

    return { push: push, pop: pop, empty: isEmpty }})()

//dsQueue: github.com/marinintim/dsqueue
var dsQueue = function() {
  var head = null,
      tail = null,
      len = 0

  function enqueue(obj) {
    var node = { val: obj, next: null }
    
    if (len > 0) {
      tail.next = node
    }    
    else {
      head = node
    }
    
    tail = node
    len += 1

    return obj
  }

  function dequeue(obj) {
    var res

    if (head != null) {
      res = head.val
      head = head.next
      len -= 1
    }

    return res
  }

  function peak() {
      return head && head.val
  }

  var interface = {
    enqueue: enqueue,
    dequeue: dequeue,
    peak: peak,
    examine: function() {
      var arr = [],
          n = head

      while (n !== null) {
        arr.push(n.val)
        n = n.next
      }

      return arr
    },
  }
  Object.defineProperty(interface, 'length', { get: function() { return len; } })
  return interface
}

var queue = dsQueue()

var pQueue = function() {
    var head = null
    
    function splice(it, prev, next) {
        if (next == null) {
            prev.next = it
            it.next = null
            return
        }

        if (next.p > it.p) {
            prev.next = it
            it.next = next
            return
        }
        
        return function() { splice(it, next, next.next) }
    }

    function push(o) {
        if (head == null) {
            o.next = null
            head = o
        }
        else {
            if (head.p > o.p) {
                o.next = head
                head = o
            }
            else {
                var th = splice(o, head, head.next)
                while(typeof th === 'function') th = th()
            }
        }
    }

    function pop() {
        if (head == null) return head
        var r = head.v
        head = head.next
        return r
    }

    function empty() { return head == null }
    function examine() { var n = head; while (n !== null) { console.log(n); n = n.next; } }
    return {
        push: push,
        pop: pop,
        empty: empty,
        examine: examine
    }
    }
