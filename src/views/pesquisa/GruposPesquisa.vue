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
          {{ us.grupo }}
        </td>
        <td class="px-6 py-4 whitespace-nowrap sans text-sm sm:text-base">
          {{ us.linhaPredominante }}
        </td>
        <td class="px-6 py-4 whitespace-nowrap sans text-sm sm:text-base">
          {{ us.partCampusIta }}
        </td>
        <td class="px-6 py-4 whitespace-nowrap sans text-sm sm:text-base">
          {{ us.latex }}
        </td>
        <td class="px-6 py-4 whitespace-nowrap sans text-sm sm:text-base">
          {{ us.areaPredominate }}
        </td>
      </tr>
    </tbody>
  </table>
</div>
</template>

<script setup lang="ts">

import { ref } from 'vue';
import interfacePesquisa from '../../components/interfaces/InterfacePesquisa.ts'

const titleTable = ref<string[]>(
  ["Grupos", "Linhas de Pesquisa", "Participantes do Campus de Itabaiana","Currículo Latex", "Área Predominante"]
)


let usuarios = ref<interfacePesquisa[]>([
  {
    grupo: 'link',
    linhaPredominante: 'Empreendedorismo e Inovação dentro das escolas públicas',
    partCampusIta: 'Dra. Valdice Barbosa de Queiroz',
    latex: 'link',
    areaPredominate: 'Administração'
  },
  {
    grupo: 'link',
    linhaPredominante: 'Formação de Professores: saberes e práticas',
    partCampusIta: 'Dra. Marilene Batista da Cruz',
    latex: 'sim',
    areaPredominate: 'Educação'
  },
  {
    grupo: 'link',
    linhaPredominante: 'História da Leitura e Cultura letrada',
    partCampusIta: 'Dr. João Paulo Gama Oliveira',
    latex: 'sim',
    areaPredominate: 'Educação'
  },
  {
    grupo: 'link',
    linhaPredominante: 'Divulgação Científica e Ensino de Física',
    partCampusIta: 'Dr. Tiago Nery Ribeiro',
    latex: 'sim',
    areaPredominate: 'Física'
  },

  {
    grupo: 'link2',
    linhaPredominante: 'Divulgação Científica e Ensino de Física',
    partCampusIta: 'Dr. teste',
    latex: 'sim',
    areaPredominate: 'Física'
  },

])

</script>
    
<style></style>

 