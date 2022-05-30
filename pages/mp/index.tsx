export default function Mp_received(){
const htmlData=`<html lang="en"><head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>CityBest - Mercado pago</title>
<script>
  function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(
      /[?&]+([^=&]+)=([^&]*)/gi,
      function (m, key, value) {
        vars[key] = value;
      },
    );
    return vars;
  }

  var vars = getUrlVars();

  const code = vars['code'];
  const sessionToken = vars['state'];

  console.log(code);

  window.ReactNativeWebView.postMessage(JSON.stringify({ code: code }));
  /*  fetch('https://citybestapp.com:5000/drivers/auth/link-mp-wallet', {
    method: 'POST',
    body: JSON.stringify({ code: code }),
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer '+ sessionToken,
    },
  }).then(async (res) => {
    const json = await res.json();
    console.log(json);
  }); */
</script>
</head>
<body>

</body></html>`;

return (
    <div dangerouslySetInnerHTML={{ __html:htmlData }} />
    );
}