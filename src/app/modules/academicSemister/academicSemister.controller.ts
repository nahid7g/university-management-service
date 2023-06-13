import { RequestHandler } from 'express';
import { academicSemisterService } from './academicSemester.service';

const createSemester: RequestHandler = async (req, res, next) => {
  try {
    const { ...academicSemesterData } = req.body;
    const result = await academicSemisterService.createSemester(
      academicSemesterData
    );
    res.status(200).json({
      success: true,
      message: 'Academic semester created successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const AcademicSemisterController = {
  createSemester,
};
