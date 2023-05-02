import {
  WrapContainer,
  StatsList,
  StatsItem,
  StatsTitle,
  StatsPercentage,
} from './Statistics.styled';

import PropTypes from 'prop-types';

export default function Statistics({ title, stats }) {
  return (
    <WrapContainer>
      {title && <StatsTitle>{title}</StatsTitle>}
      <StatsList>
        {stats.map(el => (
          <StatsItem key={el.id}>
            <span>{el.label}</span>
            <StatsPercentage>{el.percentage}%</StatsPercentage>
          </StatsItem>
        ))}
      </StatsList>
    </WrapContainer>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
