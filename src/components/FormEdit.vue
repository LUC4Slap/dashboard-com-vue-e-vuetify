<template>
  <v-form>
    <v-container dark>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="nome"
            label="Nome"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="quantidade"
            label="Quantidade"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="quem_pediu"
            label="Quem Pediu"
            required
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          md="12"
        >
          <v-text-field
            v-model="setor"
            label="setor"
            required
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
// import axios from 'axios'
export default {
  name: "FormEdit",
  data: () => ({
    eq: [],
    dialog: false,
    nome: "",
    quantidade: 0,
    quem_pediu: "",
    setor: "",
  }),
  props: {
    id: String
  },
  async created() {
    // let res = await axios.get();
  }
};
</script>

<style>
</style>