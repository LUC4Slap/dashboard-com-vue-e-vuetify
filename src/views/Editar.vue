<template>
  <v-container dark>
    <v-form>
      <v-row>
        <v-col cols="12" md="12">
          <v-text-field solo v-model="nome" label="Nome"></v-text-field>
        </v-col>
        <v-col cols="12" md="12">
          <v-text-field
            solo
            v-model="quantidade"
            label="Quantidade"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="12">
          <v-text-field
            solo
            v-model="quem_pediu"
            label="Quem Pediu"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="12">
          <v-text-field solo v-model="setor" label="Setor"></v-text-field>
        </v-col>
        <v-col cols="12" md="12">
          <v-btn color="primary" dark class="btn" @click="save()">
            <v-icon>save </v-icon> salvar
          </v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    id: "",
    nome: "",
    quantidade: "",
    quem_pediu: "",
    setor: ""
  }),
  methods: {
    save() {
      let obj = {
        id: this.id,
        nome: this.nome,
        quantidade: this.quantidade,
        quem_pediu: this.quem_pediu,
        setor: this.setor
      };
      axios.put('http://localhost:8686/update', obj).then(() => {
       this.$router.push({name: 'Home'})
      }).catch(err => {
        console.error(err)
      })
    }
  },
  async created() {
    this.id = this.$route.params.id;
    axios
      .get(`http://localhost:8686/seleId/${this.id}`)
      .then(res => {
        let resp = { ...res.data[0] };
        this.nome = resp.nome;
        this.quantidade = resp.quantidade;
        this.quem_pediu = resp.quem_pediu;
        this.setor = resp.setor;
      })
      .catch(erro => {
        console.error(erro);
      });
  }
};
</script>

<style>
</style>