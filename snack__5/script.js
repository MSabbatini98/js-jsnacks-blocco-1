var array_num = [2, 5, 25, 462, 23, 12, 24, 65, 87, 378, 244, 1, 9, 56, 97];
var array_num_2 = [1, 1, 1, 1, 1];

var value;
console.log(array_num.length, array_num_2.length );
while (array_num.length != array_num_2.length){
    value = Math.floor(Math.random() * 1000);
    if (array_num_2 < array_num ) {
        array_num_2.push(value);
    } else {
        array_num.push(value);
    }
}
