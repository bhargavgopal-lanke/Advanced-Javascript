// asnc al;ways returns a promise

async function getData() {
  return "Bhargav";
}

const dataPromise = getData();

dataPromise.then((res) => console.log(res));
