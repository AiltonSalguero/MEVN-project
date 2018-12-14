<template>
    <div class="hero">
        <section class="section" id="app">
            <div class="container">
                <div class="card">
                    <div class="column has-text-black form-container">
                        <div class="column form-header">
                            <h2 class="has-text-weight-bold title is-paddingless is-marginless">Nuevo usuario</h2>
                            <p class="has-text-weight-light caption">Ingresa tus datos.</p>
                        </div>
                        <form @submit.prevent="validateBeforeSubmit">
                            <div class="column">
                                <div class="columns">
                                    <div class="column">
                                        <div class="field">
                                            <label class="label">Nombres</label>
                                            <div class="control">
                                                <input v-model="user.firstname" v-validate="'required|alpha'" :class="{'is-hovered': true, 'is-danger': errors.has('firstname') }" name="firstname" data-vv-as="First Name" type="text" tabindex="1">
                                                <span v-if="errors.has('firstname')" class="help is-danger">{{ errors.first('firstname') }}</span>
                                            </div>
                                        </div>
                                        <div class="field">
                                            <label class="label">Apellido</label>
                                            <div class="control">
                                                <input v-model="user.lastname" v-validate="'required|alpha'" :class="{'is-hovered': true, 'is-danger': errors.has('lastname') }" name="lastname" data-vv-as="Last Name" type="text" tabindex="2">
                                                <span v-if="errors.has('lastname')" class="help is-danger">{{ errors.first('lastname') }}</span>
                                            </div>
                                        </div>
                                        <div class="field">
                                            <label class="label">Celular</label>
                                            <div class="control">
                                                <input v-model="user.phone" v-validate="'required|min:6|digits:9'" name="phone" data-vv-as="Phone" class="is-hovered" type="number">
                                                <span v-if="errors.has('phone')" class="help is-danger">{{ errors.first('phone') }}</span>
                                            </div>
                                        </div>
                                        <div class="field">
                                            <label class="label">Contrasenia</label>
                                            <div class="control">
                                                <input v-model="user.password" v-validate="'required|min:6'" name="password" data-vv-as="Password" class="is-hovered" type="password">
                                                <span v-if="errors.has('password')" class="help is-danger">{{ errors.first('password') }}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="column">
                                        <div class="field">
                                            <label class="label">Email</label>
                                            <div>
                                                <input v-model="user.email" v-validate="'required|email'" name="email" data-vv-as="Email" :class="{'is-hovered': true, 'is-danger': errors.has('email') }" type="email">
                                                <span class="icon is-small is-right">
                                                                                <i v-if="errors.has('email')" class="material-icons">warning</i>
                                                                            </span>
                                            </div>
                                            <span v-if="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</span>
                                        </div>
                                        <div class="field">
                                            <label class="label">Genero</label>
                                            <div class="control gender-container">
                                                <label class="custom-radio">Masculino
                                                                        <input type="radio" checked="checked" name="radio">
                                                                        <span class="checkmark"></span>
                                                                      </label>
                                                <label class="custom-radio">Femenino
                                                                        <input type="radio" name="radio">
                                                                        <span class="checkmark"></span>
                                                                      </label>
                                            </div>
                                        </div>
                                        <div class="field">
                                            <label class="label">Confirmar constrasenia</label>
                                            <div class="control">
                                                <input v-model="user.confirmpassword" class="is-hovered" v-validate="'required|min:6'" name="confirmpassword" data-vv-as="Confirm Password" type="password">
                                                <span v-if="errors.has('confirmpassword')" class="help is-danger">{{ errors.first('confirmpassword') }}</span>
                                            </div>
                                        </div>
                                        <div class="field">
                                            <label class="label">Cargo</label>
                                            <div class="control gender-container">
                                                <label class="custom-radio">Administrador
                                                                        <input type="radio" checked="checked" name="radio">
                                                                        <span class="checkmark"></span>
                                                                      </label>
                                                <label class="custom-radio">Femenino
                                                                        <input type="radio" name="radio">
                                                                        <span class="checkmark"></span>
                                                                      </label>
                                                <label class="custom-radio">Femenino
                                                                        <input type="radio" name="radio">
                                                                        <span class="checkmark"></span>
                                                                      </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="column form-footer">
                                <div class="columns">
                                    <div class="column login-link">Si ya eres usuario ingresa <a href="" class="is-link has-text-brand">aqui</a></div>
                                    <div class="column">
                                        <div class="field">
                                            <div class="control">
                                                <button class="button has-text-white has-background-brand is-cursive is-radiusless is-size-5 btn-signup">Complete Signup</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import Vue from 'vue';
    import VeeValidate from 'vee-validate';
    import User from '../../models/classes/User.js'
    
    Vue.use(VeeValidate);
    
    export default {
        data() {
            return {
                user: new User(),
            }
        },
        methods: {
            validateBeforeSubmit() {
                this.$validator.validateAll().then((result) => {
                    if (result) {
                        // eslint-disable-next-line
                        alert('Usuario registrado!');
                        let route = this.$router.resolve({
                            path: '/attendance'
                        });
                        // let route = this.$router.resolve('/link/to/page'); // This also works.
                        window.open(route.href, '_blank');
                        this.registerUser();
                    }
                    alert('Complete los campos');
                });
            },
    
            registerUser() {
                fetch('/api/users', {
                        method: 'POST',
                        body: JSON.stringify(this.user),
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        }
                    })
                    .then(res => res.json());
            }
        }
    }
</script>



<style src="./../../public/css/register.css">
    
</style>
