function dollaDollaBills(money) {
  return money.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
}

export default dollaDollaBills;
