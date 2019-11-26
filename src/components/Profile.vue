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
   <div class="clear"></div>  
     <div class="profile" id="ajax-content">
          <div class="text-intro" id="site-type">
             <div class="topProfileBar">
                  <div class="profilePhoto"></div>
                  <h2>Mionder</h2>
              </div>
              
              <div class="fullContentProfile">
                  <div class="leftContentProfile">
                      <p>Моя сторінка</p>
                      <p>Моя творчість</p>
                      <p>Вихід</p>
                  </div>
                  
                  <div class="rightContentProfile">
                      <div class="emailContentProfile">
                          <p class="stand">Моя поштова скринька: <span>example@gmail.com</span></p>
                      </div>
                      
                      <div class="telephoneContentProfile">
                          <p class="stand">Мій номер телефону: <span>+38 066 66 66 666</span></p>
                      </div>
                      
                      <div class="birthdayContentProfile">
                          <p class="stand">День народження: <span>01.01.2000</span></p>
                      </div>
                  </div>
              </div>
          </div>
    </div>
   
  <div class="footer">
      <div class="container">
          <div class="bookFooter"></div>
          <p>fulcrum</p>
      </div>
  </div>
   </div>
</template>