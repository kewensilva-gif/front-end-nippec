<template>
    <div class="container mx-auto mt-8     m-28 ty:m- bg-secondary-color font-heading text-sm  sm:text-base md:text-xl lg:text-2xl ">
      <form @submit.prevent="handleSubmit">
        <h1 class="text-2xl font-bold mb-8 text-center p-6">Cadastro de Usuário </h1>
        <div class="grid grid-cols-1 md:grid-cols-2  gap-4  place-items-center "> 
            <div class="ml-12">
                <div class="mb-4">
                    <label for="fullName" class="block text-sm font-medium text-gray-600 font-bold">Nome Completo</label>
                    <input  type="text" id="fullName" class="mt-1 p-2 border rounded-md mb-4  " placeholder="Nome"/>
                </div>

                <div>
                    <label for="fullName" class="block text-sm font-medium text-gray-600">Telefone</label>
                    <input  type="telefone" id="fullName" class="mt-1 p-2 border rounded-md mb-4" placeholder="Telefone"/>
                </div>

                <div>
                    <label for="fullName" class="block text-sm font-medium text-gray-600 password">Senha</label>
                    <input  type="password" id="fullName" class="mt-1 p-2 border rounded-md mb-4" placeholder="Mínimo de 6 digitos e máximo"/>
                </div>

                <div>
                    <label for="fullName" class="block text-sm font-medium text-gray-600 ">SIAPE/Matrícula</label>
                    <input  type="text" id="fullName" class="mt-1 p-2 border rounded-md mb-4" placeholder= "SIAPE/Matrícula"/>
                </div>

                <div class="">
                    <label for="fullName" class="block text-sm font-medium text-gray-600 ">Função</label>
                    <select class="block w-full px-4 py-2 mt-2 text-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300">
                    <option value="" disabled selected>Selecione sua Função</option>
                    <option value="opcao1">PROFESSOR(A)</option>
                    <option value="opcao2">TÉCNICO(A)</option>
                    <option value="opcao3">SECRETÁRIO(A)</option>
                    </select>
                </div>
            </div>

    
            <div class="mr-12 mb-20">
                <div class="mb-3">
                    <label for="email" class="block text-sm font-medium text-gray-600">Email</label>
                    <input  type="email" id="email" class="mt-1 p-2 border rounded-md mb-4" placeholder= "exemplo@email.com"/>
                </div>

                <div class="mb-3">
                    <label for="fullName" class="block text-sm font-medium text-gray-600">Login</label>
                    <input  type="text" id="fullName" class="mt-1 p-2 border rounded-md mb-4" placeholder= "Mínimo de 6 letras"/>
                </div>

                <div>
                    <label for="fullName" class="block text-sm font-medium text-gray-600">Repetir Senha</label>
                    <input  type="password" id="fullName" class="mt-1 p-2 border rounded-md mb-3" />
                </div>

                
                <div class="">
                    <label for="fullName" class="block text-sm font-medium text-gray-600 ">Função</label>
                    <select class="block w-full overflow-hidden px-4 py-2 mt-2 text-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300 w-72">
                    <option value="" disabled selected>Selecione o Departamento</option>
                    <option value="opcao1">DEPARTAMENTO DE ADMINISTRAÇÃO</option>
                    <option value="opcao2">DEPARTAMENTO DE DE BIOCIÊNCIAS</option>
                    <option value="opcao3">DEPARTAMENTO DE CIÊNCIAS CONTÁBEIS</option>
                    <option value="opcao4">DEPARTAMENTO DE FÍSICA</option>
                    <option value="opcao5">DEPARTAMENTO DE GEOGRAFIA</option>
                    <option value="opcao6">DEPARTAMENTO DE LETRAS</option>
                    <option value="opcao7">DEPARTAMENTO DE MATEMÁTICA</option>
                    <option value="opcao8">DEPARTAMENTO DE EDUCAÇÃO</option>
                    <option value="opcao9">DEPARTAMENTO DE QUIMÍCA</option>
                    <option value="opcao10">DEPARTAMENTO DE SISTEMAS DE INFORMAÇÃO</option>
                    <option value="opcao11">NÚCLEO INTEGRADO DE PÓS-GRADUAÇÃO E PESQUIDA EM EDUCAÇÃO E CIÊNCIA</option>
                    <option value="opcao12">SECRETÁRIA ACADÊMICA PEDAGÓGICA</option>
                    <option value="opcao13">SECRETÁRIA ADMINISTRATIVO-DIRETIVA - ITA</option>
                    <option value="opcao14">SECRETÁRIA DE ASSISTÊNCIA ESTUDANTIL</option>
                    <option value="opcao15">SECRETÁRIA DE PÓS-GRADUAÇÃO - ITA</option>
                    <option value="opcao16">SECRETÁRIA EXECUTIVA-ITA</option>
                    <option value="opcao17">SECRETÁRIA OPERACIONAL - ITA</option>
                    <option value="opcao18">SETOR DE PROTOCOLO E COMUNICAÇÃO - ITA</option>
                    <option value="opcao19">NÚCLEO DE TECNOLOGIA DA INFORMAÇÃO - ITA</option>
                    <option value="opcao20">BIBLIOTECA DO CAMPUS DE ITABAIANA</option>
                    <option value="opcao21">SECRETARIA DOS PROGRAMAS</option>
                    </select>
                </div>
            </div>
        </div>
  
        
        <div class="m-5 p-6 flex justify-center items-center gap-2">
            <button type="submit" class="bg-red-500 text-white px-4 py-2 rounded-md">Voltar</button>
            <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md">Cadastrar</button>
        </div>
      </form>
    </div>
  </template>
  
  <script lang="ts">
  export default {
    data() {
      return {
        fullName: "",
        email: "",
        // Adicionar mais propriedades 
      };
    },
    methods: {
      handleSubmit() {
        // lógica para enviar os dados do formulário
        console.log("Dados do formulário:", {
          fullName: this.fullName,
          email: this.email,
          // Adicione campos
        });
      },
    },
  };
  </script>
  
