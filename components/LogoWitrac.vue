<template>
    <v-row no-gutters justify="center" align="center">
        <v-col cols="12" sm="8" md="6">
            <v-row class=" py-4 d-flex justify-center">
                <img
                    class="logo--witrac"
                    alt="Logo Witrac"
                    src="https://witrac.io/wp-content/uploads/2020/08/8Recurso-7.png"
                    loading="lazy" 
                    srcset="https://witrac.io/wp-content/uploads/2020/08/8Recurso-7.png 362w, https://witrac.io/wp-content/uploads/2020/08/8Recurso-7-300x41.png 300w" 
                    sizes="(max-width: 362px) 100vw, 362px"
                >
            </v-row>
        </v-col>
    </v-row>
</template>

<style>
.logo--witrac {
  width: 180px;
  padding: 60px 0;
  animation: turn 1.5s ease-out forwards 1s;
}


@keyframes turn {
  100% {
    transform: rotateX(0deg);
  }
}
</style>
