import styled from 'styled-components';

export const TransactionTable = styled.table`
  margin: 40px auto 0 auto;
  border-spacing: 1px;
`;

export const TransactionHead = styled.th`
  background-color: #00bcd5;
  color: #fff;
  padding: 10px 80px;
`;

export const TransactionRow = styled.tr`
  background-color: #fff;
  color: #565757;
  &:nth-child(2n) {
    background-color: #ecf1f4;
  }
`;
export const TransactionValue = styled.td`
  padding: 10px 0;
  text-align: center;
`;
