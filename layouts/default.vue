<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand tag="h1" class="mb-0" to="/">
        Home
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/posts">Posts</b-nav-item>
          <b-nav-item to="/about">About</b-nav-item>
          <b-nav-item to="/admin">Admin</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <b-container fluid>
      <nuxt />
    </b-container>
  </div>
</template>

<style></style>
