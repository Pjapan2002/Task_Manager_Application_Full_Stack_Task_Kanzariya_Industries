import { useEffect, useState } from 'react'

import { Taskprovider } from '../contexts/index';
import TaskForm from './TaskForm.jsx';
import TaskItem from './Taskitem.jsx';

import axios from 'axios';

function Home() {
  // define tasks 
  // const [tasks, setTasks] = useState([]);

  // // add task
  // const addTask = async (task) => {
  //   // setTasks((prev) => [{ ...task }, ...prev])

  //   await axios({
  //     method: 'post',
  //     url: 'api/v1/tasks',
  //     data: task
  //   })

  // }

  // // update tasks
  // const updateTask = async (id, task) => {
  //   // setTasks((prev) => prev.map((prevTask) => (prevTask.id === id ? tasks : prevTask)));

  //   await axios({
  //     method: 'put',
  //     url: `api/v1/tasks/${id}`,
  //     data: task
  //   })

  // }

  // // Delete tasks
  // const deleteTask = async (id) => {
  //   // setTasks((prev) => prev.filter((task) => task.id !== id));

  //   await axios({
  //     method: 'delete',
  //     url: `api/v1/tasks/${id}`,
  //   })

  // }

  // // toggle
  // const toggleChecked = (id) => {
  //   setTasks((prev) => prev.map((prevTask) => prevTask.id === id ? { ...prevTask, checked: !prevTask.checked } : prevTask))
  // }

  // // get the all tasks and display, when page loaded.
  // useEffect(async () => {
  //   // const tasks = JSON.parse(localStorage.getItem("tasks"));

  //   const tasksList = await axios({
  //     method: 'get',
  //     url: 'api/v1/tasks'
  //   })

  //   if (tasksList && tasksList.length > 0) {
  //     setTasks(tasksList);
  //   }
  // }, [tasks])

  // useEffect(async() => {
  //   await axios({
  //     method: 'post',
  //     url: 'api/v1/tasks',
  //     data: tasks
  //   })
  // }, [tasks]);

  const [tasks, setTasks] = useState([]);

  // Add task
  const addTask = async (task) => {
    await axios({
      method: 'post',
      url: 'api/v1/tasks',
      data: task,
    });

    // Optionally, fetch updated tasks after adding
    const tasksList = await axios({
      method: 'get',
      url: 'api/v1/tasks',
    });
    setTasks(tasksList.data);
  };

  // Update task
  const updateTask = async (id, task) => {
    await axios({
      method: 'put',
      url: `api/v1/tasks/${id}`,
      data: task,
    });

    // Optionally, fetch updated tasks after updating
    const tasksList = await axios({
      method: 'get',
      url: 'api/v1/tasks',
    });
    setTasks(tasksList.data);
  };

  // Delete task
  const deleteTask = async (id) => {
    await axios({
      method: 'delete',
      url: `api/v1/tasks/${id}`,
    });

    // Optionally, fetch updated tasks after deleting
    const tasksList = await axios({
      method: 'get',
      url: 'api/v1/tasks',
    });
    setTasks(tasksList.data);
  };

  // Toggle checked
  const toggleChecked = (id) => {
    setTasks((prev) =>
      prev.map((prevTask) =>
        prevTask.id === id ? { ...prevTask, checked: !prevTask.checked } : prevTask
      )
    );
  };

  // Get tasks on component mount
  useEffect(async () => {
    const tasksList = await axios({
      method: 'get',
      // url: '/',
      url: 'api/v1/tasks',
      responseType: 'json'
    }).then(()=>{
      console.log("successfully getting all the Tasks!");
    }).catch( () => {
      console.log("Something went wrong!!!!!!!!!!!!!");
    })
    setTasks( tasksList && tasksList.data);
  }, []);

  return (
    <Taskprovider value={{ tasks, addTask, updateTask, deleteTask, toggleChecked }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Tasks</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TaskForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TaskItem here */}
            {tasks.map((task) => (
              <div key={task.id}
                className='w-full'>
                <TaskItem task={task} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Taskprovider>
  )
}

export default Home