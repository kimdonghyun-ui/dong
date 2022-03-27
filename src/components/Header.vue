<template>

  <b-navbar id="header" toggleable="lg" type="dark" fixed="top" class="p-0 m-0">
    <b-container fluid="md" class="header-wrap">
      <b-navbar-brand tag="h1" class="logo p-0 m-0"><a href="/"><span class="sr-only">SELPI</span></a></b-navbar-brand>
      <b-navbar-toggle target="nav-collapse" variant="outline-info" class="btn-toggle-menu p-0 m-0">    
        <b-icon icon="list" style="color: #000;" class="btn-open"></b-icon>
        <b-icon icon="x" style="color: #000;" class="btn-close"></b-icon>
      </b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto btn-toggle-list">
          <b-nav-item href="#">셀피물류</b-nav-item>
          <b-nav-item href="#">셀피도매센터</b-nav-item>
          <!-- <b-nav-item href="#" disabled>Disabled</b-nav-item> -->
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>



</template>

<script>



export default {
  name: 'HeaDer',
  props: {
    msg: String
  },
  data() {
    return {

    }
  },
    created() {
        console.log('');
    },
  components: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss"  scoped>

   #header {
     background:#fff;
    .inner{
      width:100%;
      max-width:1280px;
    }
    .header-wrap{
      padding:20px;
    }
    .logo {
      a {
        display: block;
        width: 103px;
        height: 40px;
        background: url('../assets/images/common/CI_SELPI.svg') center center no-repeat;
        background-size: contain;
      }
    }


    .btn-toggle-menu{
      &[aria-expanded] {
        .btn-close,.btn-open{
          display: none;
          width:28px;
          height:28px;
        }
      }
      &[aria-expanded="true"] {
        .btn-close{
          display: block;
        }
      }
      &[aria-expanded="false"] {
        .btn-open{
          display: block;
        }
      }
    }


    #nav-collapse{

      .btn-toggle-list{
        a{
          color:#000;
          font-weight: 400;
        }
        li + li{
          margin-left:35px;
        }
      }
      &.show,&.collapsing{
        .btn-toggle-list{
          padding:24px 0;
          li{
            margin-left:0;
            a{
              padding:24px 0;
              font-weight: bold;
            }
          }

        }
      }

    }





  } 



</style>
