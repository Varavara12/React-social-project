import * as axios from "axios";


// Настройка axiosa
const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,   //(withCredentials) настройка запроса
    headers: {
        "API-KEY": "817d25a7-0864-435b-8feb-23971ce675d8"
    }
});

export const userAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    follow(userId) {
      return  instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
      return  instance.delete(`follow/${userId}`)
    },
    getProfile(userId) {
        console.warn("Obsolete, method. Please profileAPI object");
         return profileAPI.getProfile(userId)

    }
};

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId)

    },
    getStatus(userId) {
         return instance.get(`profile/status/` + userId)
    },
    updateStatus(status) {
         return instance.put(`profile/status`, {status: status})
    }
};

export const authAPI = {
    me() {
         return  instance.get(`auth/me`)
    }
};

/*export const followAPI = {
    getFollow() {
         return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    }
};*/



