const fetch = require('node-fetch');
var colors = require('colors');

let result = "";
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;
fetch("https://www.rad.cvm.gov.br/ENET/frmConsultaExternaCVM.aspx/ListarDocumentos", {
    "headers": {
        "accept": "application/json, text/javascript, */*; q=0.01",
        "accept-language": "en-US,en;q=0.9",
        "content-type": "application/json; charset=UTF-8",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "x-dtpc": "28$18501402_282h15vAPCOUANCAARHEKQMOMMVJPAKBRQOUKCR-0e23",
        "x-requested-with": "XMLHttpRequest"
    },
    "referrer": "https://www.rad.cvm.gov.br/ENET/frmConsultaExternaCVM.aspx",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": "{ dataDe: '02/11/2020', dataAte: '08/12/2020' , empresa: '', setorAtividade: '-1', categoriaEmissor: '-1', situacaoEmissor: '-1', tipoDocumento: '-1', dataReferencia: '', categoria: '8', tipo: '99', especie: '-1', periodo: '2', horaIni: '', horaFim: '', palavraChave:'',ultimaDtRef:'false', tipoEmpresa:'0'}",
    "method": "POST",
    "mode": "cors",
    "credentials": "include"
}).then(res => res.json().then(him => {
    result = him.d.dados;

    console.log("the reponse is:", result.red)
    console.log("-----------------------------------------------------")
    let obj = result.split("$&");
    let temporary = "";
    let chunk = 12;
    for (let i = 0; i < obj.length; i += chunk) {
        temporary = obj.slice(i, i + chunk);
        // console.log(temporary)
        processLine(temporary)
        console.log("**********************************************************************")
    }

}))

// let test =


function processLine(arr) {
    if (arr.length < 10) return;
    if (!isNaN(parseInt(arr[0].slice(0, 5))) && typeof parseInt(arr[0].slice(0, 5)) == "number") {
        console.log("company name : ", arr[1])
        console.log("delivery Date : ", arr[6])
        console.log("url :  https://www.rad.cvm.gov.br/ENET/frmExibirArquivoIPEExterno.aspx?NumeroProtocoloEntrega=" + arr[10])
    } else if (arr[0].startsWith("&*")) {
        console.log("company name : ", arr[1])
        console.log("delivery Date : ", arr[6])
        console.log("url :  https://www.rad.cvm.gov.br/ENET/frmExibirArquivoIPEExterno.aspx?NumeroProtocoloEntrega=" + arr[10])
    } else {
        console.log("company name : ", arr[0])
        console.log("delivery Date : ", arr[5])
        console.log("url :  https://www.rad.cvm.gov.br/ENET/frmExibirArquivoIPEExterno.aspx?NumeroProtocoloEntrega=" + arr[9])

    }


}
