import React, { useMemo } from "react";
import styled from "styled-components";
import { Block } from "./components/Block";
import { Item } from "./components/Item";
import { Title } from "./components/Title";
import { UsersData } from "./data/mockUsersData";
import { AdminIcon } from "./icons/AdminIcon";
import { UserIcon } from "./icons/UserIcon";

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
  const admins = useMemo(() => {
    return UsersData.filter((user) => user.role === "Administrator");
  }, []);

  const users = useMemo(() => {
    return UsersData.filter((user) => user.role === "Standard");
  }, []);

  return (
    <Wrapper>
      <Group>
        <Title Icon={AdminIcon}>Administrators</Title>
        <Block>
          {admins.map((admin) => (
            <Item key={admin.id} invited={admin.status === "invited"}>
              {admin.status === "invited"
                ? admin.user.phone
                : `${admin.user.name} ${admin.user.lastName}`}
            </Item>
          ))}
        </Block>
      </Group>

      <Group>
        <Title Icon={UserIcon}>Standard Users</Title>
        <Block>
          {users.map((user) => (
            <Item key={user.id} invited={user.status === "invited"}>
              {user.status === "invited"
                ? user.user.phone
                : `${user.user.name} ${user.user.lastName}`}
            </Item>
          ))}
        </Block>
      </Group>
    </Wrapper>
  );
};
