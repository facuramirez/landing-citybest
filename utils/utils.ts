export const isAndroidOrIOS = (): boolean => {
  return ["iPad", "iPhone", "iPod"].indexOf(navigator?.appName) >= 0 || false;
};

function reverseGeocodingWithGoogle() {
  let geocode = new Promise((resolve, reject) => {
    fetch(`https://ipapi.co/json/`)
      .then((res) => res.json())
      .then((response) => {
        resolve(response);
      })
      .catch((status) => {
        resolve(null);
      });
  });

  return geocode;
}

export function geoFindMe(callbackF: (coutryName: any) => void) {
  if (!navigator.geolocation) {
    return;
  }

  function success() {
    reverseGeocodingWithGoogle().then((res) => {
      callbackF(res);
    });
  }
  function error() {
    console.log("Unable to retrieve your location");
  }
  navigator.geolocation.getCurrentPosition(success, error);
}

export const PaisesAutorizados = [
  {
    id: "Colombia",
    nombre: "Colombia",
    img: "paises/Colombia.png",
  },

  {
    id: "Chile",
    nombre: "Chile",
    img: "paises/CHILE.png",
  },

  {
    id: "Peru",
    nombre: "Peru",
    img: "paises/PERU.png",
  },

  {
    id: "Mexico",
    nombre: "Mexico",
    img: "paises/MEXICO.png",
  },

  {
    id: "Uruguay",
    nombre: "Uruguay",
    img: "paises/URUGUAY.png",
  },
];
