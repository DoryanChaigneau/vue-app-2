<template>
  <div class="favoris">
    <div class="container">
      <div>
        <a><strong>Liste de vos favoris : </strong></a>
      </div>
      <table class="table">
        <thead>
        <tr>
          <th scope="col">Villes</th>
          <th scope="col">Météo</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(affichage, index) in affichages" :key="index">
          <th>{{affichage.ville}}</th>
          <th>

            <TableauFavoris :ville="affichage.ville" :temperature="affichage.temperature" :humidite="affichage.humidite" :vent="affichage.vent" :icon="affichage.icon"></TableauFavoris>
          </th>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>

import TableauFavoris from "@/components/TableauFavoris";

export default {
  name: 'Favoris',
  components: {
    TableauFavoris
  },
  data() {
    return {
      ville: '',
      temperature: '',
      humidite: '',
      vent: '',
      textcontent: '',
      icon: '',
      favoris: '',
      affichages: []
    }
  },
  methods: {
    showMeteo: async function(ville){
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=2536afab9d640a3ec5b9fb6038fdaae3&units=metric&lang=fr`;
      let res = {}

      await fetch(url)
          .then(response =>
              response.json().then( data => {
                res = {
                  "ville": data.name,
                  "temperature": data.main.temp + '°',
                  "humidite": data.main.humidity + '%',
                  "vent": data.wind.speed + 'km/h',
                  "icon": data.weather[0].icon
                }
              })
          )
          .catch((err) => console.log('Erreur : ' + err));
      return res;
    }
  },
  created() {
    this.favoris = JSON.parse(localStorage.getItem("ville"));
    this.favoris.forEach(
        async favori => {
          let response = await this.showMeteo(favori)
          this.affichages.push(response)
        }
    )
  }
}
</script>