import { Arg, Query, Resolver } from "type-graphql";
import { User } from "./user";

@Resolver(User)
export class UsersResolver {
    
    @Query(() => [User])
    async users(): Promise<User[]> {
        const result = await fetch('https://jsonplaceholder.typicode.com/users')
        const users = await result.json()
        return users;
    }

    @Query(() => User, { nullable: true })
    async user(@Arg("id", () => String) id: string): Promise<User | undefined> {
        const result = await fetch(`https://jsonplaceholder.typicode.com/users/id${id}`);
        const user = await result.json();
        return user;
    }
}