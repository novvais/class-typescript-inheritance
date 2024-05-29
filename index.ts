import { Developer } from "./Developer";
import { Manager } from "./Manager";
import { Seller } from "./Seller";

const eduardo = new Developer("Eduardo", 100000, ["Typescript, Javascript, Node.js"])
const duda = new Manager("Duda", 70000, "12345")
const jose = new Seller("Jose", 50000, 20000)

console.log(jose.calculateSalary())