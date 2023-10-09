//SOLVED: Time O(n) Space O(1)
function canCompleteCircuit(gas, cost) {
  let totalGas = 0;
  let totalCost = 0;
  let start = 0;
  let tank = 0;

  for (let i = 0; i < gas.length; i++) {
    //totalGas and totalCost will both start with first element in their repsctive array
    totalGas += gas[i];
    totalCost += cost[i];
    tank += gas[i] - cost[i];
    //amount in tank is the difference
    // If the tank goes negative, then start i cannot be the starting station,
    // reset the starting station and tank.
    //in this for loop we want to make sure diffrence between totalGas and totalCost is positive number
    //it doesnt matter if start = nums.length because the for loop is finnieshed if we get to that point. It just confirms it is impossible to make the circuit.
    if (tank < 0) {
      start = i + 1;
      tank = 0;
    }
  }

  // If the total gas is less than the total cost, then it's impossible to complete the circuit.
  if (totalGas < totalCost) {
    return -1;
  }

  return start;
}
