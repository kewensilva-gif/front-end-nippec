<template>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 h-screen bg-gray-100">
      <div class="sm:col-span-1 p-10 mt-10 sm:mt-0">
        <h1 class="text-3xl font-bold mb-4 mt-20 text-primary-color">Quem Somos?</h1>
        <p>O Núcleo Integrado de Pós-graduação e Pesquisa em Educação e Ciência (NIPPEC) é o setor responsável por oferecer suporte administrativo aos Programas de Mestrado e Doutorado ofertados pelo Campus. Nosso objetivo é incentivar, integrar e divulgar atividades de pesquisa e didático-científicas relacionadas ao ensino da Pós-graduação no âmbito do Campus Prof. Alberto Carvalho, bem como oferecer suporte a pesquisadores dos demais Campi da Universidade Federal de Sergipe.</p>
      </div>
      <div class="sm:col-span-1 flex justify-center items-center">
        <div class="bg-white shadow-md rounded-md p-8 w-96">
          <h2 class="text-3xl font-bold mb-4 text-center text-primary-color">Entrar</h2>
          <form @submit.prevent="login">
            <div class="mb-4">
              <label for="login" class="block font-semibold">Login</label>
              <input type="text" id="login" v-model="loginData.username" class="border border-gray-400 px-3 py-2 rounded-md w-full" placeholder="Digite seu login">
            </div>
            <div class="mb-4">
              <label for="senha" class="block font-semibold">Senha</label>
              <input type="password" id="senha" v-model="loginData.password" class="border border-gray-400 px-3 py-2 rounded-md w-full" placeholder="Digite sua senha">
            </div>
            <div class="flex items-center mb-4">
              <input type="checkbox" id="lembrar" v-model="rememberMe" class="mr-2">
              <label for="lembrar">Lembrar-me</label>
            </div>
            <button type="submit" class="bg-primary-color text-white px-4 py-2 rounded-md w-full">Login</button>
          </form>
          <div class="mt-4 text-center ">
            <p>Não tem uma conta? <a href="#" class="text-primary-color">Cadastre-se</a></p>
            <p><a href="#">Esqueceu a senha?</a></p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'Login',
    data() {
      return {
        loginData: {
          username: '',
          password: '',
        },
        rememberMe: false,
      };
    },
    methods: {
      login() {
        // Adicione sua lógica de login aqui
        console.log('Tentativa de login:', this.loginData);
      },
    },
  });
  </script>
  