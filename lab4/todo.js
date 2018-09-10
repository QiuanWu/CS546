const mongoCollections = require("./mongoCollections.js");
const uuid = require("uuid/v4");
const todoItems = mongoCollections.todoItems;


const createTask = async function createTask(title, description) {

    if (!title || !description)
        throw "You must provide title and description";

    try {
        let ID = uuid();
        let newInfo = {
            _id : ID,
            title: title,
            description: description,
            completed: false,
            completedAt: null
        };

        const taskCollection = await todoItems();
        const insertInfo = await taskCollection.insertOne(newInfo);

        if (insertInfo.insertedCount === 0)
            throw "Could not add task";

        const task = await this.getTask(ID);
        return task;
    }

    catch (err) {
        console.log(err);
    }

}

const getAllTasks = async function getAllTasks() {

    try {
        const taskCollection = await todoItems();
        const tasks = await taskCollection.find({}).toArray();
        return tasks;
    }

    catch (err) {
        console.log(err);
    }

}

const getTask = async function getTask(id) {

    if (!id)
        throw "You must provide an id to search for";

    try {
        const taskCollection = await todoItems();
        const taskgo = await taskCollection.findOne({ _id: id });

        if (taskgo === null)
            throw "No task found with this id"

        return taskgo;
    }

    catch (err) {
        console.log(err);
    }

}

const completeTask = async function completeTask(taskId) {

    if (!taskId)
        throw "You must provide a taskId to search for"

    try {
        let date = Date();
        const taskCollection = await todoItems();
        const updateInfo = await taskCollection.updateOne({ _id: taskId }, 
            {$set:
                {
                    completed: true,
                    completedAt: date
                }
            });

        if (updateInfo.modifiedCount === 0)
            throw "could not update task successfully";

        return await this.getTask(taskId);
    }

    catch (err) {
        console.log(err);
    }

}

const removeTask = async function removeTask(id) {

    if (!id)
        throw "You must provide an id to search for"

    try {

        const taskCollection = await todoItems();
        const deletionInfo = await taskCollection.removeOne({ _id: id });

        if (deletionInfo.deletedCount === 0)
            throw `Could not delete task with id of ${id}`;

        return true;
    }

    catch (err) {
        console.log(err);
    }

}


module.exports = {
    firstName: "Qiuan",
    lastName: "Wu",
    studentId: "10409585",
    createTask,
    getAllTasks,
    getTask,
    completeTask,
    removeTask
};


