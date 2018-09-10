const todo = require("./todo.js");
const connection = require("./mongoConnection.js");

async function main() {

    try {
        console.log("Create first task:");
        await todo.createTask("Ponder Dinosaurs", "Has Anyone Really Been Far Even as Decided to Use Even Go Want to do Look More Like?");
        let allTask = await todo.getAllTasks();
        console.log(allTask);

        console.log();

        console.log("Create second task:");
        await todo.createTask("Play Pokemon with Twitch TV", "Should we revive Helix?");
        allTask = await todo.getAllTasks();
        console.log(allTask);

        console.log();

        console.log("Remove first task:");
        await todo.removeTask(allTask[0]._id);
        allTask = await todo.getAllTasks();
        console.log(allTask);

        console.log();

        console.log("Complete the remaining:");
        await todo.completeTask(allTask[0]._id);
        allTask = await todo.getAllTasks();
        console.log(allTask);

        await todo.removeTask(allTask[0]._id);

        const db = await connection();
        await db.serverConfig.close();

        console.log();
        console.log("Finished!");
        
    }

    catch (err) {
        console.log(err);
    }

}

main();
