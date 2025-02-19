//A doctor is striking body temp of a patient for a period of 7 days
//Write a program to keep track of daily body temp
//Get the average temp for the entire 7 days.
//The program should record the highest and the lowest body temp.


// stpe:

//stept1: capture daily temperature
//step2: get the everage
// stept 3: get the highest temp
// step : get the lowest temp

const tempRecords = {
    records: [],
    getTemperature(temp) {
        this.records.push(temp)
        return this.records

    },
    getAverage() {
        let sum = 0;
        for (i = 0; i < this.records.length; i++) {
            sum += this.records[i]
        }
        const average = sum / this.records.length;
        return average

    },
    getHighestTemp()  {
       let max = this.records[0];
       for (let i = 1; i < this.records.length; i++){
        if (this.records[i] > max) {
            max = this.records[i]
        }
       }
       return max;

    },
    getLowestTemperatures() {
        let min = this.records[0];
        for (let i = 1; i < this.records.length; i++) {
            if (this.records[i] < min) {
                min = this.records[i];
            }
        }
        return min;
        
    }
};


console.log(tempRecords.getTemperature(24))
console.log(tempRecords.getTemperature(30))
console.log(tempRecords.getTemperature(32))
console.log(tempRecords.getTemperature(22))
console.log(tempRecords.getTemperature(24))
console.log(tempRecords.getTemperature(27))
console.log(tempRecords.getTemperature(28))
console.log(tempRecords.getAverage());
console.log(tempRecords.getHighestTemp());
console.log(tempRecords.getLowestTemperatures());









