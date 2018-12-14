<template>
    <div class="skewed-bg">
        <section class="section" id="app">
            <div class="container">
                <div class="columns is-paddingless is-radiusless form-wrapper">
                    <div class="column is-one-fifth has-background-brand has-text-white">
                        <div class="form-heading-container is-paddingless is-radiusless">
                            <h1 class="is-size-large has-text-weight-bold is-cursive is-rotated-minus-ninty form-heading">Signup</h1>
                        </div>
                    </div>
                    <div class="column has-text-black form-container">
                        <div class="column form-header">
                            <h2 class="has-text-weight-bold title is-paddingless is-marginless">New User?</h2>
                            <p class="has-text-weight-light caption">Use the form below to create your account.</p>
                        </div>
                        <form @submit.prevent="validateBeforeSubmit">
                            <div class="column">
                                <div class="columns">
                                    <div class="column">
                                        <div class="field">
                                            <label class="label">First Name</label>
                                            <div class="control">
                                                <input v-validate="'required|alpha'" :class="{'input': true, 'is-danger': errors.has('firstname') }" name="firstname" data-vv-as="First Name" type="text" tabindex="1">
                                                <span v-if="errors.has('firstname')" class="help is-danger">{{ errors.first('firstname') }}</span>
                                            </div>
                                        </div>
                                        <div class="field">
                                            <label class="label">Last Name</label>
                                            <div class="control">
                                                <input v-validate="'required|alpha'" :class="{'input': true, 'is-danger': errors.has('lastname') }" name="lastname" data-vv-as="Last Name" type="text" tabindex="2">
                                                <span v-if="errors.has('lastname')" class="help is-danger">{{ errors.first('lastname') }}</span>
                                            </div>
                                        </div>
                                        <div class="column field is-paddingless dob-container">
                                            <label class="label">Date of Birth</label>
                                            <div class="columns">
                                                <div class="column is-one-fifth">
                                                    <div class="control">
                                                        <div class="select">
                                                            <select v-validate="'required'" name="date" :class="{'input': true, 'is-danger': errors.has('date') }">
                                                                <option value=""></option>
                                                                <option value="1" selected>1</option>
                                                            </select>
                                                            <span v-if="errors.has('date')" class="help is-danger">{{ errors.first('date') }}</span>
                                                        </div>
                                                    </div>
    
                                                </div>
                                                <div class="column">
                                                    <div class="control">
                                                        <div class="select">
                                                            <select v-validate="'required'" name="month" :class="{'input': true, 'is-danger': errors.has('month') }">
                                                                <option value=""></option>
                                                                <option value="January" selected>January</option>
                                                                </select>
                                                            <span v-if="errors.has('month')" class="help is-danger">{{ errors.first('month') }}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="column">
                                                    <div class="control">
                                                        <div class="select">
                                                            <select v-validate="'required'" name="year" :class="{'input': true, 'is-danger': errors.has('year') }">
                                                                        <option value=""></option>
                                                                        <option value="2018">2018</option>
                                                            </select>
                                                            <span v-if="errors.has('year')" class="help is-danger">{{ errors.first('year') }}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
    
                                        <div class="field">
                                            <label class="label">Phone Number</label>
                                            <div class="control">
                                                <input v-validate="'required|min:6|digits:8'" name="phone" data-vv-as="Phone" class="input" type="number">
                                                <span v-if="errors.has('phone')" class="help is-danger">{{ errors.first('phone') }}</span>
                                            </div>
                                        </div>
                                        <div class="field">
                                            <label class="label">Password</label>
                                            <div class="control">
                                                <input v-validate="'required|min:6'" name="password" data-vv-as="Password" class="input" type="password">
                                                <span v-if="errors.has('password')" class="help is-danger">{{ errors.first('password') }}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="column">
                                        <div class="field">
                                            <label class="label">Nationality</label>
                                            <div class="control">
                                                <div class="select">
                                                    <select v-validate="'required'" name="nationality" :class="{'input': true, 'is-danger': errors.has('nationality') }">
                                                        <option value="">  </option>
                                                        <option value="Zimbabwe"> Zimbabwe </option>
                                                        </select>
                                                    <span v-if="errors.has('nationality')" class="help is-danger">{{ errors.first('nationality') }}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="field">
                                            <label class="label">Email</label>
                                            <div class="control has-icons-right">
                                                <input v-validate="'required|email'" name="email" data-vv-as="Email" :class="{'input': true, 'is-danger': errors.has('email') }" type="email">
                                                <span class="icon is-small is-right">
                                                        <i v-if="errors.has('email')" class="material-icons">warning</i>
                                                        <i v-else class="material-icons">check</i>
                                                    </span>
                                            </div>
                                            <span v-if="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</span>
                                        </div>
                                        <div class="field">
                                            <label class="label">Gender</label>
                                            <div class="control gender-container">
                                                <label class="custom-radio">Male
                                                <input type="radio" checked="checked" name="radio">
                                                <span class="checkmark"></span>
                                              </label>
                                                <label class="custom-radio">Female
                                                <input type="radio" name="radio">
                                                <span class="checkmark"></span>
                                              </label>
                                            </div>
                                        </div>
                                        <div class="field">
                                            <label class="label">OTP</label>
                                            <div class="control">
                                                <input v-validate="'required|alpha'" name="OTP" class="input" data-vv-as="OTP" type="text">
                                                <span v-if="errors.has('OTP')" class="help is-danger">{{ errors.first('OTP') }}</span>
                                            </div>
                                        </div>
                                        <div class="field">
                                            <label class="label">Confirm Password</label>
                                            <div class="control">
                                                <input class="input" v-validate="'required|min:6'" name="confirmpassword" data-vv-as="Confirm Password" type="password">
                                                <span v-if="errors.has('confirmpassword')" class="help is-danger">{{ errors.first('confirmpassword') }}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="column form-footer">
                                <div class="columns">
                                    <div class="column login-link">Have an account? <a href="" class="is-link has-text-brand">Login</a></div>
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
    class User {
        constructor(firstname = '', lastname = '', email = '', phone = 0, password = '', confirmpassword = '', job = '', tardiness = 0) {
            this.firstname = firstname;
            this.lastname = lastname;
            this.email = email;
            this.phone = phone;
            this.password = password;
            this.confirmpassword = confirmpassword;
            this.job = job;
            this.tardiness = tardiness;
        }
    }
    export default {
        data() {
            return {
                user: new User(),
                users: [],
                edit: false,
            }
        },
        created() {
            this.getTasks();
        },
        methods: {
            sendTask() {
                if (this.edit === false) {
                    fetch('/api/tasks', {
                            method: 'POST',
                            body: JSON.stringify(this.task),
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json'
                            }
                        })
                        .then(res => res.json())
                        .then(data => {
                            this.getTasks();
                            this.task = new Task();
                        });
                } else {
                    fetch('/api/tasks/' + this.taskToEdit, {
                            method: 'PUT',
                            body: JSON.stringify(this.task),
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json'
                            }
                        })
                        .then(res => res.json())
                        .then(data => {
                            this.getTasks();
                            this.task = new Task();
                            this.edit = !this.edit;
                        });
                }
            },
            getTasks() {
                fetch('/api/tasks')
                    .then(res => res.json())
                    .then(data => {
                        this.tasks = data;
                    });
            },
            deleteTask(taskId) {
                fetch('/api/tasks/' + taskId, {
                        method: 'DELETE',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        }
                    })
                    .then(res => res.json())
                    .then(data => {
                        this.getTasks();
                    });
            },
            editTask(taskId) {
                fetch('/api/tasks/' + taskId)
                    .then(res => res.json())
                    .then(data => {
                        const {
                            _id,
                            title,
                            description
                        } = data;
                        this.task = new Task(title, description);
                        this.taskToEdit = _id;
                        this.edit = true;
                    });
            }
        }
    }
</script>

