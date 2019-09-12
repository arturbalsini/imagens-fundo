<template>
  <div class="row">
    <b-form-select v-model="fundo" :options="fundos" class="busca-fundo">
      <template v-slot:first>
        <option :value="''" disabled>Selecione uma imagem de fundo.</option>
      </template>
    </b-form-select>
    <b-img-lazy :src="fundo" fluid-grow alt=""></b-img-lazy>
  </div>
</template>

<script>
import FundosService from '@/services/FundosService'

export default {
  name: 'ImagensFundo',

  mounted () {
    this.getFundos()
  },

  methods: {
    async getFundos () {
      const response = await FundosService.fetchFundos()
      this.fundos = response.data.fundos;
    }
  },

  data() {
    return {
      fundos: [
      ],
      fundo: ''
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .imagem-fundo{
    width: 100%
  }
  .busca-fundo, .busca-fundo:focus{
position: absolute;
    width: 50%;
    left: 25%;
    top: 30px;
    -webkit-box-shadow: 3px 3px 5px black;
    box-shadow: 3px 3px 5px black;
    background-color: rgba(248,249,250,.5);
    border-radius: unset;
    padding: 10px 10px;
    height: 45px;
    border-color: unset;
    box-shadow: none;
  }

  .busca-fundo:hover{
    cursor: pointer;
  }
</style>
