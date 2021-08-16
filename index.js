const fetch = require('node-fetch');



fetch("https://www.finanssivalvonta.fi/api/shortselling/datatable/current/export", {
    "headers": {
        "accept": "*/*",
        "accept-language": "en-US,en;q=0.9",
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        "request-context": "appId=cid-v1:8f51666e-7798-4375-9563-73d484cc07e8",
        "request-id": "|XrSeP.2fOhv",
        "sec-ch-ua": "\"Chromium\";v=\"92\", \" Not A;Brand\";v=\"99\", \"Microsoft Edge\";v=\"92\"",
        "sec-ch-ua-mobile": "?0",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "x-requested-with": "XMLHttpRequest",
        "cookie": "ai_user=CmtTq|2021-06-16T06:29:41.417Z; nmstat=4a2c1ac2-be10-a7f7-a9cf-814d13ffa3cf; ModalShown=true; cookie-consent=true; ASP.NET_SessionId=re05d3jl3yaza1pprfzo5ehf; finanssivalvonta=!LSYgDFiAMnij4HxJXC9ZvsxJormRjchyed9HfuJqMDCpAxsBOLRuXqN1BknVKcHFzb00gurNigqU5rEjPUkKmFP7txUxXEUxFPd8MwVw1A=="
    },
    "referrer": "https://www.finanssivalvonta.fi/en/capital-markets/issuers-and-investors/Managers-transactions/shortselling/",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": "draw=2&columns%5B0%5D%5Bdata%5D=positionHolder&columns%5B0%5D%5Bname%5D=&columns%5B0%5D%5Bsearchable%5D=true&columns%5B0%5D%5Borderable%5D=false&columns%5B0%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B0%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B1%5D%5Bdata%5D=issuerName&columns%5B1%5D%5Bname%5D=&columns%5B1%5D%5Bsearchable%5D=true&columns%5B1%5D%5Borderable%5D=false&columns%5B1%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B1%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B2%5D%5Bdata%5D=isinCode&columns%5B2%5D%5Bname%5D=&columns%5B2%5D%5Bsearchable%5D=true&columns%5B2%5D%5Borderable%5D=false&columns%5B2%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B2%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B3%5D%5Bdata%5D=netShortPositionInPercent&columns%5B3%5D%5Bname%5D=&columns%5B3%5D%5Bsearchable%5D=true&columns%5B3%5D%5Borderable%5D=false&columns%5B3%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B3%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B4%5D%5Bdata%5D=positionDate&columns%5B4%5D%5Bname%5D=&columns%5B4%5D%5Bsearchable%5D=true&columns%5B4%5D%5Borderable%5D=false&columns%5B4%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B4%5D%5Bsearch%5D%5Bregex%5D=false&start=0&length=10&search%5Bvalue%5D=&search%5Bregex%5D=false&lang=en&exportOptions%5BcolumnData%5D%5BpositionHolder%5D=Position+holder&exportOptions%5BcolumnData%5D%5BissuerName%5D=Name+of+the+issuer&exportOptions%5BcolumnData%5D%5BisinCode%5D=ISIN&exportOptions%5BcolumnData%5D%5BnetShortPositionInPercent%5D=Net+short+position+(%25)&exportOptions%5BcolumnData%5D%5BpositionDate%5D=Date&exportOptions%5Blang%5D=en",
    "method": "POST",
    "mode": "cors"
}).then(r=>r.text().then(e=>console.log(e)));
