import * as axios from "axios";



export const usersAPI = {
getUsers(currentPage = 1, pageSize = 10){
	return axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
	.then(response => {
		return response.data});	
},
getProfile() {
	return axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
	},
}
