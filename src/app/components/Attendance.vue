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
                  <a v-on:click="toHome()" class="navbar-item">
                                          Cerrar Sesion
                                      </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  
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
                  <h4>{{ user.lastname }} {{ user.firstname }} </h4>
                </div>
              </div>
              <h6>Cargo</h6>
              <div class="field">
                <div class="control">
                  <h4> {{ user.job }} </h4>
                </div>
              </div>
              <h6>Telefono</h6>
              <div class="field">
                <div class="control">
                  <h4> {{ user.phone }} </h4>
                </div>
              </div>
              <h6>Numero de Tardanzas</h6>
              <div class="field">
                <div class="control">
                  <h4> {{ user.tardiness }} </h4>
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
  import User from '../../models/classes/User.js';
  import UserSignUp from '../../models/classes/UserSignUp.js';
  
  
  export default {
    data() {
      return {
        //USER
        user: new User(),
        users: [],
        usersIDs: [],
        userId: '',
        //Asistencias
      }
    },
    created() {
      this.getUserId();
    },
    methods: {
      getUserId() {
  
        fetch('/api/users')
          .then(res => res.json())
          .then(data => {
              this.users = data;
            })//Lista de usuarios registrados

            fetch('/api/usersignup')
            .then(res => res.json())
            .then(data => {
              this.usersIDs = data; //Lista de IDS

              var userID = this.usersIDs.find(function(element) {
                return element._id == '5c14c69ece4ac334d6b62250';
              }); //arreglo con el id que se cambia cada vez que se logea
              console.log(userID)
  
              this.user = this.users.find(function(element) {
                
                return element._id == userID.id;
              });
              console.log(this.user)
              console.log(this.user.job)
            })
          }  
      },
  
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
      }
    }
</script>

