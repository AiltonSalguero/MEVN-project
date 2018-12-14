<template>
	<section class="hero is-fullheight" style="background: url('./img/office.jpg')">
		<nav class="navbar">
			<div class="container">
				<div class="navbar-brand">
					<a class="navbar-item" href="../">
						<img src="img/logo.png" alt="Logo">
					</a>
					<span class="navbar-burger burger" data-target="navbarMenu">
	                                <span></span>
					<span></span>
					<span></span>
					</span>
				</div>
				<div id="navbarMenu" class="navbar-menu">
					<div class="navbar-end">
						<a class="navbar-item is-active">
	                                    Home
	                                </a>
						<a class="navbar-item">
	                                    Help
	                                </a>
						<div class="navbar-item has-dropdown is-hoverable">
							<a class="navbar-link">Cuenta</a>
							<div class="navbar-dropdown">
								<a class="nav-item" v-on:click="toLogin()">
									<span class="icon">
									<i class="fas fa-sign-in-alt"></i>
									</span>
									<span>Login</span>
								</a>
								<hr class="navbar-divider">
								<a class="nav-item" v-on:click="toRegister()">
									<span class="icon">
									<i class="fas fa-door-open"></i>
									</span>
									<span>Registro</span>
								</a>
							</div>
						</div>
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