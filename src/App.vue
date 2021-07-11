<template>
  <div id="app">
      <div class="nav">
        <router-link class="brand-title" to="/">State App</router-link> 
        <router-link class="btn" to="/about">Create New</router-link>
      </div>
      <div class="container">
        <router-view/>
      </div>
      
    </div>
</template>

<style>
  *{
    margin: 0;
    padding: 0;
  }
  #app{
    background-color: #ff5e14;
    min-height: 100vh;
    font-family: monospace;
  }

  .nav{
    background-color: #fff;
    color: #ff5e14;
    padding: 30px 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .brand-title{
    color: #ff5e14;
    font-size: 1.5rem;
    text-decoration: none;
    font-weight: bold;
    font-family: monospace;
  }

  .btn{
    background-color: #ff5e14;
    color: #fff;
    padding: 10px;
    text-decoration: none;

  }

  .container{
    width: 900px;
    margin: 0 auto;
  }
</style>
