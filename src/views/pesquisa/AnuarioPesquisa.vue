<template>
    <div class="m-14">
    <h1 class="mx-1 pb-2">Grupos de Pesquisa</h1>
    <table class="min-w-full divide-y divide-gray-200 mx-0.5 table-auto w-full">
    <thead>
     
       <tr> 
        <th v-for="(title, index) in titleTable" :key="index" scope="col" class="inline-b px-6 py-3 font-heading text-left text-xs font-medium text-amber-50 uppercase tracking-wider bg-primary-color text-base text-sm sm:text-base">
               {{ title }}
           </th>
      </tr> 
    </thead>
    <tbody class="bg-secondary-color divide-y divide-gray-200">
      <tr v-for="(us, index) in usuarios" :key="index">
        <td class="px-6 py-4 whitespace-nowrap text-sm">
          {{ us.ano }}
        </td>
        <td class="px-6 py-4 whitespace-nowrap sans text-sm sm:text-base">
          {{ us.arquivo }}
        </td>
       
      </tr>
    </tbody>
  </table>
</div>
</template>

<script setup lang="ts">

import { ref } from 'vue';
import interfacePesquisa from './../../components/interfaces/InterfaceAnuario.ts'

const titleTable = ref<string[]>(
    ["Ano", "Arquivo"]
)


let usuarios = ref<interfacePesquisa[]>([
  

{
    ano: '2022',
    arquivo: ' Anuário da Produção Científica do Campus Professor Alberto Carvalho - 2022'
  },
  {
    ano: '2023',
    arquivo: ' Anuário da Produção Científica do Campus Professor Alberto Carvalho - 2023'
  }

])

</script>
    
<style></style>