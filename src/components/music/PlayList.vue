<template>
  <v-container class="grey lighten-5">
    <v-row class="mb-6" no-gutters>
      <v-col cols="3">
        <v-card class="pa-2" tile outlined><v-img :src="require('@/assets/pochette.jpg')"></v-img></v-card>
      </v-col>
      <v-col cols="1"></v-col>
      <v-col cols="6">
          <!-- <p v-for="music in playlist" :key="music.url" @click.stop="$root.$emit('click:music', music)">{{music.name}}</p> -->
        <v-simple-table>
        <template v-slot:default>
        <thead>
            <tr>
            <th class="text-center">Name</th>
            <th class="text-center">Duration</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="music in playlist" :key="music.url" @click.stop="play(music)" >
            <td>{{ music.name }}</td>
            <td>{{ music.duration }}</td>
            </tr>
        </tbody>
        </template>
    </v-simple-table>
      </v-col>

      
      
    </v-row>


  </v-container>
  
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { Getter, Mutation } from 'vuex-class';

@Component
export default class PlayList extends Vue {
    @Prop() playlist: Object[];
    isB:boolean=false

    play(music:Object){
        this.isB = true;
        this.$root.$emit('click:music', music)
    }
}

</script>

<style scoped>
.back{
    background-color: red
}
</style>