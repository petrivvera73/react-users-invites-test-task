import { FC, PropsWithChildren } from "react";
import styled from "styled-components";
import { Theme } from "../theme";

const Wrapper = styled.div`
  background: ${Theme.colors.white};
  border-radius: 16px;
  box-shadow: 0 3px 24px rgba(130, 139, 151, 0.06);
  border: 1px solid ${Theme.colors.border};
`;

export const Block: FC<PropsWithChildren> = (props) => {
  return <Wrapper>{props.children}</Wrapper>;
};
