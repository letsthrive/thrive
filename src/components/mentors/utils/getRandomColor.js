export default () => {
  const red = Math.floor(Math.random() * 250 + 0 );
  const green = Math.floor(Math.random() * 250 + 0);
  const blue = Math.floor(Math.random() * 250 + 0);
  return `rgb(${red}, ${green}, ${blue})`;
}