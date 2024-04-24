const USDollar = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

const MAX_CART_CAPACITY = 99;

export { USDollar, MAX_CART_CAPACITY };
