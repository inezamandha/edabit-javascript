function constructFence(price) {
  let modalPrice = 1000000;
  let realPrice = Number(price.replace(/[$,]/g, ''));
  let totalFences = modalPrice / realPrice;
  return 'H'.repeat(totalFences);
}

export default constructFence;
