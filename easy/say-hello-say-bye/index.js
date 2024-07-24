function sayHelloBye(name, num) {
  const capitalizedName = name.slice(0, 1).toUpperCase() + name.slice(1);
  return num === 1 ? `Hello ${capitalizedName}` : `Bye ${capitalizedName}`;
}

export default sayHelloBye;
