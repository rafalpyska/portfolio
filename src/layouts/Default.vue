<template>
  <div class="flex flex-col bg-white my-4 mx-auto rounded-lg bg-main bg-no-repeat bg-main-svg min-h-80vh px-20 py-12 w-10/12 leading-loose">
    <header class="header flex justify-between items-center flex-wrap py-8 mb-8">
        <g-image src="@/assets/images/logo.svg" alt="Logo" />
      <nav class="text-lg">
        <g-link class="p-2" to="/">Strona główna</g-link>
        <g-link class="p-2" to="/about/">O mnie</g-link>
        <g-link class="p-2" to="/about/">Technologie</g-link>
        <g-link class="p-2" to="/about/">Portfolio</g-link>
        <g-link class="p-2" to="/about/">Kontakt</g-link>
      </nav>
    </header>
    <slot/>
    <footer class="flex justify-end">
        <g-link class="p-2" to="https://www.linkedin.com/in/rafal-pyska/">
          <i class="fab fa-linkedin text-blue-500 text-3xl"></i>
        </g-link>
        <g-link class="p-2" to="https://www.facebook.com/profile.php?id=100000564851827">
          <i class="fab fa-facebook-square text-blue-500 text-3xl"></i>
        </g-link>
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
.active {
  color: rgba(59, 130, 246);
}
</style>
