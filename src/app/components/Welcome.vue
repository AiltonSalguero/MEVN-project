<template>
	<section class="hero is-success is-fullheight">
		<div class="hero-body">
			<div class="container has-text-centered">
				<div class="column is-4 is-offset-4">
					<h3 class="title has-text-blue">Lenguaje de programacion orientado a objetos</h3>
					<p class="subtitle has-text-blue">Por favor inicie sesion para continuar.</p>
					<div class="box">
						<figure class="image is-128x128">
							<img class="center-block" src="https://www.uni.edu.pe/images/demo/logouni.png">
						</figure>
						<br>
						<br>
						<form>
							<div class="field">
								<div class="control">
									<input class="input is-med" type="email" placeholder="Your Email" autofocus="">
								</div>
							</div>
	
							<div class="field">
								<div class="control">
									<input class="input is-med" type="password" placeholder="Your Password">
								</div>
							</div>
						</form>
					</div>
					<button class="button is-block is-info is-large is-fullwidth">Login</button>
					
				</div>
				<p class="has-text-gray">
					<a href="../">Registrarse</a> &nbsp;·&nbsp;
	
				</p>
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