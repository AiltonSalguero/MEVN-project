<template>
    <section class="hero is-success is-fullheight" style="background: url('../img/login.jpg')">
        <div class="hero-body">
            <div class="container has-text-centered">
                <div class="column is-4 is-offset-4">
                    <h3 class="title has-text-grey">Login</h3>
                    <p class="subtitle has-text-grey">Please login to proceed.</p>
                    <div class="box">
                        <figure class="avatar">
                            <img src="/img/logo.png">
                        </figure>
                        <form>
                            <div class="field">
                                <div class="control">
                                    <!--model-->
                                    <input v-model="user.email" class="input is-large" type="email" placeholder="Your Email" autofocus="">
                                </div>
                            </div>
    
                            <div class="field">
                                <div class="control">
                                    <!--model-->
                                    <input v-model="user.password" class="input is-large" type="password" placeholder="Your Password">
                                </div>
                            </div>
                            <div class="field">
                                <label class="checkbox">
                                                              <input type="checkbox">
                                                              Remember me
                                                            </label>
                            </div>
                            <button class="button is-block is-info is-large is-fullwidth" v-on:click="validUser(user.email, user.password)">Login</button>
                        </form>
                    </div>
                    <p class="has-text-grey">
                        <a href="../">Sign Up</a> &nbsp;·&nbsp;
                        <a href="../">Forgot Password</a> &nbsp;·&nbsp;
                        <a href="../">Need Help?</a>
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import Task from '../../models/classes/Task.js';
    import User from '../../models/classes/User.js';
    export default {
        name: 'Login',
        data() {
            return {
                title: 'Login',
                users: [],
                user: new User(),
    
    
            }
        },
        created() {
            this.getUsers();
        },
    
        methods: {
            getUsers() {
                fetch('/api/users')
                    .then(res => res.json())
                    .then(data => {
                        this.users = data;
                    });
            },
            validUser(email, password) {
                fetch('/api/users')
                    .then(res => res.json())
                    .then(data => {
                        this.users = data;
                        //console.log(this.users.find(user => user.email == email))
                        //let idUsuario = this.users.find(user => user.email == email)._id;
    
                        var found = this.users.find(function(element) {
                            return element.email == 'ailton@hotmail.com';
                        });
                        console.log('f',found)
    
                        fetch('/api/users', {
                            method: 'PUT',
                            body: JSON.stringify({
                                email: email,
                                password: password
                            })
                        })
                        //console.log(idUsuario)
                    });
                //this.getUsers();
            },
            toAttendance() {
                if (this.validUser()) {
                    let route = this.$router.resolve({
                        path: '/attendance'
                    });
                    window.open(route.href, '_blank');
                } else {
    
                }
    
            }
        }
    }
</script>

<style src="./../../public/css/login.css">
    
</style>
