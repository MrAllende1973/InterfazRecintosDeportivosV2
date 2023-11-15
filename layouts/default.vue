<template>
  <div>
    <LayoutAppNav />
    <div class="pl-[46px]">
      <LayoutAppHeader />
      <main>
        <slot />
      </main>
      <LayoutAppFooter />
    </div>
  </div>
</template>
