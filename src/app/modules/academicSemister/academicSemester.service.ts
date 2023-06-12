import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { academicSemesterCodeMapper } from './academicSemester.constant';
import { IAcademicSemester } from './academicSemister.interface';
import { AcademicSemister } from './academicSemister.model';

const createSemester = async (
  payload: IAcademicSemester
): Promise<IAcademicSemester> => {
  if (academicSemesterCodeMapper[payload.title] !== payload.code) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Invalid semester code.');
  }
  const result = await AcademicSemister.create(payload);
  return result;
};

export const academicSemisterService = {
  createSemester,
};
