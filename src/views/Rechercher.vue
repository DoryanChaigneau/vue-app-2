<template>
  <div class="Rechercher">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-sm-6 my-3">
          <Form @showMeteo="showMeteo($event)"></Form>
        </div>
        <div>
          <button type="submit" class="btn btn-info btn-block" @click.prevent="addFavoris(ville)">Ajouter aux favoris</button>
        </div>
        <div class="col-12 col-sm-6 d-flex justify-content-center my-3">
          <Tableau :ville="ville" :temperature="temperature" :humidite="humidite" :vent="vent" :icon="icon"></Tableau>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Tableau from '@/components/Tableau.vue'
import Form from "@/components/Form";

export default {
  name: 'Rechercher',
  components: {
    Form,
    Tableau
  },
  data() {
    return {
      ville: '',
      temperature: '',
      humidite: '',
      vent: '',
      textcontent: '',
      icon: '',
      favoris: []
    }
  },
  methods: {
    showMeteo: function(ville){
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=2536afab9d640a3ec5b9fb6038fdaae3&units=metric&lang=fr`;

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
    },
    addFavoris: function(ville) {
      let datas = localStorage.getItem("ville");
      if (datas == "" || datas == null) {
        localStorage.setItem("ville", JSON.stringify([]));
      }
      this.favoris = JSON.parse(localStorage.getItem("ville"));
      this.favoris.push(ville);
      localStorage.setItem("ville", JSON.stringify(this.favoris));
    }
  }
}
</script>

<style>
body {
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
}

footer {
  font-size: 3rem;
  color: #ffffff;
  text-align: right;
  width: 100%;
  padding: 2rem 3rem;
}

footer img {
  min-height: 80px;
}
</style>