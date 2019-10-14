const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});


app.get('/data', (req, res) => {
  res.json(array);
});

app.delete('/delete/:ID',(req,res)=>{
 let sawsan = parseInt(res.params.id);
 array = array.filter((arr)=>{
    return arr.id !== sawsan
 })
 res.json(array)
 
})

const PORT = 9000;
app.listen(PORT, () => console.log(`Server listening to ${PORT}`));

let array = [
    {
        id: 1,
        title: 'Array',
        status: 'Private',
        language: 'HTML'
      },
      {
        id: 2,
        title: 'Object',
        status: 'Public',
        language: 'JavaScript'
      },
      {
        id: 3,
        title: 'Object3',
        status: 'Private',
        language: 'arabic'
      }
]