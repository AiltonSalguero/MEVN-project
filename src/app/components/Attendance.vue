<template>
  <section class="hero is-fullheight" style="background-image: url(../img/attendance.png)">
    <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item" href="../">
            <img src="img/logo.png" alt="Logo">
          </a>
          <span class="navbar-burger burger" data-target="navbarMenu"></span>
        </div>
        <div id="navbarMenu" class="navbar-menu">
          <div class="navbar-end">
            <a class="navbar-item is-active" v-on:click="sendReport()">Inicio</a>
            <a class="navbar-item" v-on:click="sendReport()">Reportes</a>
  
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">Cuenta</a>
              <div class="navbar-dropdown">
                <a class="nav-item" v-on:click="toProfile()">
                  <span class="icon">
            									<i class="fas fa-sign-in-alt"></i>
            								</span>
                  <span>Perfil</span>
                </a>
                <hr class="navbar-divider">
                <a class="nav-item" v-on:click="toHome()">
                  <span class="icon">
            									<i class="fas fa-door-open"></i>
            									</span>
                  <span>Salir</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  
    <div class="columns">
      <div class="column">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">
              {{task.title}}
            </p>
            <a href="#" class="card-header-icon" aria-label="more options">
              <span class="icon">
                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                  </span>
            </a>
          </header>
          <div class="card-content">
            <div class="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
              <a href="#">@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>
              <br>
              <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
            </div>
          </div>
          <footer class="card-footer">
            <a href="#" class="card-footer-item">Save</a>
            <a href="#" class="card-footer-item">Edit</a>
            <a href="#" class="card-footer-item">Delete</a>
          </footer>
        </div>
      </div>
  
      <div class="container">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>Task</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="task of tasks">
              <td>{{user.firstname}}</td>
              <td>{{user.lastname}}</td>
              <td>
                <button @click="deleteTask(task._id)" class="btn btn-danger">Delete</button>
                <button @click="editTask(task._id)" class="btn btn-secondary">Edit</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
  
    </div>
  </section>
</template>

<script>
  import Task from '../../models/classes/Task.js';
  import User from '../../models/classes/User.js';

  export default {
    data() {
      return {
        //BORRAR DESPUES
        task: new Task(),
        tasks: [],
        edit: false,
        taskToEdit: '',
        //

        //USER
        user: new User(),


        //Asistencias


      }
    },
    created() {
      this.getTasks();
    },
    methods: {

      sendReport() {
        //LLAMAR AL SERVIDOR
        return true;
      },
  
      toHome() {
        let route = this.$router.resolve({
          path: '/'
        });
        // let route = this.$router.resolve('/link/to/page'); // This also works.
        window.open(route.href, '_blank');
      },
  
      toLogin() {
        let route = this.$router.resolve({
          path: '/login'
        });
        // let route = this.$router.resolve('/link/to/page'); // This also works.
        window.open(route.href, '_blank');
      },
  
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

