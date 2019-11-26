<template>
    <div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
@import url(http://fonts.googleapis.com/css?family=Raleway:400,300,500,600,700,800,900,100,200);
@import url("https://netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css");

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

h1,h2,h3,h4,h5,h6{
    margin: 0;
    padding: 0;
}

body{
  font-family: 'Raleway', sans-serif;
  font-size:14px;
  font-weight: 400;
}

i{
  font-family: fontawesome !important;
}
.container{
    max-width: 1150px;
    width: 100%;
    margin: 0 auto;
}


/* MEDIA */

@media screen and (max-width:1090px){
    .portfolio-grid{
      display: flex;
      flex-wrap: wrap;
      align-items: stretch;
      justify-content: space-around;
/*      flex-direction: column;*/

    }
    
    li.grid-item{
      width: 49%;  
    }
    
}

@media screen and (max-width:800px) {
  .show-menu-btn,.hide-menu-btn{
    display: block;
  }
  .menu{
    position: fixed;
    width: 100%;
    height: 100vh;
    background: #333;
    right: -100%;
    top: 0;
    text-align: center;
    padding: 80px 0;
    line-height: normal;
    transition: 0.7s;
      z-index: 100;
  }
  .menu a{
    display: block;
    padding: 20px;
  }
  .hide-menu-btn{
    position: absolute;
    top: 40px;
    right: 40px;
  }
  #chk:checked ~ .menu{
    right: 0;
  }
    .portfolio-grid{
      display: block;
      margin: 0 auto;
/*      flex-direction: column;*/

    }
    li.grid-item{
      width: 100%;
      display: flex;
      justify-content: center;  
    }

    .grid-hover{
      display: flex;
      justify-content: center;
    }
    
}
.items_wrap{
  max-width: 360px;  
  position: relative;
}
</style>
