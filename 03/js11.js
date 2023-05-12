import fetch from 'node-fetch';

// const server = {
//   getData() {
//     return new Promise((res, rej) => {
//       setTimeout(() => {
//         res('Promise resolved');
//         // rej('Something went wrong');
//       }, 1000);
//     });
//   },
// };

// const pr = server.getData();

// pr.then((data) => {
//   console.log('data', data);
//   return fetch('https://google.com/?query=js');
// })
//   .then((dataFromGoogle) => {
//     console.log('dataFromGoogle', dataFromGoogle);
//   })
//   .then((dataFromGoogle) => {
//     console.log('dataFromGoogle', dataFromGoogle);
//   })
//   .then((dataFromGoogle) => {
//     console.log('dataFromGoogle', dataFromGoogle);
//   })
//   .catch((err) => {
//     console.log('ERROR', err);
//   });

// fetch('https://google.com/?query=js')
//   .then(() => {
//     console.log('Response from google');
//   })
//   .then(() => {
//     return fetch('https://yahoo.com/?query=js');
//   })
//   .then(() => {
//     console.log('Response from yahoo');
//     return fetch('https://duckduckgo.com/?query=js');
//   })
//   .then(() => {
//     console.log('Response from duckduckgo');
//   });

// fetch('https://yahoo.com/?query=js').then(() => {
//   console.log('Response from yahoo');
// });
// fetch('https://duckduckgo.com/?query=js').then(() => {
//   console.log('Response from duckduckgo');
// });

// all || race || allsettled || any

// const promise1 = fetch('https://google.com/?query=js');
// const promise2 = fetch('htps://yahoo.com/?query=js');
// const promise3 = fetch('https://duckduckgo.com/?query=js');

// const bigPromise = Promise.all([promise1, promise2, promise3]);

// bigPromise
//   .then((data) => {
//     console.log(data[0].url);
//     console.log(data[1].url);
//     console.log(data[2].url);
//   })
//   .catch((err) => {
//     console.log('ERROR', err);
//   });

// function sleep(time, value, state) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (state === 'fulfill') {
//         return resolve(value);
//       } else {
//         return reject(new Error(value));
//       }
//     }, time);
//   });
// }

// const p5 = sleep(100, 'five', 'fulfill');
// const p6 = sleep(500, 'six', 'reject');

// Promise.race([p5, p6]).then(
//   (value) => {
//     // Not called
//     console.log('resolve');
//   },
//   (error) => {
//     console.error(error.message); // "six"
//     // p6 is faster, so it rejects
//   }
// );

// const promise1 = fetch('https://google.com/?query=js');
// const promise2 = fetch('https://yahoo.com/?query=js');
// const promise3 = fetch('https://duckduckgo.com/?query=js');

// Promise.allSettled([promise1, promise2, promise3])
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log('ERROR', err);
//   });

// const promise1 = fetch('https://google.com/?query=js');
// const promise2 = fetch('https://yahoo.com/?query=js');
// const promise3 = fetch('https://duckduckgo.com/?query=js');
// const timeoutPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject('Timeout occurred');
//   }, 2000); // устанавливаем тайм-аут в 1 секунду
// });

// Promise.race([promise2, promise1, timeoutPromise])
//   .then((data) => {
//     console.log('data', data.url);
//   })
//   .catch((err) => {
//     console.log('ERROR', err);
//   });

// const promise1 = fetch('htps://google.com/?query=js');
// const promise2 = fetch('htps://yahoo.com/?query=js');
// const promise3 = fetch('htps://duckduckgo.com/?query=js');

// Promise.any([promise1, promise2, promise3])
//   .then((data) => {
//     console.log('DATA', data.url);
//   })
//   .catch((err) => {
//     console.log('ERROR', err);
//   });

// const fetchData = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve('Data fetched successfully');
//     }, 2000); // имитируем задержку в 2 секунды
//   });
// };

// const timeoutPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject('Timeout occurred');
//   }, 1000); // устанавливаем тайм-аут в 1 секунду
// });

// Promise.race([fetchData(), timeoutPromise])
//   .then((result) => console.log(result))
//   .catch((error) => console.error(error));

// const server = {
//   getData() {
//     return new Promise((res, rej) => {
//       setTimeout(() => {
//         res('Promise resolved');
//         // rej('Something went wrong');
//       }, 1000);
//     });
//   },
// };

// const pr = server.getData();

// fetch('https://google.com/?query=js')
//   .then((dataFromGoogle) => {
//     console.log('dataFromGoogle', dataFromGoogle.url);
//     return fetch('htps://yahoo.com/?query=js');
//   })
//   .then((dataFromYahoo) => {
//     console.log('dataFromYahoo', dataFromYahoo.url);
//     return fetch('https://duckduckgo.com/?query=js');
//   })
//   .then((dataFromDuckduckgo) => {
//     console.log('dataFromDuckduckgo', dataFromDuckduckgo.url);
//   })
//   .catch((err) => {
//     console.log('ERROR', err);
//     console.log(f);
//   })
//   .then(() => {
//     console.log('then after catch');
//   })
//   .catch(() => {
//     console.log('ERROR on catch');
//   });

const foo = async () => {
  // setIsLoading(true);
  try {
    const dataFromGoogle = await fetch('htps://google.com/?query=js');
    const dataFromYahoo = await fetch('https://yahoo.com/?query=js');
    const dataFromDuckduckgo = await fetch('https://duckduckgo.com/?query=js');
  } catch (err) {
    console.log('ERROR', err);
  } finally {
    // setIsLoading(false);
  }
};

const something = foo();
console.log('something', something);

// something
//   .then((data) => {
//     console.log('something', data.url);
//   })
//   .catch(() => {
//     console.log('REJECTED FOO');
//   });
