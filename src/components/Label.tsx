import { FC, PropsWithChildren } from "react";
import styled from "styled-components";
import { Theme } from "../theme";

const Wrapper = styled.p`
  background: ${Theme.colors.background};
  border-radius: 24px;
  padding: 1px 10px;
  display: flex;
  align-items: center;

  font-family: ${Theme.font.family};
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  letter-spacing: -0.02em;

  color: ${Theme.colors.black};
`;

export const Label: FC<PropsWithChildren> = (props) => {
  return <Wrapper>{props.children}</Wrapper>;
};
