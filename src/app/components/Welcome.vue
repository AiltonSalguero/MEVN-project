<template>
	<section class="hero main_hero is-fullheight">
		<div class="hero-head">
			<div class="first_nav">
				<div class="container">
					<nav class="navbar">
						<div class="navbar-brand">
							<!-- Brand Logo -->
							<a class="navbar-item" href="http://aldi.github.io/awesome-bulma-templates">
								<img src="https://bulma.io/images/bulma-logo.png" alt="Bulma Hotel" width="112" height="28">
							</a>
	
							<!-- Phone -->
							<a class="navbar-item is-hidden-desktop" href="tel:+302109849583">
								<span class="icon" style="color: #333;">
										<i class="fa fa-lg fa-phone"></i>
									</span>
							</a>
	
							<!-- Email -->
							<a class="navbar-item is-hidden-desktop" href="mailto:reservations@bulmahotels.com">
								<span class="icon" style="color: #333;">
										<i class="fa fa-lg fa-envelope"></i>
									</span>
							</a>
	
							<!-- Facebook -->
							<a class="navbar-item is-hidden-desktop" href="#/login" target="_blank">
								<span class="icon">
										<i class="fab fa-facebook-f"></i>
									</span>
							</a>
	
							<!-- Mobile Menu -->
							<div class="navbar-burger burger" data-target="navMenuBlogHero">
								<span></span>
								<span></span>
								<span></span>
							</div>
						</div>
	
						<!-- Menu -->
						<div id="navMenuBlogHero" class="navbar-menu">
							<!-- Left Nav -->
							<div class="navbar-start">
								<a class="navbar-item is-active" href="#home">Home</a>
								<a class="navbar-item" href="#rooms">Rooms</a>
								<a class="navbar-item" href="#hotel-gallery">Gallery</a>
								<a class="navbar-item" href="#about-us">About</a>
								<a class="navbar-item" href="#contact-us">Contact Us</a>
							</div>
							<!-- ./Left Nav -->
	
							<!-- Right Nav -->
							<div class="navbar-end">
								<div class="navbar-item">
									<div class="field is-grouped">
										<p class="control">
											<a class="button is-facebook" v-on:click="toLogin()">
												<span class="icon">
														<i class="fab fa-facebook-f"></i>
													</span>
												<span>Login</span>
											</a>
										</p>
	
										<p class="control">
											<a class="button is-success" href="tel:+302109999999">
												<span class="icon">
														<i class="fa fa-phone"></i>
													</span>
												<span>Registro</span>
											</a>
										</p>
									</div>
								</div>
							</div>
							<!-- ./Right Nav -->
						</div>
						<!-- ./Menu -->
					</nav>
				</div>
			</div>
		</div>
		<div class="hero-body" style="background: url('./img/office.jpg')">
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
			}
		}
	};
</script>

<style src="./../../public/css/index.css">
	
</style>