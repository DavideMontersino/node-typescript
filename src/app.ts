// ## ES6 features
// This project already makes use of some [ES6 features](https://github.com/lukehoban/es6features);
// However, not all ES6 features are already supported by node (i.e. `import` statements)
// By requiring `babel-core/register` before anything else, we enable these features to be used:
/// <reference path="../typings/main.d.ts" />

import * as _ from 'lodash';

interface Message {
  index: number;
  value: string;
}

let messages: Array<Message> = [
  {
    index: 0,
    value: 'hello'
  },
  {
    index: 0,
    value: 'world'
  }
];

_.forEach(messages, (message) => {
  console.log(message.value);
});
