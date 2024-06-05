import Tasks from '../models/task.model.js';

export async function handleHomeGet(req, res) {

    const tasks = await Tasks.find( { createdBy: req.user._id } );

    // console.log(todos);
    res.status(200)
       .json({
        "status code": 200,
        "length": tasks.length,
        "data": tasks
       })
}

export async function handleHomePost(req, res) {

    // console.log(req);
    const { task } = req.body;
    

    if (!task) {
        res.status(400)
           .json({
            "status Code": 400,
            "Message": "Task info is required."
           })
        return;
    }

    const newTask = await Tasks.create(
        {
            task,
            createdBy: req.user._id
        }
    )

    const tasksList = await Tasks.find({ createdBy: req.user._id });

    // console.log(!tasksList);

    if (tasksList.length === 0) {
        await Tasks.create({
            createdBy: req.user._id
        })
    }

    const UsertasksList = await Tasks.find({ createdBy: req.user._id });
    // const userTasksList = await Tasks.findOneAndUpdate({ createdBy: req.user._id },
    //     {
    //         $push: { userTasks: newTask }
    //     },
    //     {
    //         new: true
    //     })

    res.status(201)
        .json(
            {
                "Status Code": 201,
                "data": UsertasksList,
                "Message": "Successfully New Task created!"
            }
        )
}

export async function handleHomeDelete(req, res) {

    const id = req.params.id;
    // console.log(id); 
    if (!id) {
        res.status(404)
           .json({
            "status Code": 404,
            "Message": "Task_id is required!"
           })
    }

    await Tasks.findByIdAndDelete(id);
    
    const UpdatedtasksList = await Tasks.find({ createdBy: req.user._id });
    // const updateUserTodos = await Tasks.findOneAndUpdate({ createdBy: req.user._id },
    //     {
    //         $pull: { userTodos: id }
    //     },
    //     {
    //         new: true,
    //     });

    res.status(204)
        .json(
            {
                "Status Code": 204,
                "data": UpdatedtasksList,
                "Message": "Successfully Task deleted!"
            }
        )
}

export async function handleHomeEdit(req, res) {

    const id = req.params.id;
    const { task } = req.body;

    if (!task) {
        res.status(404)
           .json({
            "status Code": 404,
            "Message": "Task is required!"
           })
    }

    const updatetasks = await Tasks.findByIdAndUpdate(id, {
        task
    }, { new: true })

    // const updateUserTodos = await Todos.findOne({ createdBy: req.user._id });

    // console.log(updateUserTodos);

    res.status(200)
        .json(
            {
                "Status Code": 200,
                "data": updatetasks,
                "Message": "Successfully edited Task!"
            }
        )
}

