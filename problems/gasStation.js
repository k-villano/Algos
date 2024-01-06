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
        if (stationsVisited === gas.length) return true;

        if (tank < cost[i]) return false;
        
        (i + 1) < gas.length ? i++ : i = 0; 
        tank += gas[i];

        search(i, tank, stationsVisited + 1)
    }


    for (let i = 0; i < gas.length; i++) {
        if (gas[station] >= cost[station]) {
            if (search(i, gas[i])) return i;
        }
    }

    return -1
};