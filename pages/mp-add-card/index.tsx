export default function Mp_add_Card(){
    let htmlData=`
    <script src="https://secure.mlstatic.com/sdk/javascript/v1/mercadopago.js"></script>
       
   <form method="post" id="pay" name="pay">
      <fieldset>
        <p>
          <label for="cardNumber">Card number</label>
          <input name="cardNumber" type="text" id="cardNumber" data-checkout="cardNumber" class="input-form" />
        </p>
        <p>
          <label for="cardholderName">Name and surname</label>
          <input name="cardholderName" type="text" id="cardholderName" data-checkout="cardholderName" class="input-form"/>
        </p>
        <p>
          <label for="cardExpirationMonth">Expiration month</label>
          <input name="cardExpirationMonth" type="text" id="cardExpirationMonth" data-checkout="cardExpirationMonth" class="input-form"/>
        </p>
        <p>
          <label for="cardExpirationYear">Expiration year</label>
          <input name="cardExpirationYear" type="text" id="cardExpirationYear" data-checkout="cardExpirationYear" class="input-form"/>
        </p>
        <p>
          <label for="securityCode">Security code</label>
          <input name="securityCode" type="text" id="securityCode" data-checkout="securityCode" class="input-form"/>
        </p>
        <p>
          <label for="docType">ID type</label>

          <input type="text" id="docType" name="docType" data-checkout="docType" class="input-form"/>
        </p>
        <p>
          <label for="docNumber">ID number</label>
          <input type="text" id="docNumber" name="docNumber" data-checkout="docNumber" class="input-form"/>
        </p>
        <p>
          <label for="email">E-mail</label>
          <input name="email" type="email" id="email" name="email" class="input-form"/>
        </p>

        <input type="hidden" name="token"/>
      </fieldset>

      <button id="button" type="button">Enviar</button>
    </form>   
    <script>
    /*  window.Mercadopago.setPublishableKey(
         'APP_USR-2aab5c33-31dd-4e14-979a-fff3d853f980',
       );
    */
    function setFormValues(data) {
      var $form = document.querySelector("#pay");

      const inputs = $form.querySelectorAll(".input-form");
      const keys = Object.keys(data);

      Array.from(inputs).forEach(function (e, i) {
        if (data[e.id]) {
          e.value = data[e.id];
        }
      });
    }

    function sdkResponseHandler(status, response) {
      if (status != 200 && status != 201) {
        window.ReactNativeWebView.postMessage(
          JSON.stringify({
            ok: false,
            errorCode: response.cause[0].code,
          })
        );
      } else {
        const cardToken = response.id;
        const requestData = {
          ok: true,
          cardTokenId: cardToken,
        };

        if (window.ReactNativeWebView) {
          window.ReactNativeWebView.postMessage(JSON.stringify(requestData));
        }
      }
    }

    async function submit(data) {
      if (data) {
        setFormValues(data);
      }

      setTimeout(() => {
        var $form = document.querySelector("#pay");

        window.Mercadopago.createToken($form, sdkResponseHandler);
      }, 100);
    }

    document.addEventListener("message", function (e) {
      /* ANDROID */
      console.log('EVENTO ACA RECIBO ESTO===>',e.data)
      submit(JSON.parse(e.data));
      
    });

    window.addEventListener("message", function (e) {
      /* IOS */
      submit(JSON.parse(e.data));
    });
  </script>
    `;
   return (
    <div dangerouslySetInnerHTML={{ __html:htmlData }} />
    );
}