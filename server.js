// const express = require('express');
// const { resolve } = require('path');
// const app = express();
 
// app.use(
//     express.static(
//         resolve(__dirname, './build')
//     )
// );
// app.set('port', process.env.PORT || 3000, (err) => {
//     if(err) { return console.log(err) }

//     console.log('Servidor ON!!!');
// });
const path = require('path');
const express = require('express');

const app = express();

app.use(express.static(path.join(__dirname, 'dist')));
app.set('port', process.env.PORT || 3000);

const server = app.listen(app.get('port'), function() {
  console.log('listening on port ', server.address().port);
});