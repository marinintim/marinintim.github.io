algosFn.dfs = function(graph) {


    function step(n) {
        if (n.isExplored) {
           thought('Already explored!');
           return null;
        }
        n.isExplored = true;
        n.node.alpha = 0.5

        if (n.node.type == 'stone') {
            thought('It\'s a stone...');
            n.node.alpha = 0.8
            return null;
        } 
        if (n.node.type === 'can') {
            thought('I\'ve found a way, look at it!');
            return n;
        }
        
        var neighbours = n.getNeighbours().filter(function(x) { return !!x && !x.isExplored }).map(function(x) { x && (x.cameFrom = n); return x })

        stack.push.apply(stack, neighbours)

        return null
     }

     function init() {
         return new Promise(function(res, rej) {
             setTimeout(function iter() {
                var n = stack.pop(), ret = step(n)
                if (ret) {
                    console.log('iter ended')
                    res(ret)
                } else if (stack.empty()) rej(ret)
                else {
                    setTimeout(iter, 50)
                }
            }, 50)
         });
     }

     stack.push(getHero(graph))
     init().then(drawPath)
}
