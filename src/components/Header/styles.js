import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled.header`
  grid-area: header;

  width: 100%;

  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
`;

export const Content = styled.div`
  max-width: 140rem;
  margin: 2rem auto 0;
  padding: 0 2rem;

  display: flex;
  justify-content: space-between;
`;

export const Profile = styled(Link)`
  display: flex;
  align-items: center;

  > img {
    width: 5.6rem;
    height: 5.6rem;
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    margin-left: 1.6rem;
    line-height: 2.4rem;

    span {
      font-size: 1.4rem;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    strong {
      font-size: 1.8rem;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`;

export const Logout = styled.button`
  border: none;
  background: none;

  > svg {
    font-size: 3.6rem;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }
`;
