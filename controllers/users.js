const {v4} = require ('uuid');
const uuid=v4;

const users=[];

const getUsers=(req,res)=>{
    console.log(`Users in Database ${users}`);
    res.send(users);
}

const createUser=(req, res)=>{
    const user = req.body;
    users.push({...user, id:uuid()});
    console.log(`User ${user.firstname} added`);
    res.send('user added')
    //console.log(req.body)
}

const getUser=(req,res)=>{
    const {id} = req.params;
    const foundUser=users.find((user)=>user.id===id);
    console.log(foundUser.firstname);
    res.send(foundUser);
}

const deleteUser=(req,res)=>{
    users=users.filter((user)=>user.id !== req.params.id);
    console.log(`User with id ${req.params.id} has deleted`);
}

const updateUser=(req,res)=>{
    const user=users.find((user)=>user.id===req.params.id);
    user.firstname=req.body.firstname;
    user.lastname=req.body.lastname;
    user.age=req.body.age;
    res.send('User updated')
    console.log(`User ${user.firstname} has been updated`)
}

module.exports={getUsers, getUser, createUser, updateUser,deleteUser}