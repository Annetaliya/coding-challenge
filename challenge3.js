//Given an empty list create a funtion to add an element into the list
//the list can store any data type
//remove an eement to the list
//find a given element in the list

const array = [];

function List() {
    this.dataStore = [];
    this.listSize = 0;
    this.addData = addData;
    this.removeData = removeData;
    this.findData = findData;

    function addData(element) {
        this.dataStore.push(element);
        this.listSize++;
        return this.dataStore
    }
    function findData(element) {
        const found = this.dataStore.indexOf(element);
        if (found > 0) {
            return found
        }
        return -1;
    }
    function removeData(element) {
        const foundAt = this.findData(element)
        this.dataStore.splice(foundAt, 1);
        this.listSize--;
        return this.dataStore;
        
    }
    

}
const createData = new List();
console.log(createData.addData('John'));
console.log(createData.addData('Mary'));
console.log(createData.addData('Bruce'));

console.log(createData.removeData('Mary'))