<template>
    <div>
        <div class="footer">
            <div class="container contain__footer">
                <div class="footer__wrapper">
                    <p>Fulcrum 2020. All rights reserved.</p>
                    <div class="social__block">
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-telegram"></i></a>
                    </div>
                </div>
                <!-- <div class="bookFooter"></div> -->
                
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
.contain__footer{
    max-width: 1000px;
}
.footer{
    /* background-color: #1b1b1b;
    min-height: 80px;
    padding-top: 2%;
    padding-bottom: 1.5%;
    flex: 0 0 auto; */
    background-color: #2b2b2b; 
    color: #fff;
    height: 50px;
    font-size: 14px;
    font-weight: 300;
    display: flex;
    align-items: center;
    padding: 0px 30px;
}
.social__block i{
    color: #fff;
    font-size: 18px;
    padding-right: 10px;
}
.footer__wrapper{
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.footer p{
    /* padding-top: 0.5%;
    text-align: center;
    font-size: 2.2rem;
    font-weight: 700;
    color: #f2f2f2; */
}
</style>