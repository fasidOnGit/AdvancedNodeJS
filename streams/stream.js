//Streams are collection of data just like arrays and strings. but
//difference is that they shouldn't available one at a time.They dont neccessarily need to fit into the memory

const fs = require('fs');
const file = fs.createWriteStream('./big.file');

for (let i = 0; i < 1e6; i++) {
    file.write('Lorrem ipsum sit amet , conseturoer adipisingisng asdas asdjhsdjb alsdjal kd asjkdakda lalsdjka lasldj adalkjsd alskdja lasdj ');
    
}

file.end('Done');