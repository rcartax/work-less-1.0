export function getDates3(e){
    e.preventDefault()
    let date5 = window.document.getElementById('data5');
    let date6 = window.document.getElementById('data6');
//Normalização data1
    let isodate1 = new Date(date5.value + "T01:00:00Z");
    let datems1 = Date.parse(isodate1);
//Normnalização data2
    let isodate2 = new Date(date6.value + "T01:00:00Z");
    let datems2 = Date.parse(isodate2);
//Calculo e normalização de prazo
    let isodate3 = new Date(date5.value + "T01:00:00Z");
    var nextDate = isodate3.getDate() + 5;
    let isodate4 = isodate3;
    isodate4.setDate(nextDate);
    let correctedDate;
    switch(isodate4.getDay()) {
        case 0:
            correctedDate = isodate4.getDate() + 1;
            break;
        case 1:
            correctedDate = isodate4.getDate();
            break;
        case 2:
            correctedDate = isodate4.getDate();
            break;
        case 3:
            correctedDate = isodate4.getDate();
            break;
        case 4:
            correctedDate = isodate4.getDate();
            break;
        case 5:
            correctedDate = isodate4.getDate();
            break;
        case 6:
            correctedDate = isodate4.getDate() + 2;
            break;            
    };
    isodate3.setDate(correctedDate);
    let datems3 = Date.parse(isodate3);
    let parts = date6.value.split("-")
    let showDate = parts[2] + "-" + parts[1] + "-" + parts[0]    
//Teste de prazo
    if(datems2 <= datems3 && datems2 >= datems1){
        result3.innerHTML = `<br/>A resposta foi recebida no dia ${showDate} comprindo o prazo legal previsto de 5 dias.`
    }else if(datems2 < datems1){
        result3.innerHTML = `<br/>Datas invalidas.`
    }else{
        result3.innerHTML = `<br/>A resposta foi recebida no dia ${showDate} NÃO comprindo o prazo legal previsto.`
    }
};