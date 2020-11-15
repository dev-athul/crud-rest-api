const Router = require ('express');
const {getUsers, createUser, getUser, deleteUser,updateUser} = require ('../controllers/users');

const router=Router();

router.get('/',getUsers);
router.get('/:id',getUser);
router.post('/',createUser);
router.patch('/:id',updateUser);
router.delete('/:id',deleteUser);

module.exports = (router);