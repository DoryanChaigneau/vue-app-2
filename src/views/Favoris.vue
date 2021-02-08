<template>
  <div class="favoris">
    <div class="container">
      <div>
        <a><strong>Liste de vos favoris : </strong></a><br>
      </div>
      <table class="table">
        <thead>
        <tr>
          <th scope="col">Villes</th>
          <th scope="col">Météo</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(favori, index) in favoris" :key="index">
          <th>{{favori}}</th>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Favoris',
  data() {
    return {
      ville: '',
      temperature: '',
      humidite: '',
      vent: '',
      textcontent: '',
      icon: '',
      favoris: ''
    }
  },
  methods: {
    showMeteo: function(ville){
      ville = "Nantes"
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=366e5f70d9e70e45364730cb9a4f0221&units=metric&lang=fr`;

      fetch(url)
          .then((response) =>
              response.json().then((data) => {
                // On récupère la ville
                this.ville = data.name;
                // On récupère la température
                this.temperature = data.main.temp + '°';
                // On récupère le taux d'humidité
                this.humidite = data.main.humidity + '%';
                // On récupère le % de vent
                this.vent = data.wind.speed + 'km/h';
                // On affiche l'image en fonction de la météo
                this.icon = data.weather[0].icon;
              })
          )
          .catch((err) => console.log('Erreur : ' + err));
    }
  },
  created() {
    this.favoris = JSON.parse(localStorage.getItem("ville"));
  }
}
</script>