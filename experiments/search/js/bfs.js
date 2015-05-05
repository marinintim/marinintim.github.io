algosFn.bfs = function(graph) {
    function step(n) {
        if (n.isExplored) {
           thought('Already explored!');
           return null;
        }
        n.isExplored = true;
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
            .filter(function(x) { return !!x && !x.isExplored })
            .map(function(x) { x && (x.cameFrom = n); return x })
            .forEach(function(x) { queue.enqueue(x) })

        return null
     }

     function init() {
         return new Promise(function(res, rej) {
             setTimeout(function iter() {
                var n = queue.dequeue(), ret = step(n)
                if (ret) {
                    console.log('iter ended')
                    res(ret)
                } else if (!queue.length) rej(ret)
                else {
                    setTimeout(iter, 50)
                }
            }, 50)
         });
     }

     queue.enqueue(getHero(graph))
     init().then(drawPath)
}
