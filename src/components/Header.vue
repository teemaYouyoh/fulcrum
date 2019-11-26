<template>
    <div>
        <div class="header">
      <div class="container">
        <router-link :to="'/'"><h2 class="logo">FULCRUM</h2></router-link>
        <input type="checkbox" id="chk">
        <label for="chk" class="show-menu-btn">
          <i class="fas fa-align-justify"></i>
        </label>

        <ul class="menu">
          <div class="linksHeader">
              <a href="#"><i class="fas fa-search"></i></a>
              <router-link :to="'/login'"><i class="fas fa-user"></i></router-link>
              <a href="#"><i class="fas fa-plus"></i></a>
              <a href="#"><i class="fas fa-home"></i></a>
          </div>

          <div class="socialHeader">
              <a href="#"><i class="fab fa-instagram"></i></a>
              <a href="#"><i class="fab fa-twitter"></i></a>
          </div>

          <!-- <a href="#"><i class="fab fa-telegram"></i></a> -->

          <label for="chk" class="hide-menu-btn">
            <i class="fas fa-times"></i>
          </label>
        </ul>
        </div>
      </div>
      
    <div class="subHeader">
      <div class="container">
        <div class="navSubHeader">
          <div class="subHeaderCategory">Category</div>
          <div class="subHeaderKind">Kind</div>
          <div class="subHeaderAuthor">Author</div>
          <div class="subHeaderSort">Sort</div>
        </div>
      </div>
    </div>
    </div>
</template>

<style scoped>

/* HEADER */

.header{
  height: 100px;
  background: #2b2b2b;
  padding: 0 20px;
  color: #fff;

}
.logo{
  line-height: 100px;
  float: left;
  text-transform: uppercase;
  font-size: 36px;
  cursor: pointer;
}

.linksHeader{
  display: flex;
  justify-content: flex-start;
}

.socialHeader{
  display: flex;
  justify-content: center;
}

.menu{
  display: flex;
  justify-content: space-around;
  line-height: 100px;
}
.menu a{
  color: #fff;
  text-transform: uppercase;
  text-decoration: none;
  padding: 0 30%;
  transition: 0.4s;
  font-size: 28px;
  font-weight: 600;
}
.menu a i{
    font-size: 28px;
    font-weight: 500;
}
.show-menu-btn,.hide-menu-btn{
  transition: 0.4s;
  font-size: 30px;
  cursor: pointer;
  display: none;
}
.show-menu-btn{
  float: right;
}
.show-menu-btn i{
  line-height: 100px;
}
.menu a:hover,
.show-menu-btn:hover,
.hide-menu-btn:hover{
  color: #3498db;
}

#chk{
  position: absolute;
  visibility: hidden;
  z-index: -1111;
}


/* SUBHEADER */

.subHeader{
  background: #2b2b2b;
  padding-top: 2.5%;
  padding-bottom: 2.5%;
}

.navSubHeader{

  display: flex;
  justify-content: center;
}

.subHeaderCategory,
.subHeaderKind,
.subHeaderAuthor,
.subHeaderSort{
  background-color: #f2f2f2;
  color: #2b2b2b;
  font-size: 1.7rem;
  border-radius: 5%;
  text-align: center;
  padding: 0.5% 2% 0.5% 2%;
  color:#2b2b2b;
  font-weight: 700;
  cursor: pointer;
  margin-right: 3.5%;
}

</style>