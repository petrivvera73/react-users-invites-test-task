import { FC, PropsWithChildren } from "react";
import styled from "styled-components";
import { Theme } from "../theme";

export interface TitleProps extends PropsWithChildren {
  Icon: FC;
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  & svg {
    width: 16px;
    height: 16px;
  }
`;

const Text = styled.p`
  font-family: ${Theme.font.family};
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  line-height: 24px;

  letter-spacing: -0.02em;
  color: ${Theme.colors.secondary};
`;

export const Title: FC<TitleProps> = ({ Icon, children }) => {
  return (
    <Wrapper>
      <Icon />
      <Text>{children}</Text>
    </Wrapper>
  );
};
