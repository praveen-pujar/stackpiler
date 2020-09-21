
const express = require('express');
const app = express();
const path = require('path');


// place holder for the data
 let users = [];
 users.splice(0,users.length);
 let size ='';


app.use(express.json());


app.get('/api/users', (req, res) => {
  console.log('api/users called!!!!')
  res.json(users);
});

app.post('/api/user', (req, res) => {
  const user = req.body.user;
    console.log('Adding user::::::::', user);
    // if(users.length !== stackSize){
      users.push(user);
    // }
    res.json("user added");

});


app.delete('/api/data', (req, res) => {
  const data = req.body.data;
  console.log('Deleting an element......', data);
  users.pop(data);
  res.json("Element Deleted!");
})


app.post('/api/size', (req, res) => {
  const stackSize = req.body.stackSize;
  console.log('Assigning stack size to array', stackSize);
  users = new Array(Number(stackSize));
  res.json("array size added");
});


if(process.env.NODE_ENV === 'production'){
  app.use(express.static("client/build"));
  
  app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, "../client", "build", "index.html"));
  });
}



app.listen(process.env.PORT || 3080)
