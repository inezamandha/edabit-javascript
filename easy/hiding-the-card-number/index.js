function cardHide(card) {
  if (card.length > 4) {
    return '*'.repeat(card.length - 4) + card.slice(-4);
  }
  return card;
}

export default cardHide;
