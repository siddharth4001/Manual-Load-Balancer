const http = require('http');
const roundRobin = require('./roundRobin');
const leastLoad = require('./leastLoad');
const serverConfig = require('./config.json').servers;

const servers = serverConfig.map( server => ({
    ...server
}))

const loadBalancingAlgorithm = 'roundRobin';

const server = http.createServer((req, res) => {
    if(loadBalancingAlgorithm === 'roundRobin'){
        roundRobin(servers, req, res)
    }
    else{
        res.writeHead(500);
        res.end('Load Balancing algorith is not supported');
    }
})

server.listen(3000, () => {
    console.log('load balancer running on port 3000');
})