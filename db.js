const sqlite3=require('sqlite3').verbose()
const db=new sqlite3.Database('./crypto.db')
db.serialize(()=>{
    db.run(
        `CREATE TABLE IF NOT EXISTS cryptocur(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        last TEXT,
        buy REAL,
        sell REAL,
        volume REAL,
        base_unit TEXT
        )`
    )
})

module.exports=db