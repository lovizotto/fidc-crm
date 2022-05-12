import { Query, Resolver } from "type-graphql";
import { User } from "./users";

@Resolver(User)
export class UsersResolver {
    @Query(() => [User])
    async users(): Promise<User[]> {
        const result = await fetch('https://jsonplaceholder.typicode.com/users')
        const users = await result.json()
        return users;
    }
}