export function getDates2(e){
    e.preventDefault()
    let date3 = window.document.getElementById('data3');
    let date4 = window.document.getElementById('data4');
//Normalização data1
    let isodate1 = new Date(date3.value + "T01:00:00Z");
    let datems1 = Date.parse(isodate1);
//Normnalização data2
    let isodate2 = new Date(date4.value + "T01:00:00Z");
    let datems2 = Date.parse(isodate2);
//Calculo e normalização de prazo
    let isodate3 = new Date(date3.value + "T01:00:00Z");
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

    let parts = date4.value.split("-")
    let showDate = parts[2] + "-" + parts[1] + "-" + parts[0]
    let passDate1 = isodate2;
    let passDay = isodate2.getDate() + 1;
    passDate1.setDate(passDay);
    const formatYmd = () => passDate1.toISOString().slice(0, 10);
//Teste de prazo
    if(datems2 >= datems1 && datems2 <= datems3){
        result2.innerHTML = `<br/>A resposta foi recebida no dia ${showDate} comprindo o prazo legal previsto de 5 dias.`
        formInput3.innerHTML = `
        <p class="inputTitle"><label for="data1">Data de Envio</label></p>
        <input type="date" id="data5" name="data1" value="${formatYmd(new Date())}">
        <p class="inputTitle"><label for="data2">Data de Recepção</label></p>
        <input type="date" id="data6" name="data2">
        <br/>
        `
        check3.style.display = "block";
    }else if(datems2 < datems1) {
        result2.innerHTML = `<br/>Datas invalidas.`
    }else{
        result2.innerHTML = `<br/>A resposta foi recebida no dia ${showDate} NÃO comprindo o prazo legal previsto.`
    }
};