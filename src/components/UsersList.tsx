import React from "react";
import { TeamMember } from "../types";
import { Block } from "./Block";
import { Item } from "./Item";

export interface UsersListProps {
    users: TeamMember[];
    role:"Administrator" | "Standard";
}

export const UsersList: React.FC<UsersListProps> = ({ users, role }) => {
    const filteredUsers = users.filter((user: { role: string; }) => user.role === role);
  
    return (
      <Block>
        {filteredUsers.map((user) => (
          <Item key={user.id}>
            {user.user.name} {user.user.lastName}
          </Item>
        ))}
      </Block>
    );
};