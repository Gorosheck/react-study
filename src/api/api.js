import axios from "axios";

const instance = axios.create({
   withCredentials: true,
   headers: {
      "API-KEY": "810b5345-4015-4c38-a4c2-a1a4d804978e"
   }
})

export const userAPI = {
   getUsers(currentPage = 1, pageSize = 10) {
      return instance.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
         .then(response => {
            return response.data;
         });
   }
}