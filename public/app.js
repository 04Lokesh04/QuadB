async function fetchcryptos() {
    try{
        const response =await fetch('/api/gettop10')
        const data= await response.json()
        console.log(data);
        const tablebdy=document.getElementById('crypto-table')
        tablebdy.innerHTML=''
        data.forEach((each, index)=>{
            const row=`
                <tr>
                    <td>${index+1}</td>
                    <td>${each.name}</td>
                    <td>₹${each.last.toLocaleString()}</td>
                    <td>₹${each.buy.toLocaleString()}/ ${each.sell.toLocaleString()}</td>
                    <td class="${each.last > each.buy? 'green':'red'}"> ${(each.last-each.buy).toFixed(2)}% </td>
                    <td>₹${(each.sell-each.buy).toLocaleString()} </td>
                </tr>
            `
            tablebdy.innerHTML+=row;
        })
    }catch(err){
        console.log('error fetching data:', err)
    }

setInterval(fetchcryptos, 30000)
}

fetchcryptos()