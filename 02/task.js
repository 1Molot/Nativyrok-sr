// Напишите функцию delay(ms), которая возвращает промис, переходящий в состояние "resolved" через ms миллисекунд.
//     Пример использования:
//     delay(1000).then(() => console.log(‘resolve’)
// const delay = (ms) => {
//   const promise = new Promise((res, rej) => {
//     const d = [1, 2, 3]
//     setTimeout(() => {
//       if(d.length > 0) {
//         res(d)
//       } else {
//         rej("error")
//       }
//     }, ms)
//   })
//   return promise
// }
//
// console.log(delay(1000))

const delay = (time) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res();
        },time);
    });
};
delay(2000).then(() => console.log('resolve'));