<template>
	<section class="hero is-fullheight" style="background: url('./img/office.jpg')">
		<nav class="navbar">
			<div class="container">
				<div class="navbar-brand">
					<a class="navbar-item" href="../">
						<img src="http://bulma.io/images/bulma-type-white.png" alt="Logo">
					</a>
					<span class="navbar-burger burger" data-target="navbarMenu">
	                                    <span></span>
					<span></span>
					<span></span>
					</span>
				</div>
				<div id="navbarMenu" class="navbar-menu">
					<div class="navbar-end">
						<span class="navbar-item">
	                                        <a class="button is-white is-outlined" v-on:click="toLogin()" href="#">
	                                            <span class="icon">
	                                                <i class="fa fa-home"></i>
	                                            </span>
						<span>Iniciar Sesion</span>
						</a>
						</span>
	
						<span class="navbar-item">
	                                        <a class="button is-white is-outlined" v-on:click="toRegister()" href="#">
	                                            <span class="icon">
	                                                <i class="fas fa-sign-in-alt"></i>
	                                            </span>
						<span>Registrarse</span>
						</a>
						</span>
					</div>
				</div>
			</div>
		</nav>
		<div class="hero-body">
			<div class="container has-text-centered">
				<div class="slider-content animated zoomIn">
					<div>
						<h1 class="title is-1 main-text">Sampieri</h1>
						<p class="subtitle is-4 main-text">@sampieri</p>
					</div>
				</div>
			</div>
		</div>

		<div class="hero-body">
                        <div class="container has-text-centered">
                            <div class="column is-6 is-offset-3">
                                <h1 class="title">
                                    Coming Soon
                                </h1>
                                <h2 class="subtitle">
                                    $this is the best software platform for running an internet business. We handle billions of dollars every year for forward-thinking businesses around the world.
                                </h2>
                                <div class="box">
                                    <div class="field is-grouped">
                                        <p class="control is-expanded">
                                            <input class="input" type="text" placeholder="Enter your email">
                                        </p>
                                        <p class="control">
                                            <a class="button is-info">
                                                Notify Me
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
	
	</section>
</template>


<script>
	export default {
		methods: {
			toLogin() {
				let route = this.$router.resolve({
					path: '/login'
				});
				// let route = this.$router.resolve('/link/to/page'); // This also works.
				window.open(route.href, '_blank');
			},
			toRegister() {
				let route = this.$router.resolve({
					path: '/register'
				});
				// let route = this.$router.resolve('/link/to/page'); // This also works.
				window.open(route.href, '_blank');
			}
		}
	};
</script>

<style src="./../../public/css/index.css">
	
</style>