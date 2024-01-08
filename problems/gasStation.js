/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
const canCompleteCircuit = (gas, cost) => {
    // start iterating a determine if you want to see if its a loop
      // if the cost is more than the gas you definetly dont
      // if you do continue to look if it work
        // if it doesnt continue outer most iteration
        // if it does 
        const search = (j, tank, stationsVisited = 0) => {
            // console.log(gas.length)
            // console.log(stationsVisited)
            // if (tank < 0) return false;
            if (stationsVisited === gas.length) return true;
    
            if (tank < cost[j]) return false;
            
            tank -= cost[j];

            if (tank < 0) return false;

            
            (j + 1) < gas.length ? j++ : j = 0; 
            tank += gas[j];
            // tank -= cost[j];
            
    
            return search(j, tank, stationsVisited + 1)
        }
    
    
        for (let i = 0; i < gas.length; i++) {
            if (gas[i] >= cost[i]) {
                console.log(i)
                console.log(search(i, gas[i]))
                if (search(i, gas[i])) return i;
            }
        }
    
        return -1
    };



const gas1 = [1,2,3,4,5];
const cost1 = [3,4,5,1,2];

const gas2 = [2,3,4];
const cost2 = [3,4,3];


console.log(canCompleteCircuit(gas2, cost2));
console.log(canCompleteCircuit(gas1, cost1));

var canCompleteCircuit2 = function(gas, cost) {
    let currGas = 0, totalGas = 0, startingPos = 0

    for(let i=0; i<gas.length; i++) {
        let dif = gas[i] - cost[i]
        
        currGas += dif
        totalGas += dif

        if(currGas < 0) {
            currGas = 0
            startingPos = i + 1
        }
    }

    if(totalGas < 0) return -1
    else return startingPos
}

// makin changedssssss