import React from "react";
import { Invite } from "../types";
import { Block } from "./Block";
import { Item } from "./Item";

export interface InvitesListProps {
    invites: Invite[];
    role:"Administrator" | "Standard";
}

export const InvitesList: React.FC<InvitesListProps> = ({ invites, role }) => {
    const filteredInvites = invites.filter((invite: { role: string; }) => invite.role === role);
  
    return (
      <Block>
        {filteredInvites.map((invite) => (
          <Item key={invite.id} invited>
            {invite.phone}
          </Item>
        ))}
      </Block>
    );
};