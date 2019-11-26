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
/* HEADER */

.container{
    max-width: 1150px;
    width: 100%;
    margin: 0 auto;
}


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

/* CONTENT */

.content{
    position: relative;
    padding-bottom: 3%;
    background: #2b2b2b;
}

.mainContentP{
    padding-top: 5%;
    font-size: 43px;
    font-weight: 900;
    color: #fff;
    text-transform: uppercase;
    line-height: 70px;
    width: 40%;
    padding-left: 2.5%;
}

.infoProjContent{
  font-size:13px;
  color:#797979;
  margin-top:20px;
  font-weight:400;
  line-height:22px;
  letter-spacing:1px;
  width:100%;
  padding-left: 2.5%;
}

/*
.mainContentP{
  font-size:43px;
  text-transform:uppercase;
  color:#000000;
  font-weight:900;
  line-height:70px;
}
*/

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


/* 
************************
GRID CONTENT 
************************
*/

.portfolio-grid{
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: space-around; 
  overflow:hidden;
}

li.grid-item{
  width: 33%;
  position:relative;
  float:left;
  padding:15px;
  
}

.grid-hover{
  position: absolute;
  width:360px;
  height: 100%;
  top:0;
  background: white;
  z-index: 2;
  opacity: 0;
  -webkit-transition: all 0.2s ease-in;
	-moz-transition: all 0.2s ease-in;
	-ms-transition: all 0.2s ease-in;
	-o-transition: all 0.2s ease-in;
	transition: all 0.2s ease-in; 
}

.grid-hover:hover{
  opacity: 0.9;
}

.grid-hover h1{
  font-size:23px;
  bottom:80px;
  left:40px;
  position:absolute;
  text-transform:uppercase;
  color:#000000;
  letter-spacing:1px;
  font-weight:900;
  line-height:50px;
}

.grid-hover p{
  font-size:13px;
  bottom:40px;
  left:40px;
  position:absolute;
  color:#686868;
  letter-spacing:1px;
  font-weight:400;
  line-height:50px;
}

li.grid-item img{
  width:360px;
}

/* 
***********************
FOOTER
***********************
*/

.footer{
    background-color: #1b1b1b;
    min-height: 80px;
    padding-top: 2%;
    padding-bottom: 1.5%;
}

.bookFooter{
  background: url(/src/img/book.png) center no-repeat;
  -webkit-background-size: cover;
  background-size: cover;
  min-height: 111px;
  width: 191px;
  margin: 0 auto;

}

.footer p{
    padding-top: 0.5%;
    text-align: center;
    font-size: 2.2rem;
    font-weight: 700;
    color: #f2f2f2;
}
/* 
*******************
LOGIN MENU
*******************
*/
.login{
     background: url(/src/img/bg2.jpeg)center no-repeat;
    -webkit-background-size: cover;
    background-size: cover;
}

.signUpLog{
    text-align: center;
    font-size: 2.35rem;
    color: #fff;
    font-weight: 600;
    padding-bottom: 15%;
}

.signUpLog span{
    color: brown;
}


.login-box,
.reg-box{
  width: 280px;
    margin: 0 auto;
  color: white;
}
.login-box h1,
.reg-box h1{
  text-align: center;
  font-size: 30px;
  border-bottom: 6px solid #f5f5f5;
  margin-bottom: 50px;
  padding: 13px 0;
    padding-top: 20%;
    font-weight: 600;
    text-transform: uppercase;
}
.textbox{
  width: 100%;
  overflow: hidden;
  font-size: 20px;
  padding: 8px 0;
  display: flex;
    justify-content: center;
  border-bottom: 1px solid #f5f5f5;
}
.textbox i{
    min-width: 37px;
    padding-top: 0%;
    display: flex;
    justify-content: flex-start;
    text-align: center;
}
.fas.fa-lock{
    font-size: 28px;
}
.textbox input{
  border: none;
  outline: none;
  background: none;
  color: white;
  font-size: 18px;
  width: 80%;
  margin: 0 10px;
}

.btn{
  width: 100%;
  background: none;
  border: 2px solid #f5f5f5;
  color: white;
  font-size: 18px;
  cursor: pointer;
  margin-bottom: 5%;
  padding: 10px;
}

.content .text-intro p, .login .text-intro p {
    font-size: 13px;
    color: #797979;
    margin-top: 20px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 1px;
    width: 100%;
}
/*
******************************
PROFILE
******************************
*/

.topProfileBar{
    background: url(/src/img/profile.jpeg)center no-repeat;
    -webkit-background-size: cover;
    background-size: cover;
    display: flex;
    padding-top: 1.5%;
    padding-bottom: 1.5%;
}

.topProfileBar h2{
    color: #fff;
    font-size: 3rem;
    display: flex;
    font-weight: 700;
    align-items: center;
/*    padding-left: 2.5%;*/
    margin-left: 1.5%;
    text-shadow: 6px 6px 0px rgba(10,10,10,0.8);
    opacity: 0.85;
    padding: 0.5%;
    max-height: 40px;
/*    -webkit-text-stroke: 1px black;*/
}

.tinyProfilePhoto{
    width: 30px;
    height: 30px;
    border-radius: 15px;
    background: url(/src/img/face.png)center no-repeat;
    -webkit-background-size: cover;
    background-size: cover;
    display: flex;
    align-items: center;
    margin-top: 75%;
}

.tinyTopProfile{
    display: flex;
    justify-content: center;
}

#profileTopLi{
    padding-left: 5px;
}

.profilePhoto{
    width: 200px;
    height: 200px;
    border-radius: 100px;
    background: url(/src/img/face.png) center no-repeat;
    -webkit-background-size: cover;
    background-size: cover;
    margin-left: 5%;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
}

.fullContentProfile{
    width: 100%;
    display: flex;
    flex-direction: row;
    background-color: #f5f5f5;
    border: 1px solid #dfe6e9;
}

.leftContentProfile{
    width: 30%;
    border-right: 1px solid #dfe6e9;
    padding-top: 2.5%;
    padding-left: 5%;
    padding-bottom: 1%;
}

.leftContentProfile p{
    padding-bottom: 2.5%;
    font-size: 1.2rem;
    line-height: 2rem;
    font-weight: 600;
    cursor: pointer;
    color: #636e72;
    text-transform: uppercase;
}

.rightContentProfile{
    width: 70%;
    padding-top: 3%;
    padding-left: 5%;
}

.emailContentProfile,
.telephoneContentProfile,
.birthdayContentProfile{
    display: flex;
    padding-bottom: 2%;
}

.stand{
    font-size: 1rem;
     color: rgba(10,10,10,0.8);
}
.emailContentProfile span,
.telephoneContentProfile span,
.birthdayContentProfile span{
    transform: translateY(2px);
    font-family: 'Arial', sans-serif;
    color: #6c8484;
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
