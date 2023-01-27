import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { InvitesList } from './components/InvitesList';
import { Title } from "./components/Title";
import { UsersList } from './components/UsersList';
import { UsersData, InvitedUsers } from "./data/mockUsersData";
import { AdminIcon } from "./icons/AdminIcon";
import { UserIcon } from "./icons/UserIcon";
import { Invite, TeamMember } from './types';

const Wrapper = styled.div`
  padding: 16px 24px;
`;

const Group = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  & + & {
    margin-top: 32px;
  }
`;

export const App = () => {
  const [users, setUsers] = useState<TeamMember[]>([]);
  const [invites, setInvites] = useState<Invite[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        setUsers(UsersData);
        setInvites(InvitedUsers);
      } catch (err) {
        setError((err as Error).message);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Wrapper>
      <Group>
        <Title Icon={AdminIcon}>Administrators</Title>
        <UsersList users={users} role="Administrator" />
        <InvitesList invites={invites} role="Administrator" />
      </Group>
      <Group>
        <Title Icon={UserIcon}>Standard Users</Title>
        <UsersList users={users} role="Standard" />
        <InvitesList invites={invites} role="Standard" />
      </Group>
    </Wrapper>
  );
};