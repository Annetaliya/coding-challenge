//Given an empty list create a funtion to add an element into the list
//the list can store any data type
//remove an eement to the list
//find a given element in the list
//insert an element in the list

const array = [];

function List() {
    this.dataStore = [];
    this.listSize = 0;
    this.addData = addData;
    // this.removeData = removeData;
    // this.findData = findData;
    this.insertAtIndex = insertAtIndex

    function addData(element) {
        this.dataStore.push(element);
        this.listSize++;
        return this.dataStore
    }

    function insertAtIndex(index, element) {
        if (this.listSize === 0) {
            index = this.dataStore.length
            this.dataStore.splice(index, 0, element);
            this.listSize++;
            return this.dataStore
        }

        this.dataStore.splice(index, 0, element);
        this.listSize++;
        return this.dataStore;
    }
    //     if (index > this.listSize) {
    //         index = this.listSize;
    //         this.dataStore.splice(index, 0, element);
    //         this.listSize++;
    //     } else {
    //         this.dataStore.splice(index, 0, element);
    //         this.listSize++
    //     }
        
    //     return this.dataStore;
    // }
    
    // function findData(element) {
    //     const found = this.dataStore.indexOf(element);
    //     if (found > 0) {
    //         return found
    //     }
    //     return -1;
    // }
    // function removeData(element) {
    //     const foundAt = this.findData(element)
    //     this.dataStore.splice(foundAt, 1);
    //     this.listSize--;
    //     return this.dataStore;
        
    // }
    

}
const createData = new List();
// createData.addData('John');
// createData.addData('Mary');
// createData.addData('Bruce');
createData.insertAtIndex(3, 'Snow');
console.log(createData);
console.log(createData.listSize)
//console.log(createData.insertAtIndex(6, 'Wayne'))
//console.log(createData.listSize)