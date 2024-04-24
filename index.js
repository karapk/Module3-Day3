import _ from 'lodash'
import { color, log, red, green } from 'console-log-colors'

const myarray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(color.red(myarray))

const output = _.uniq(myarray);

console.log(output);




