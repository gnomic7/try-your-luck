let NETWORTH = 0;
let numberOfTries = 10;

const getRandom = () => Math.round(Math.random() *100);

const handleClick = (val) => {
  if (numberOfTries <= 0 ) {
    document.getElementById('networths').innerHTML = `Your Net Worth: $${NETWORTH}`;  
  } else {
    NETWORTH += +val;
    document.getElementById('networths').innerHTML = `Your Net Worth: $${NETWORTH}`;
  }
  numberOfTries--;
}
let res = confirm(`Do you wanna play this game? You have $${NETWORTH} to begin!`)
if (!res) {
  alert('See you later!');
}




