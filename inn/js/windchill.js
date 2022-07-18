const ape = {
    init: () => {
      document.getElementById('latitude').addEventListener('change', ape.blow);
      document.getElementById('longitude').addEventListener('change', ape.blow);
      document.getElementById('card-btnGet').addEventListener('click', ape.blow);
      document.getElementById('card-btnCurrent').addEventListener('click', ape.blow);
      ape.blow();
    },
    blow: () => {
      let V;
      let T;
      let velocity = document.getElementById("speedy-gonzales");
      let temperature = document.getElementById("card-hotness");

      V = parseFloat(velocity.textContent);
      V = V * 2.237;
      // console.log("velocity: "+V);
      T = parseFloat(temperature.textContent);
      T = T * 9 / 5 + 32
      // console.log("temperature: "+T);
      // V = 60;
      // T = 10;
      if (T <= 50 && V > 3) {
        T = (T * (9 / 5)) + 32;
        celsius = (T - 32) * (5 / 9);
        wind_chill = 35.74 + (0.6215 * T) - (35.75 * Math.pow(V, 0.16)) + (0.4275 * T * Math.pow(V, 0.16));
        //  console.log(wind_chill);

        celsiuss = (wind_chill - 32) * (5 / 9);
        hotty = `${celsiuss.toFixed(2)}°C (${wind_chill.toFixed(2)}°F)`;
        document.getElementById("card-windChill").textContent = hotty;
      } else {
        document.getElementById("card-windChill").textContent = "Not cool enough"
      }
    }
  }
  ape.init();