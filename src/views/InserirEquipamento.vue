<template>
  <v-container dark>
    <h1>Inserir Equipamento</h1>
    <v-form>
      <v-row>
        <v-col cols="12" md="12">
          <v-text-field solo v-model="nome" label="Nome"></v-text-field>
        </v-col>
        <v-col cols="12" md="12">
          <v-text-field solo v-model="quantidade" label="Quantidade"></v-text-field>
        </v-col>
        <v-col cols="12" md="12">
          <v-text-field solo v-model="quem_pediu" label="Quem Pediu"></v-text-field>
        </v-col>
        <v-col cols="12" md="12">
          <v-text-field solo v-model="setor" label="Setor"></v-text-field>
        </v-col>
        <v-col cols="12" md="12">
          <v-btn color="primary" dark class="btn" @click="salvar()">
            <v-icon>save </v-icon> salvar
          </v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
import axios from 'axios'
export default {
  data: () => ({
    nome: "",
    quantidade: "",
    quem_pediu: "",
    setor: ""
  }),
  methods: {
    salvar() {
      if(this.nome == "" && this.quantidade == "" && this.quem_pediu == "" && this.setor == "") {
        return
      }
      let obj = {
        nome: this.nome,
        quantidade: this.quantidade,
        quem_pediu: this.quem_pediu,
        setor: this.setor
      }
      axios.post("http://localhost:8686/create", obj).then(res => {
        this.nome = ""
        this.quantidade = ""
        this.quem_pediu = ""
        this.setor = ""
        this.$router.push({name: 'Home'})
        console.log(res);
      }).catch(err => {
        console.log(err);
      })
    }
  }
};
</script>

<style>
.btn {
  width: 100%;
}
</style>