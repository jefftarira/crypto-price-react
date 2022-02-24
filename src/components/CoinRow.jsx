import React from 'react';

const currencyFormat = (value) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(value);
};

const numberFormat = (value) => {
  return new Intl.NumberFormat('en-US', {
    maximumSignificantDigits: 2,
  }).format(value);
};

function CoinRow({ coin, index }) {
  return (
    <tr>
      <td>{index}</td>
      <td>
        <img
          alt={coin.name}
          className="me-3 img-fluid"
          src={coin.image}
          style={{ width: '5%' }}
        />
        <strong>{coin.name}</strong>
        <span className="ms-2 text-muted text-uppercase">{coin.symbol}</span>
      </td>
      <td className="text-end">
        <span className="text-bold">{currencyFormat(coin.current_price)}</span>
      </td>
      <td
        className={
          coin.price_change_percentage_24h > 0
            ? 'text-success text-end'
            : 'text-danger text-end'
        }
      >
        {numberFormat(coin.price_change_percentage_24h) + '%'}
      </td>
      <td className="text-end">
        <small>{currencyFormat(coin.total_volume)}</small>
      </td>
    </tr>
  );
}

export default CoinRow;
