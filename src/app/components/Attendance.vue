<template>
  <section class="hero is-fullheight" style="background-image: url(../img/attendance.png)">
    <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
  
          <span class="navbar-burger burger" data-target="navbarMenu">
                            <span></span>
          <span></span>
          <span></span>
          </span>
        </div>
        <div id="navbarMenu" class="navbar-menu">
          <div class="navbar-end">
            <a class="navbar-item is-active">
                            Inicio
                        </a>
            <a class="navbar-item">
                            Caracteristicas
                        </a>
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">
                              Cuenta
                          </a>
              <div class="navbar-dropdown">
                <a class="navbar-item">
                              Perfil
                          </a>
                <hr class="navbar-divider">
                <div class="navbar-item">
                  Cerrar Sesion
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  
    <section class="hero is-info is-small">
      <div class="hero-body">
        <div class="container has-text-centered">
          <p class="title">
            Bienvenido "hi"
          </p>
  
        </div>
      </div>
    </section>
  
    <div class="columns features">
      <div class="column is-4">
        <div class="card is-shady">
          <div class="card-image">
            <figure class="image is-1by1">
              <img src="https://st2.depositphotos.com/1051392/8875/i/950/depositphotos_88752450-stock-photo-3d-person-showing-ok-sign.jpg" alt="Placeholder image" class="modal-button" data-target="modal-image2">
            </figure>
          </div>
          <div class="card-content">
            <div class="content">
              <h6>Nombres</h6>
              <div class="field">
                <div class="control">
                  <h4> hi</h4>
                </div>
              </div>
              <h6>Apellidos</h6>
              <div class="field">
                <div class="control">
                  <h4> hi </h4>
                </div>
              </div>
              <h6>Telefono</h6>
              <div class="field">
                <div class="control">
                  <h4> hi </h4>
                </div>
              </div>
              <h6>Numero de Tardanzas</h6>
              <div class="field">
                <div class="control">
                  <h4> hi </h4>
                </div>
              </div>
              <div class="columns">
                <div class="column">
                  <span class="button is-link modal-button " data-target="modal-image2">Marcar Asistencia</span>
                </div>
                <div class="column">
                  <span class="button is-link modal-button " data-target="modal-image2">Reporte</span>
                </div>
              </div>
            </div>
          </div>
        </div>
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
        userId: '',
        //Asistencias
      }
    },
    props: {
      userId: String,
    },
    created() {
      this.getUsers();
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

