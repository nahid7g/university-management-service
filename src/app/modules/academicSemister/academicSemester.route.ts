import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { academicSemesterValidation } from './academicSemester.validation';
import { AcademicSemisterController } from './academicSemister.controller';

const router = express.Router();

router
  .route('/create-semester')
  .post(
    validateRequest(academicSemesterValidation.createAcademicSemesterZodSchema),
    AcademicSemisterController.createSemester
  );

export const AcademicSemesterRoutes = router;
