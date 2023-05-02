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
    <WrapContainer className="statistics">
      {title && <StatsTitle className="title">{title}</StatsTitle>}
      <StatsList className="stat-list">
        {stats.map(el => (
          <StatsItem key={el.id} className="item">
            <span className="label">{el.label}</span>
            <StatsPercentage className="percentage">
              {el.percentage}%
            </StatsPercentage>
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
