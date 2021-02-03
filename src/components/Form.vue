<template>
  <form>
    <div class="form-group">
      <input type="text" class="form-control" id="inputCity" v-model="textcontent"/>
    </div>
    <button type="submit" class="btn btn-info btn-block" @click.prevent="showMeteo(textcontent)">Rechercher</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      textcontent: ''
    }
  },
  methods: {
    showMeteo(textcontent) {
      this.$emit("showMeteo", textcontent)
    }
  }
}
</script>