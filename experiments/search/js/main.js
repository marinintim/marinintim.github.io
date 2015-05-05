var arrToObjMap = function(arr, fn) {
    return arr.reduce(typeof fn === 'function' ?
            function(obj, name) { obj[name] = fn(name); return obj } :
            function(obj, name, pos) { obj[name] = fn[pos]; return obj },
            Object.create(null))
}

var algos = ['dfs', 'bfs', 'astar']
var algosFn = Object.create(null)

var isStarted = false

var containers = algos.map(function(name) { return document.querySelector('.' + name + '-container') })

var containerByName = arrToObjMap(algos, containers)

var renderer = PIXI.autoDetectRenderer(640, 420, { backgroundColor: 0x1099bb })

algos.forEach(function(n) {
    document.querySelector('.' + n + '-run').onclick = function() {
        containerByName[n].appendChild(renderer.view)
        runAlgo(n, algosFn[n])
        if (!isStarted) {
           isStarted = true
           tick()
        } 
    }
})

var currentAlgo = null

function tick() {
    if (currentAlgo) {
        currentAlgo.renderer.render(currentAlgo.stage)
        requestAnimationFrame(tick)
    }
}

/* Textures */
var textures = arrToObjMap(['can', 'hero', 'grass', 'stone', 'dot'], function(n) {
    return new PIXI.Texture.fromImage(n + '.png')
})

var make = function(kind) {
    var s = new PIXI.Sprite(textures[kind])
    s.width = 32
    s.height = 32

    s.type = kind
    return s
}

var coordsToPos = function(x, y) {
    return x * 12 + y
}

var graph2stage = function(graph) {
    var st = new PIXI.Container()
    st.x = 0
    st.y = 0

    graph.forEach(function (n) {
        n.node.position.x = n.position.x * 32
        n.node.position.y = n.position.y * 32 - 32
        st.addChild(n.node)
        
    })

    return st
}

var heroPos = {}

var getHero = function(graph) {
    return graph[coordsToPos(heroPos.x, heroPos.y)]
} 

var drawPath = function(node) {
    console.log('drawing path');
    var s = make('dot')
    s.position = node.node.position
    stage.addChild(s)
    if (node.cameFrom) setTimeout(function(){drawPath(node.cameFrom)}, 50);
}

var generateGraph = function() {
    var totalNeeded = 20 * 12
    var graph = []

    for (var x = 19; x >= 0; x--) {
        for (var y = 11; y > 0; y--) {
            graph[coordsToPos(x, y)] = {
                node: make('grass'),
                position: {
                    x: x,
                    y: y
                },
                getNeighbours: (function(x, y) {
                    var neighbours = []
                        return function() {
                            if (!neighbours.length) {
                                if (x > 0) neighbours.push(graph[coordsToPos(x - 1, y)]) //left
                                if (x < 19) neighbours.push(graph[coordsToPos(x + 1, y)]) // right
                                if (y > 0) neighbours.push(graph[coordsToPos(x, y - 1)]) // top
                                if (y < 11) neighbours.push(graph[coordsToPos(x, y + 1)]) // bottom
                            }

                            return neighbours
                        }
                    })(x, y)
            }
        }
    }

    for (var i = 50; i > 0; i--) {
        var n = graph[Math.floor(Math.random()*19*11 + 12)]
        n && (n.node = make('stone'))
    }

    var specialObjects = [make('can'), make('hero')]

    while (specialObjects.length) {
        var n = graph[Math.floor(Math.random()*20*12)]
        if (n && n.node && n.node.type === 'grass') {
            n.node = specialObjects.pop()
            if (n.node.type == 'hero') heroPos = n.position
        }
    }

    return graph
}

var thoughtContainer = new PIXI.Container()
    thoughtContainer.x = 10
    thoughtContainer.y = 380

var thought = function(th) {
    thoughtContainer.removeChildren()
    thoughtContainer.addChild(new PIXI.Text(th))
}

var runAlgo = function(name, algoFn) {
    var graph = generateGraph()
    stage = graph2stage(graph)
    stage.addChild(thoughtContainer)
    thought('Let\'s get it started in here')
    currentAlgo = { renderer: renderer, stage: stage }    

    algoFn(graph)
}

