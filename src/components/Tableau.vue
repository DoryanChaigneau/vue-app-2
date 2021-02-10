<template>
  <div class="Tableau">
    <div class="box-container">
      <div id="ville" class="box">{{ ville }}</div>
      <div id="temperature" class="box"><i class='fas fa-thermometer-half'></i>{{ temperature }}</div>
      <div id="humidite" class="box"><i class='fas fa-tint'></i>{{ humidite }}</div>
      <div id="vent" class="box"><i class='fas fa-wind'></i>{{ vent }}</div><br>
      <div>
        <img :src="`http://openweathermap.org/img/w/${icon}.png`" alt='temps' width="150" height="150">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    ville: String,
    temperature: String,
    humidite: String,
    vent: String,
    icon: String
  }
}
</script>

<style scoped>

.box-container {
  width: 300px;
  height: 300px;
  display: flex;
  flex-wrap: wrap;
}

.box {
  width: 150px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  color: white;
}

#ville {
  background-color: rgba(41, 128, 185, 0.75);
}

#temperature {
  background-color: rgba(43, 78, 101, 0.75);
}

#humidite {
  background-color: rgba(52, 152, 219, 0.75);
}

#vent {
  background-color: rgba(143, 146, 154, 0.75);
}
</style>