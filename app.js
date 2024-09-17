const express=require('express')
const fetchData=require('./routes/fetchData')
const db=require('./db')
const app=express();
const PORT=3000;

app.use(express.static('public'))
app.set('view engine', 'html')
app.engine('html', require('ejs').renderFile)
app.set('views', './views')

app.get('/', (req, res)=>{
    res.render('index')
})


app.get('/api/gettop10', (req, res)=>{
    const statement=`SELECT * FROM cryptocur LIMIT 10`
    db.all(statement, [], (err, row)=>{
        if (err){
            res.status(500).json({error:'Database query error'})

        }else{
            res.json(row)
        }
    })
})

setInterval(fetchData, 180000);
fetchData();

app.listen(PORT, ()=>{
    console.log('Server is started and running at port 3000')
})
