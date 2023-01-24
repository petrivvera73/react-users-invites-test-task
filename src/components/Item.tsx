import { FC, PropsWithChildren } from "react";
import styled from "styled-components";
import { ArrowIcon } from "../icons/ArrowIcon";
import { Theme } from "../theme";
import { Label } from "./Label";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 16px;

  & + & {
    .withBorder {
      border-top: 1px solid ${Theme.colors.border};
    }
  }
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  padding: 24px 0;
`;

const Title = styled.p<{ $secondary?: boolean }>`
  font-family: ${Theme.font.family};
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: ${(props) => Theme.colors[props.$secondary ? "secondary" : "black"]};
`;

const RightSideContent = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  gap: 16px;
`;

const IconWrapper = styled.div`
  cursor: pointer;
`;

export interface ItemProps extends PropsWithChildren {
  invited?: boolean;
}

export const Item: FC<ItemProps> = ({ invited, children }) => {
  return (
    <Wrapper>
      <Content className={"withBorder"}>
        <Title $secondary={invited}>{children}</Title>

        <RightSideContent>
          {invited && <Label>Invited</Label>}
          <IconWrapper>
            <ArrowIcon />
          </IconWrapper>
        </RightSideContent>
      </Content>
    </Wrapper>
  );
};
