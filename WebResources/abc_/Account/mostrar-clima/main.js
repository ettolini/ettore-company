const setCrmHeaders = (req) => {
  req.setRequestHeader('OData-MaxVersion', '4.0');
  req.setRequestHeader('OData-Version', '4.0');
  req.setRequestHeader('Accept', 'application/json');
  req.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
  req.setRequestHeader('Prefer', 'odata.include-annotations="*"');
};

const executeGetClima = () =>
  new Promise((succeedCallback, errorCallback) => {
    var req = new XMLHttpRequest();

    const baseUrl = parent.Xrm.Page.context.getClientUrl();

    req.open('POST', `${baseUrl}/api/data/v9.1/abc_obtenerClima`);

    setCrmHeaders(req);

    req.onreadystatechange = function () {
      try {
        if (this.readyState === 4) {
          req.onreadystatechange = null;
          if (this.status === 200) {
            return succeedCallback(this);
          }

          const result = this.response
            ? JSON.parse(this.response)
            : { status: this.status, statusText: this.statusText };

          errorCallback(result);
        }
      } catch (ex) {
        console.error(ex);
      }
    };

    req.send();
  });

const climaElement = document.getElementById('clima');
executeGetClima()
  .then((result) => {
    const response = JSON.parse(result.response);
    climaElement.innerHTML = `Clima: ${response.clima}`;
  })
  .catch((ex) => console.error(ex));
