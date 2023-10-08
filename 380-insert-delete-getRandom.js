//SOLVED: time O(1), Space O(n)
class RandomizedSet {
  constructor() {
    //map will store value and index in array, so {value:index}
    this.map = {};
    // list will store values in array
    this.list = [];
  }

  insert(val) {
    //this checks if value is in our map, if it is already, return false
    if (this.map[val] !== undefined) {
      return false;
    }
    //if the value is not already in map, we add the value and index, which is length of list, to the map.
    this.map[val] = this.list.length;
    //push value to list and return true
    this.list.push(val);

    return true;
  }

  remove(val) {
    //if the vlue is not in map, return false
    if (this.map[val] === undefined) {
      return false;
    }
    //EX: list = [3, 5, 7, 2, 9]
    //map = {3: 0, 5: 1, 7: 2, 2: 3, 9: 4}
    //WE want to remove 7 which is at index 2

    //9 is last element and 2 is index

    //Variable lastElement will be last element of the list
    let lastElement = this.list[this.list.length - 1];
    //store the index of the value we want to remove into variable
    let index = this.map[val];

    // we want to swap the last element in list with value we want to remove
    //9 is replacing 7 in the list, so now have [3,4,9,2,9]
    this.list[index] = lastElement;
    //we now give this last element the index of value we to remove
    //9 in the map is having index changed to 2 so have {3:0,5:1,7:2,2:3,9:4}
    this.map[lastElement] = index;

    //now have[3,4,9,2]
    //the last element appears twice in list so pop the one on the end
    this.list.pop();
    //delete the value we want to remove from map
    //now have {3: 0, 5: 1, 2: 3, 9: 4}
    delete this.map[val];

    return true;
  }

  getRandom() {
    //use floor because want to include 0 index
    let randomIndex = Math.floor(Math.random() * this.list.length);
    //return random number in list
    return this.list[randomIndex];
  }
}
