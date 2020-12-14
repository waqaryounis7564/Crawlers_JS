const fetch = require('node-fetch');
var colors = require('colors');


let reult = "";
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
  "body": "{ dataDe: '01/12/2020', dataAte: '07/12/2020' , empresa: '', setorAtividade: '-1', categoriaEmissor: '-1', situacaoEmissor: '-1', tipoDocumento: '-1', dataReferencia: '', categoria: '8', tipo: '99', especie: '-1', periodo: '2', horaIni: '', horaFim: '', palavraChave:'',ultimaDtRef:'false', tipoEmpresa:'0'}",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
}).then(res => res.json().then(him => {
  reult=him.d.dados;
console.log(reult.red)


}))
