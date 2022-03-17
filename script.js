const instancesOfClass = new Set();

class Worker {
    #experience = 1.2;
    constructor(fullName, dayRate, workingDays) {
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
        instancesOfClass.add(this);
    }
    showSalary() {
        return this.dayRate * this.workingDays;
    }
    showSalaryWithExperience() {
        return this.dayRate * this.workingDays * this.#experience;
    }
    set setExperience(value) {
        this.#experience = value;
    }
    get getExperience() {
        return this.#experience;
    }

}

const worker1 = new Worker(`John Johnson`, 28, 28);
const worker2 = new Worker(`Peter Peterson`, 25, 25);
const worker3 = new Worker(`George Harison`, 24, 23);

console.log(`${worker2.fullName} salary without experience:`, worker2.showSalary());
console.log(`${worker2.fullName} salary with exp 1.2:`, worker2.showSalaryWithExperience());
console.log(`${worker2.fullName} old experience:`, worker2.getExperience);
worker2.setExperience = 1.5;
console.log(`${worker2.fullName} new experience:`, worker2.getExperience);
console.log(`${worker2.fullName} salary with exp 1.5:`, worker2.showSalaryWithExperience());


const sortedSalary = () => {
    let sortedInstances = [];
    const instances = [...instancesOfClass.values()];
    for (let i = 0; i < instances.length; i++) {
        sortedInstances.push(instances.sort((a, b) => a.showSalaryWithExperience() - b.showSalaryWithExperience()));
    }
    const sortedSalary = sortedInstances[0];
    console.log(`Sorted salary:`);
    for (let i = 0; i < sortedSalary.length; i++) {
        console.log(sortedSalary[i].fullName, sortedSalary[i].showSalaryWithExperience());
    }
}

sortedSalary()