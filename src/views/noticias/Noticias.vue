
<template>
    <div class="p-2">
      <h1 class="text-primary-color">Notícias (` `)</h1>
      <Horas/>

      <EditalComponent
        titulo="Prorrogação do prazo para submissão de projetos ao Edital nº 19/2023 COPES/POSGRAP/UFS"
        urlImagem="../../assets/x.png"
        subTituloconteudo="Prazo de submissão prorrogado"
        conteudo="A COPES comunica que o prazo para submissão de projetos ao Edital nº 19/2023 COPES/POSGRAP/UFS foi prorrogado para o dia 05/12/2023.Clique no link abaixo para obter mais informações: Clique aqui [...]"
        dataPublicacao="14/07/2023 às 16:04"
      />

      <EditalComponent
        titulo="Em parceria com o CNPq, Iniciativa Amazônia+10 lança a Chamada Expedições Científicas"
        urlImagem="../../assets/x.png"
        subTituloconteudo="O edital vai disponibilizar quase R$ 60 milhões para financiar pesquisas na região amazônica. O prazo para submissão de propostas é abril de 2024"
        conteudo="Nesta quinta-feira (16/11), a Iniciativa Amazônia+10 e o Conselho Nacional de Desenvolvimento Científico e Tecnológico (CNPq) lançaram oficialmente a Chamada Expedições Científicas, que vai disponibilizar R$ 59,2 milhões para financiar pesquisas voltada [...]"
        dataPublicacao="09/10/2023 às 16:04"
      />

      <EditalComponent
        titulo="Prêmio José Reis de Divulgação Científica e Tecnológica abre inscrições"
        urlImagem="../../assets/x.png"
        subTituloconteudo="As candidaturas podem ser submetidas até dia 8 de março"
        conteudo="Estão abertas as inscrições para a 44ª Edição do Prêmio José Reis de Divulgação Científica e Tecnológica, promovido pelo Conselho Nacional de Desenvolvimento Científico e Tecnológico (CNPq). Este ano, a categoria a ser contemplada é Instituição e Veículo [...]"
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
  