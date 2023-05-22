const express = require('express');
const app = express();
//const db = require('./dbConnection');
const todoItem = require('./dbConnection');


var todoList = {
    "name": "default list",
    "items": []
};

// Middleware to parse JSON data
app.use(express.json());

//add todo item, POST request
app.post('/todo', async (req, res) =>{
    const newItem = req.params.name;
    try{
        const createdItem = await todoItem.create(newItem);
        todoList.items.push(newItem);
        
        if(todoList.items.includes(newItem)){
            res.status(201).json({message:'item added seccesfully', newItem});
        }
    }
    catch(error){
        console.error('error: adding item', error);
        res.status(500).json({message:'failed to add item', newItem});
    }

});


const port = 8000;
app.listen(port, () => {
    console.log(`server running at http://localhost:${port}/`);
});