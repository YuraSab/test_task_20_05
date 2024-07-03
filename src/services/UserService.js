class UserService {
    usersUrl = "https://jsonplaceholder.typicode.com/users";

    async getUsers() {
        const response = await fetch(this.usersUrl);
        if ( !response.ok ) {
            throw new Error("Failed to fetch users!");
        }
        return await response.json();
    }

}

export const userService = new UserService();