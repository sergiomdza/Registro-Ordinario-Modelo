const { Router } = require('express');
const router = Router();

const { createUser, getUsers, UpdateUser, DeleteUser } = require('../controllers/usuario.controllers');

router.route('/')
  .get(getUsers)
  .post(createUser)
router.route('/:id')
  .put(UpdateUser)
  .delete(DeleteUser)

module.exports = router;
