import styled from 'styled-components';
import getRandomHexColor from '../../utils/colorGenerate';

export const StatsTitle = styled.h2`
  padding: 20px 0;
`;

export const WrapContainer = styled.section`
  background-color: #fff;
  width: 420px;
  border: 2px solid ${getRandomHexColor};
  border-radius: 5px;
  margin: 0 auto;

  text-align: center;
`;

export const StatsList = styled.ul`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  background-color: ${getRandomHexColor};

  color: black;

  padding: 10px;
`;

export const StatsPercentage = styled.span`
  font-size: 24px;
`;
