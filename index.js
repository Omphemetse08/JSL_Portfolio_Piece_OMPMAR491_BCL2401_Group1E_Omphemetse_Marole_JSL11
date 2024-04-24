// TASK: import helper functions fom utils
import {
  getTasks,
  createNewTask,
  putTask,
  deleteTask,
} from ".utils/taskFunctions.js";

// TASK: import initialData
import { initialData } from "./initialData.js";

/************************************************************************************
 * FIX BUGS!!
 * **********************************************************************************/

// Function checks if local storage already has data, if not loads initialData to localStorage
function initializeData() {
  if (!localStorage.getItem("tasks")) {
    localStorage.setItem("tasks", JSON.stringify(initialData));
    localStorage.setItem("showSideBar", true);
  } else {
    console.log("Data already exists in localStorage");
  }
}
initializeData();
