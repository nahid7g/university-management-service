import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { UserController } from './user.controller';
import { userValidation } from './user.validation';

const router = express.Router();

router
  .route('/create-user')
  .post(
    validateRequest(userValidation.createUserZodSchema),
    UserController.createUser
  );

export const UserRoutes = router;
