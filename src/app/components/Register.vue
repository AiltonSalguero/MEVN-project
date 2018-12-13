<template>
    <section class="section" id="contact">
        <div class="container">
            <div class="section-heading">
                <h3 class="title is-2">Contact</h3>
                <h4 class="subtitle is-5">Get in touch</h4>
            </div>
            <br>
    
            <div class="columns">
                <div class="column is-6 is-offset-3">
                    <div class="box">
                        <div class="field">
                            <label class="label">Name</label>
                            <div class="control">
                                <input class="input" type="text" placeholder="Text input">
                            </div>
                        </div>
    
                        <div class="field">
                            <label class="label">Email</label>
                            <div class="control has-icons-left">
                                <input class="input" type="email" placeholder="Email input" value="">
                                <span class="icon is-small is-left">
                      <i class="fas fa-envelope"></i>
                    </span>
                            </div>
                        </div>
    
                        <div class="field">
                            <label class="label">Message</label>
                            <div class="control">
                                <textarea class="textarea" placeholder="Textarea"></textarea>
                            </div>
                        </div>
    
                        <div class="field is-grouped has-text-centered">
                            <div class="control">
                                <button class="button is-link is-large"><span class="icon">
                        <i class="fas fa-envelope"></i>
                      </span>
                      <span>Submit</span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
        </div>
    </section>
</template>

<script>
    class Task {
        constructor(title = '', description = '') {
            this.title = title;
            this.description = description;
        }
    }
    export default {
        data() {
            return {
                task: new Task(),
                tasks: [],
                edit: false,
                taskToEdit: ''
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

