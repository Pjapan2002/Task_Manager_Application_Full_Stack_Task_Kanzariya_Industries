import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true })

const Tasks = mongoose.model("Tasks", taskSchema);

export default Tasks;