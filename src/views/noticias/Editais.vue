
<template>
    <div class="p-2">
      <h1 class="text-primary-color">Editais</h1>
      <Horas/>
      <EditalComponent
        titulo="Programa de Pós-Graduação em Ciências Naturais lança edital"
        urlImagem="../../assets/x.png"
        subTituloconteudo="Oportunidade de se qualificar na segunda melhor universidade do nordeste."
        conteudo="O Programa de Pós-graduação em Ciências naturais abre edital de seleção para novos alunos, uma boa oportunidade para quem quer crescer o currículo ou seguir carreira acadêmica."
        dataPublicacao="09/10/2023 às 16:04"
      />

      <EditalComponent
        titulo="Resultado Final Edital FAPITEC/SE/SEDUC Nº 09/2022"
        urlImagem="../../assets/x.png"
        subTituloconteudo="Tecnologias Sociais"
        conteudo="O Programa de Pós-graduação em Ciências naturais abre edital de seleção para novos alunos, uma boa oportunidade para quem quer crescer o currículo ou seguir carreira acadêmica."
        dataPublicacao="09/10/2023 às 16:04"
      />
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import EditalComponent from '../../components/editais/editalComponente.vue'; 
  import Horas from '../../components/editais/horas.vue'; 

  export default defineComponent({
    components: {
      EditalComponent,
      Horas
    },
  });
  </script>
  