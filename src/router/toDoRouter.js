const router = require("express").Router();
const toDoController = require("../controller/toDoController");

router.post("/todo", toDoController.addToDo);

router.get("/todo", toDoController.getAllToDos);

router.put("/todo/:id", toDoController.updateToDo);

router.delete("/todo/:id", toDoController.deleteToDo);

module.exports = router;
