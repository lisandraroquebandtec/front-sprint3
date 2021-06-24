import styled from "styled-components";

export const Item = styled.li`
  list-style: none;
  display: list-item;
`;

export const BreadcrumbLink = styled.a`
  font-size: 0.8125rem;
  font-weight: 600;
  color: #585858;
  text-decoration: none;

  @media (max-width: 1200px) {
    display: none;
  }
  &:not(:last-child):hover {
    text-decoration: underline;
  }
`;

export const Separator = styled.li`
  margin-left: 8px;
  margin-right: 8px;
  user-select: none;
`;
