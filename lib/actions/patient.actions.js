'use server'

import { users } from "../appwrite.config"
import { ID,Query } from "node-appwrite";
 



export const createUser = async (user) => {
    try {

        const result = await users.create(
            ID.unique(),
            user.email,
            user.phone,
            undefined,
            user.username
        
        );
        return result;
        
    }
    catch (error) {
    // Check existing user
    if (error && error?.code === 409) {
      const existingUser = await users.list([
        Query.equal("email", [user.email]),
      ]);

      return existingUser.users[0];
    }
    console.error("An error occurred while creating a new user:", error);
    }
    

    

}

export const getUserById = async (userId) => {
    try {
        const user = await users.get(userId);
        return user
    } catch (error) {
        console.error("An error occurred while fetching the user:", error);
        throw new Error(error.message);
    }
};