import WrapPromise from "./WrapPromise";

const info = getInfo();

export default function ThrowResult() {
  const result = info.get();
  return <p>{result}</p>;
}

function getInfo() {
  return WrapPromise(new Promise((resolve, reject) => {
    setTimeout(()=> {
      if(Math.random() > 0.5) {
        resolve('Succeeded!');
      }
      else {
        reject('Error!');
      }
    },2000);
  }));
}