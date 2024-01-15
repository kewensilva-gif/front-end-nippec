<template>
    <div class="mt-60 ml-8">
      <h1 class="text-primary-color">Resultados</h1>
      <p class="text-primary-color">{{ formattedDateTime }}</p>
      <p class="mt-8">Não há resultados disponíveis no momento.</p>

      <div class="mt-7">
        <button  class="custom-button" @click="">Anterior </button>
        <button class="custom-button" @click="">Próximo</button>
      </div>

      <div>
        
      </div>

    </div>
  </template>
  
  <script lang="ts">
  export default {
    data() {
      return {
        formattedDateTime: "",
      };
    },
    mounted() {
      this.getCurrentDateTime();
    },
    methods: {
      getCurrentDateTime() {
        const now = new Date();
  
        
        const daysOfWeek = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
        const dayOfWeek = daysOfWeek[now.getDay()];
  
        
        const months = [
          "janeiro",
          "fevereiro",
          "março",
          "abril",
          "maio",
          "junho",
          "julho",
          "agosto",
          "setembro",
          "outubro",
          "novembro",
          "dezembro",
        ];
        const month = months[now.getMonth()];
  
        
        const formattedDate = `${dayOfWeek}, ${now.getDate()} de ${month} de ${now.getFullYear()}`;
  
        this.formattedDateTime = formattedDate;
      },
    },
  };
  </script>
  
  <style>
  .custom-button {
  background-color: #ffffff; 
  color: rgb(128, 125, 125); 
  padding: 10px 20px; 
  font-size: 16px; 
  cursor: pointer; 
  border: 1px solid; 
  border-radius: 5px;
  margin: 2px; 
}
  </style>
  