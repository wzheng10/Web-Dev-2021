let input = prompt('What would you like to do?');
const toDoList = ['Wake up', 'Study'];
while (input !== 'quit' && input !== 'q') {
    if (input === 'list') {
        console.log('******************')
        for (let i = 0; i < toDoList.length; i++) {
            console.log(`${i}: ${toDoList[i]}`)
        }
        console.log('******************')
    } else if (input === 'new') {
        const todo = prompt('What would you like to add to your todo?')
        toDoList.push(todo)
        console.log(`You have added ${todo} to your list`)
    } else if (input === 'delete') {
        const index = parseInt(prompt('Enter the number for the task you would like to be deleted'));
        if (!Number.isNaN(index)) {
            const deleted = toDoList.splice(index, 1)
            console.log(`${deleted[0]} has been deleted`)
        } else {
            console.log('Command not recognized')
        }
    } else if (input === 'status') {
        if (toDoList.length === 1) {
            console.log("There is only one final task left!!!!")
        } else {
            console.log(`There are ${toDoList.length} of tasks not completed.`)
        }

    }
    input = prompt('What would you like to do?');
}
console.log('You have decided to quit!')