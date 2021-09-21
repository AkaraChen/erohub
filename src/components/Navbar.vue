<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">Erohub</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <line x1="4" y1="6" x2="20" y2="6"></line>
   <line x1="4" y1="12" x2="20" y2="12"></line>
   <line x1="4" y1="18" x2="20" y2="18"></line>
</svg>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link active" to="/">首页</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link active" to="/konachan">Konachan</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link active" to="/expliyh">Expliyh</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>

</script>

<style>

</style>
