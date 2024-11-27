import { environment } from "./environments/environment.development";

const domain = environment.domain
export const apis: any = {
    userList: domain + '/demo/users',
    upload_file: domain + '/home/upload_image',
    add_course: domain + '/home/add_course'
}
