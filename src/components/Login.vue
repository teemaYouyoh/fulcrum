<template>
    <div>
        <div class="header">
       <div class="container">
            <h2 class="logo">FULCRUM</h2>
            <input type="checkbox" id="chk">
            <label for="chk" class="show-menu-btn">
              <i class="fas fa-align-justify"></i>
            </label>
            <ul class="menu">
              <div class="linksHeader">
                  <a href="#"><i class="fas fa-search"></i></a>
                  <a href="#"><i class="fas fa-user"></i></a>
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
<div class="clear"></div>



<div class="login" id="ajax-content">

      <div class="text-intro" id="site-type">

        <div class="login-box">
              <h1>Login</h1>
              <div class="textbox">
                <i class="fas fa-user"></i>
                <input type="text" placeholder="Username">
              </div>

              <div class="textbox">
                <i class="fas fa-lock"></i>
                <input type="password" placeholder="Password">
                <i class="fas fa-eye"></i>
              </div>

              <input type="button" class="btn" value="Sign in">
              <p class="signUpLog">Don't have account? <span> Sign up </span></p>
        </div>
        
        
        <div class="reg-box">
              <h1>Sign Up</h1>
              <div class="textbox">
                <i class="fas fa-user"></i>
                <input type="text" placeholder="Username">
              </div>
              
              <div class="textbox">
                 <i class="fas fa-envelope"></i>
                  <input type="text" placeholder="E-mail">
              </div>
                  
              <div class="textbox">
                <i class="fas fa-lock"></i>
                <input type="password" placeholder="Password">
                <i class="fas fa-eye"></i>
              </div>

              <input type="button" class="btn" value="Sign up">
              <p class="signUpLog">Already have account? <span> Sign in </span></p>
        </div>
    </div>
<!--Portfolio grid-->

</div>




    <div class="footer">
       <div class="container">
           <div class="bookFooter"></div>
           <p>fulcrum</p>
       </div>
    </div>
    
    </div>
</template>

<script>
export default {
    
}
</script>

<style>

</style>