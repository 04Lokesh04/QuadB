const axios=require('axios')
const db=require('../db')

const fetchData=async ()=>{
    try{const response =await axios.get('https://api.wazirx.com/api/v2/tickers')
    const data=Object.values(response.data).slice(0, 10)

    db.run('DELETE FROM cryptocur')

    data.forEach(val=>{
        const statement=`INSERT INTO cryptocur (name, last, buy, sell, volume, base_unit)
        VALUES(?, ?, ?, ?, ?, ?)`
        db.run(statement, [val.name, val.last, val.buy, val.sell, val.volume, val.base_unit], (err)=>{
            if (err){
                console.log('error in inserting data', err)
            }
        })
    })} catch(err){
        console.log('Error in fetching from api', err)
    }

}

module.exports=fetchData