<template>
    <div>
        <div class="footer">
            <div class="container">
                <div class="bookFooter"></div>
                <p>fulcrum</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
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
    flex: 0 0 auto;
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
</style>