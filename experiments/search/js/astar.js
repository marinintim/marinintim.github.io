algosFn.astar = function(graph) {
    var target = graph.filter(function(i) { return i.node.type == 'can' })[0]
    var pqueue = pQueue()

    function heuristic(from) {
        return Math.abs(target.position.x - from.position.x) + Math.abs(target.position.y - from.position.y)
    }

    function step(n) {

        n.isExplored = true
        n.node.alpha = 0.5

        if (n.node.type == 'stone') {
            n.node.alpha = 0.8
            thought('It\'s a stone...');
            return null;
        } 

        if (n.node.type === 'can') {
            thought('I\'ve found a way, look at it!');
            return n;
        }
        
        n.getNeighbours()
            .filter(function(x) { return !!x && !x.isExplored && x.node.type !== 'stone' })
            .map(function(x) {
                var rating = n.len + 1 + heuristic(x)
                if (x.len && x.len < rating) return x
                x.cameFrom = n
                x.len = n.len + 1
                return x
            })
            .forEach(function(x) { x && pqueue.push({v: x, p: x.len + heuristic(x) - 1 }) })
        return null
     }

     function init() {
         return new Promise(function(res, rej) {
             setTimeout(function iter() {
                var n = pqueue.pop(), ret = step(n)
                if (ret) {
                    console.log('iter ended')
                    res(ret)
                } else if (pqueue.empty()) {
                    thought('I could not find the way, sorry...')
                }
                else {
                    setTimeout(iter, 50)
                }
            }, 50)
         });
     }

     var h = getHero(graph)
     h.len = 0
     pqueue.push({v: h, p: 1 })
     init().then(drawPath).catch(function(){})
}
