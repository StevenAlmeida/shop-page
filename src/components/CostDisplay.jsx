import { USDollar } from '../util';

function CostDisplay({ title, cost }) {
  return (
    <div className='cost-display'>
      <h3 className='title'>{title}</h3>
      <p className='cost'>{USDollar.format(cost)}</p>
    </div>
  );
}

export default CostDisplay;
