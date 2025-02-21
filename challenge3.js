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
        return found;
    }
    function removeData() {
        this.dataStore.splice(found, 1);
        this.listSize - 1;
        return this.dataStore;
    }
    

}
const createData = new List();
console.log(createData.addData('John'));
console.log(createData.addData('Mary'));
console.log(createData.addData('Bruce'));
console.log(createData.listSize)
console.log(createData.findData('Mary'))
console.log(createData.removeData())