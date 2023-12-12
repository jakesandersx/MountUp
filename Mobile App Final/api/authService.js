import instance from "./core";

// export type User = {
//     _id: string;
//     username: string;
//     password: string;
//     createdAt: Date;
//     updatedAt: Date;
// };

// type UserData = {
//     success: boolean;
//     data: User;
// }

export const loginUser = async(email, password) => {
    return new Promise(async (resolve, reject) => {
        const response = await instance.post("/user/login", {email, password});
        console.log(response.data);
        if(response){
            resolve(response.data);
        } else {
            resolve(undefined);
        }
    });
}

export const registerUser = async(firstName, lastName, email, password, verifyPassword, checked, id) => {
    return new Promise(async (resolve, reject) => {
        const response = await instance.post("/user/register", {firstName, lastName, email, password, verifyPassword, checked, id});
        if(response){
            resolve(response.data);
        } else {
            resolve(undefined);
        }
    });
}

export const logoutUser = async() => {
    return new Promise(async (resolve, reject) => {
        const response = await instance.post("/user/logout");

        if(response){
            resolve(response.data);
        } else {
            resolve(undefined);
        }
    });
};

export const updatePassword = async (userId, newPassword) => {
    try {
        const response = await instance.put(`/user/${userId}/update-password`, { newPassword });
        return response.data;
    } catch (error) {
        console.error("Error updating password:", error);
        throw new Error("Failed to update password");
    }
};

