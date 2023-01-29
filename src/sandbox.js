// fetch('https://randomuser.me/api')
//   .then(response => response.json())
//   .then(data => console.log('data', data))
//   .catch(err => console.log('err', err));

async function fetchData () {
  try {
    const response = await fetch('https://randomuser.me/api');
    const data = await response.json();
    return data;
  } catch (e) {
    console.log('e :>>', e);
  }
}

async function f () {} // => Promise

console.log('fetchData()', fetchData());
