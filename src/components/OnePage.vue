<template>
    <div>
        <Header />
        <div class="fullOnePageBlock">
            <div class="container">
                <div class="authorBlock">
                    <h2>Название</h2>
                    <p>Автор</p>
                </div>
                <div class="fullArticleBlock">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus sed viverra tellus in hac habitasse platea dictumst. Nec ullamcorper sit amet risus nullam eget. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend. Aenean pharetra magna ac placerat vestibulum lectus mauris ultrices. Nibh sed pulvinar proin gravida. Gravida rutrum quisque non tellus orci ac. In pellentesque massa placerat duis ultricies lacus sed turpis. Elementum integer enim neque volutpat. Urna molestie at elementum eu facilisis sed odio morbi quis. Id porta nibh venenatis cras. Commodo nulla facilisi nullam vehicula. Interdum consectetur libero id faucibus nisl tincidunt eget nullam non. Vitae nunc sed velit dignissim sodales ut eu sem integer. Pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl. Risus at ultrices mi tempus imperdiet nulla. Urna porttitor rhoncus dolor purus non enim praesent elementum. Suspendisse interdum consectetur libero id faucibus. Feugiat in fermentum posuere urna nec tincidunt praesent.

                        Cursus mattis molestie a iaculis at erat. A pellentesque sit amet porttitor eget dolor morbi. Cursus euismod quis viverra nibh cras pulvinar mattis. Cras adipiscing enim eu turpis egestas. Enim sed faucibus turpis in eu mi. Urna nec tincidunt praesent semper feugiat nibh sed pulvinar. Aliquam sem fringilla ut morbi tincidunt augue interdum. Elementum sagittis vitae et leo. Pulvinar sapien et ligula ullamcorper malesuada. Eget est lorem ipsum dolor. Augue mauris augue neque gravida in fermentum et sollicitudin ac. Neque ornare aenean euismod elementum nisi quis eleifend quam. Elit ut aliquam purus sit amet luctus venenatis lectus magna. Id ornare arcu odio ut sem nulla pharetra diam. Dictum non consectetur a erat nam at lectus urna. Nunc non blandit massa enim nec dui. Consequat semper viverra nam libero justo laoreet sit.

                        Aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Urna porttitor rhoncus dolor purus non enim praesent elementum facilisis. Aliquam ultrices sagittis orci a scelerisque purus semper eget. Mattis enim ut tellus elementum sagittis. Feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi. Nullam ac tortor vitae purus faucibus. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi. Ut faucibus pulvinar elementum integer enim. Duis convallis convallis tellus id interdum velit laoreet id donec. Malesuada proin libero nunc consequat interdum varius sit. In tellus integer feugiat scelerisque varius. Tristique senectus et netus et malesuada fames ac turpis. Turpis massa tincidunt dui ut. Morbi tristique senectus et netus et malesuada.

                        Sed viverra tellus in hac habitasse platea dictumst vestibulum. Lobortis mattis aliquam faucibus purus. Vitae justo eget magna fermentum iaculis eu non diam phasellus. At auctor urna nunc id cursus metus aliquam eleifend mi. Diam quis enim lobortis scelerisque. Massa enim nec dui nunc mattis. Ac orci phasellus egestas tellus rutrum. Mauris cursus mattis molestie a iaculis at. Vestibulum rhoncus est pellentesque elit. Id cursus metus aliquam eleifend mi in nulla. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo.
                    </p>
                </div>

                <div class="functionsOnePage">
                    <div class="downloadBut">
                        Download
                    </div>
                    <div class="readAllMore">Read More</div>
                </div>
            </div>
        </div>
        <Footer />
    </div>    
</template>

<script>
import Header from './Header.vue'
import Footer from './Footer.vue'
export default {
    components: {
        Header,
        Footer
    }
}
</script>

<style>
.fullOnePageBlock{
    background-color: #f2f2f2;
    padding-top: 2%;
    padding-bottom: 2%;
}

.authorBlock{
    text-align: left;
    padding-left: 1.25%;
}

.authorBlock h2{
    font-size: 4.85rem;
    color: #000;
    font-weight: 700;
    padding-bottom: 1.5%;
}

.authorBlock p{
    font-size: 1.2rem;
    color:#707970;
}

.fullArticleBlock{
    text-align: center;
    width: 85%;
    margin: 0 auto;
    padding-top: 5%;
    padding-bottom: 5%;
}

.fullArticleBlock p{
    color: #000;
    font-size: 1.2rem;
    line-height: 2.4rem;  
}

.functionsOnePage{
    display: flex;
    justify-content: space-between;
    padding-bottom: 1%;
}

.downloadBut,
.readAllMore{
    color: #000;
    font-size: 1.5rem;
    font-weight: 500;
    transition: 0.1s;
    cursor: pointer;
}

.downloadBut:hover,
.readAllMore:hover{
    transition: 0.1s;
    /* border-bottom: 1.5px solid #000; */
    font-weight: 600;
}

</style>