#!/usr/bin/env node
import inquirer from "inquirer";
let todos=[];
let condition= true;
while(condition){
let addTask=await inquirer.prompt([
    {
        name:'todo',
        type:"input",
        message:"what would you like to add in your todos?"
    },
    {
        name:'addMore',
        type:"confirm",
        message:"what would you like to add in your todos?",
        default:"true"
    }
])
todos.push(addTask.todo);
condition =addTask.addMore;
console.log(todos)
}
console.log(todos.length)