import { Employee } from "./Employee";

export class Seller extends Employee{  
    private commission: number;

    constructor(name: string, salary: number, commission: number) {
        super(name, salary)
        this.commission = commission
    }

    calculateSalary(): number{
        return this.salary + this.commission
    }
}