import React from 'react';

// let store = {
//    data: {
//       text: "Текст-описание задачки бла бла бла",
//       numbers: [3124, 2342, 35, 45, 6]
//    }
// }

// let getRandomInt = (min, max) => {
//    return Math.floor(Math.random() * (max - min)) + min;
// }

let buttonOne = () => {
   // if (!store.data.numbers === null)


}

let buttonTwo = (store) => {
   // store.data.numbers.push(getRandomInt);
}

let buttonThree = (store) => {
   // store.data.numbers.pop();
}


const Settings = (store) => {
   return (
      <div>

         <div><button onClick={buttonOne}>№1 Добавить в начало минимальное число из последовательности минус 1</button></div>

         <div><button onClick={buttonTwo}>№2 Добавить в конец последовательности случайное число от нуля до 10</button></div>

         <div><button onClick={buttonThree}>№3 Удалить из последовательности последнее число</button></div>


      </div>
   );
}
export default Settings;