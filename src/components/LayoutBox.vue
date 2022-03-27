<template>
  <b-container fluid id="layout">
    <Header />
    <main id="contents">
      <slot></slot>
    </main>
    <Footer />
  </b-container>
</template>

<script>
import Header from './Header.vue'
import Footer from './Footer.vue'


export default {
  name: 'LayoutBox',
  props: {
    msg: String
  },
  data() {
    return {
        hello : `                                     동동님 vue
                          ;iiiiiiiiiiSSSSSSSSiiiiiiiiii;     
                          .rXXXXXXXXXrrrrrrrSXXXXXXXXXr.     
                          :iXXXXXXXX2. ;;;;, r3XXXXXXXi;     
                         ,rSSSSSXXXX2..sSSi: r3XXXSSSSSr,    
                          ,siiiiS2XX2. :;;:,.rXX2Siiiis,     
                           ,riiiii2X2..5XXXi .22iiiiir,      
                            .riiiii22..::::,,r2iiiiir.       
                             .riiiii5SSiiiiS22iiiiir.        
                               ;iiiii5X3333X5iiiii;          
                                :iiiiiSXXXXSiiiii:           
                                 :siiiiSXXSiiiis:            
                                  ,siiiiiiiiiis,             
                                   .riiiiiiiir.              
                                    .riiiiiir.               
                                     .;iiii;.                
                                       ;ii;                  
                                        ::  ;`,
    }
  },
    created() {
        console.log(this.hello);
    },
  components: {
    Header,
    Footer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss"  scoped>
#layout{
    display: flex;
    flex-direction: column;
    align-items: center;
    #contents{
      margin-top:81px;
    }
}
</style>
