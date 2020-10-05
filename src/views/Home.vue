<template>
  <v-container dark>
    <v-simple-table dark>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">
              Nome
            </th>
            <th class="text-left">
              Quantidade
            </th>
            <th class="text-left">
              Quem pediu
            </th>
            <th class="text-left">
              Setor
            </th>
            <th>
              Ações
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="eq in eqs" :key="eq.id">
            <td>{{ eq.nome }}</td>
            <td>{{ eq.quantidade }}</td>
            <td>{{ eq.quem_pediu }}</td>
            <td>{{ eq.setor }}</td>
            <td>
              <v-btn color="primary" class="mr-3" dark @click="edit('Editar', eq.id)">
                <v-icon>edit</v-icon> Editar
              </v-btn>
              <v-btn dark @click="del(eq.id)">
                <v-icon>delete_forever</v-icon> Deletar
              </v-btn>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  name: "Home",
  data: () => ({
    eqs: [],
    dialog: false
  }),
  methods: {
    edit(rota, id) {
      this.$router.push({ name: rota, params: { id: id } });
    },
    async del(id) {
      let res = await axios.delete(`http://localhost:8686/delete/${id}`);
      console.log(res);
      if(res) {
        document.location.reload(true)
      }
    }
  },
  async created() {
    let res = await axios.get("http://localhost:8686/");
    this.eqs = res.data;
  }
};
</script>
