const express = require('express');
const cors = require('cors');

const taskRoutes = require('./routes/tasks')

const app = express();

app.use(cors());
app.use(express.json())


app.use('/tasks', taskRoutes);


module.exports = app;

if(require.main === module){
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}