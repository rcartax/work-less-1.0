const form = document.getElementById('f1')
        form.addEventListener('submit', resultado)
    
    function resultado(e){
        e.preventDefault()
        let date1 = window.document.getElementById('data1')
        let date2 = window.document.getElementById('data2')
        let isodate1 = new Date(date1.value + "T01:00:00Z")
        let isodate2 = new Date(date2.value + "T01:00:00Z")
        let isodate3 = new Date(date1.value + "T01:00:00Z")
        var nextDate = isodate3.getDate() + 20;
        isodate3.setDate(nextDate);
        let datems1 = Date.parse(isodate1)
        let datems2 = Date.parse(isodate2)
        let datems3 = Date.parse(isodate3)
        let parts = date2.value.split("-")
        let showDate = parts[2] + "-" + parts[1] + "-" + parts[0]

        if(datems2 <= datems3 && datems2 >= datems1){
            res1.innerHTML += `<br/>A resposta foi recebida no dia ${showDate} comprindo o prazo legal previsto de 5 dias.`
        }else{
            res1.innerHTML += `<br/>A resposta foi recebida no dia ${date2.value} NÃO comprindo o prazo legal previsto.`
        }
    }