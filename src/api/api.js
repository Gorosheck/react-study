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
   },
   follow(userId) {
      return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
   },
   unfollow(userId) {
      return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
   },
   getProfile(userId) {
      console.warn('Obsolete method. Please profileAPI object.')
      return profileAPI.getProfile(userId);

   }
}

export const profileAPI = {
   getProfile(userId) {
      return instance.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
   },
   getStatus(userId) {
      return instance.get(`https://social-network.samuraijs.com/api/1.0/profile/status/` + userId)
   },
   updateStatus(status) {
      return instance.put(`https://social-network.samuraijs.com/api/1.0/profile/status/`, { status: status })
   }
}

export const authAPI = {
   me() {
      return instance.get(`https://social-network.samuraijs.com/api/1.0/auth/me`)
   }
}