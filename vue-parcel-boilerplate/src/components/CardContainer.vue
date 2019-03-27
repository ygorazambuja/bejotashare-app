<template>
  <div id="carouselIndicators" class="carousel slide" data-ride="carousel" data-interval="2000">
    <ol class="carousel-indicators">
      <li data-target="#carouselIndicators" data-slide-to="0" class="active"></li>
      <li data-target="#carouselIndicators" data-slide-to="1"></li>
      <li data-target="#carouselIndicators" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img class="d-block w-100" src="../assets/img/slide1.jpg" alt="First slide">
        <div class="carousel-caption d-none d-md-block">
          <h5>It, a Coisa</h5>
          <p>Palhaço do cão</p>
        </div>
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="../assets/img/slide2.jpeg" alt="Second slide">
        <div class="carousel-caption d-none d-md-block">
          <h5>Inception</h5>
          <p>Filme dos Sonhos</p>
        </div>
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="../assets/img/slide3.jpg" alt="Third slide">
        <div class="carousel-caption d-none d-md-block">
          <h5>Batman</h5>
          <p>O Cavaleiro da Trevas</p>
        </div>
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselIndicators" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselIndicators" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>

<script>
export default {
  components: {},
  name: "card-container",
  data: function() {
    return {
      msg: "pão de batata"
    };
  },
  methods: {}
};
</script>


<style scoped>
.carousel {
  background-color: #fff;
}
.carousel-item:hover {
  scale: (1.2);
  color: red;
}
</style>
