<template>
  <div class="Attendancse">
    <nav class="navbar navbar-light bg-light">
      <a class="navbar-brand" href="/">MEVN Tasks</a>
    </nav>
    <div class="container">
      <div class="row pt-5">
        <div class="col-md-5">
          <div class="card">
            <div class="card-body">
              <form @submit.prevent="sendTask">
                <div class="form-group">
                  <input v-model="task.title" class="input is-rounded" type="text" placeholder="Insert A Task">
                </div>
                <div class="form-group">
                  <textarea v-model="task.description" cols="30" rows="10" placeholder="Insert A Description" class="form-control"></textarea>
                </div>
  
                <button class="btn btn-primary btn-block">Send</button>
  
                <button class="btn btn-primary btn-block">Edit</button>
  
              </form>
            </div>
          </div>
        </div>
        <div class="col-md-5">
          <table class="table table-bordered">
            <thead>
              <tr>
                <th>Task</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="task of tasks">
                <td>{{task.title}}</td>
                <td>{{task.description}}</td>
                <td>
                  <button @click="deleteTask(task._id)" class="btn btn-danger">Delete</button>
                  <button @click="editTask(task._id)" class="btn btn-secondary">
                          Edit
                        </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="row columns">
      <div>
        <div class="row columns">
          <div class="column is-one-third">
            <div class="card large">
              <div class="card-image">
                <figure class="image">
                  <img src="https://images.unsplash.com/photo-1475778057357-d35f37fa89dd?dpr=1&auto=compress,format&fit=crop&w=1920&h=&q=80&cs=tinysrgb&crop=" alt="Image">
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-left">
                    <figure class="image is-96x96">
                      <img src="https://i.imgsafe.org/a4/a4bb9acc5e.jpeg" alt="Image">
                    </figure>
                  </div>
                  <div class="media-content">
                    <p class="title is-4 no-padding">Okinami</p>
                    <p><span class="title is-6"><a href="http://twitter.com/#">@twitterid</a></span></p>
                    <p class="subtitle is-6">Lead Developer</p>
                  </div>
                </div>
                <div class="content">
                  The Beast stumbled in the dark for it could no longer see the path. It started to fracture and weaken, trying to reshape itself into the form of metal. Even the witches would no longer lay eyes upon it, for it had become hideous and twisted.
                  <div class="background-icon"><span class="icon-twitter"></span></div>
                </div>
              </div>
            </div>
          </div>
          <div class="card large">
            <div class="card-image">
              <figure class="image">
                <img src="https://images.unsplash.com/photo-1475778057357-d35f37fa89dd?dpr=1&auto=compress,format&fit=crop&w=1920&h=&q=80&cs=tinysrgb&crop=" alt="Image">
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-96x96">
                    <img src="https://i.imgsafe.org/a4/a4bb9acc5e.jpeg" alt="Image">
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4 no-padding">Okinami</p>
                  <p><span class="title is-6"><a href="http://twitter.com/#">@twitterid</a></span></p>
                  <p class="subtitle is-6">Lead Developer</p>
                </div>
              </div>
              <div class="content">
                The Beast stumbled in the dark for it could no longer see the path. It started to fracture and weaken, trying to reshape itself into the form of metal. Even the witches would no longer lay eyes upon it, for it had become hideous and twisted.
                <div class="background-icon"><span class="icon-twitter"></span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
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

