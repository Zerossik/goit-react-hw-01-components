import styled from 'styled-components';

export const Username = styled.p`
  font-size: 24px;
  font-weight: bold;
`;

export const ProfileComponent = styled.div`
  width: 280px;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(232, 236, 242);
  border-radius: 5px;
  margin: 100px auto;
  display: flex;
  -webkit-box-pack: justify;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Description = styled.div`
  padding: 24px;
`;

export const Avatar = styled.img`
  height: 120px;
  margin: 20px auto;
  border-radius: 50%;
`;

export const StatsList = styled.ul`
  display: flex;
  justify-content: space-evenly;

  width: 100%;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;

  background-color: #f3f6f9;
  border-top: 2px solid #e5eaf1;

  width: 100%;
  padding: 8px;
  &:not(:last-child) {
    border-right: 2px solid #e5eaf1;
  }
`;

export const StatsText = styled.span`
  font-size: 14px;
  color: #b7bec6;
`;

export const PrimeryText = styled.p`
  font-size: 14px;
  color: #b7bec6;
  text-align: center;
  &:not(:last-child) {
    margin: 10px 0;
  }
`;
