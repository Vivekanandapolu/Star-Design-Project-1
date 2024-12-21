import { environment } from './../../environments/environment';

const domain = environment.apiDomain;

console.log(domain, 'domain');
export const apis = {
  userList: `${domain}/demo/users`,
  upload_file: `${domain}/home/upload_image`,
  add_course: `${domain}/home/add_course`,
  getCourses: `${domain}/home/all_course_data`,
  updateCourse: `${domain}/home/update_course_data`,
  add_course_contact: `${domain}/home/add_student_data`,
  addBatch: `${domain}/home/add_upcoming_batch`,
  getBatches: `${domain}/home/all_batches_data`,
};
