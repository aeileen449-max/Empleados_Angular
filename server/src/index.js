const app = require('./app');
require('./database');
app.listen(app.get('port'));
console.log('servidor spbre el puerto',3000);
