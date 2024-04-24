import { USDollar } from '../util';
import PropTypes from 'prop-types';

function CostDisplay({ title, cost }) {
  return (
    <div className='cost-display'>
      <h3 className='title'>{title}</h3>
      <p className='cost'>{USDollar.format(cost)}</p>
    </div>
  );
}

CostDisplay.propTypes = {
  title: PropTypes.string,
  cost: PropTypes.number,
};

export default CostDisplay;
