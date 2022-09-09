const _=require("lodash");

const arr = [1,[2,3,[4]]];
const answer = _.flattenDeep(arr);
console.log(answer);
