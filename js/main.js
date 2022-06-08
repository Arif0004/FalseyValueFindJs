

//find falsey value
const mixedArr = [
    'lws', undefined, 'Arif Hossain', false, '', 'apple', 40, true, 'Thanks', NaN
];
//const trueArray = mixedArray.filter(Boolean);
// console.log(trueArray);

const obj = {
    a: 'lws',
    b: undefined,
    c: 'Arif Hossain',
    d: false,
    e: '',
    f: 'apple',
    g: 40,
    h: true,
    i: 'Thanks',
    j: NaN
};
const truthObject = function(obj) {
    for (let i in obj) {
        if (!obj[i]) {
            delete obj[i];

        }
    }
    return obj;
}
console.log(truthObject(obj));