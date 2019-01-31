<template>
<GridLayout class="navBottom" rows="*,50">
    <StackLayout row="1" orientation="horizontal">
        <GridLayout :class="selectedTab==0?'active':''" @tap="home" rows="*,auto"
            cols="auto" class="nav" col="0" row="0" width="25%">
            <Image :class="selectedTab==0?'active':''" row="0" class="navIcon"
                :src="selectedTab==0?'~/assets/images/navhomem.png':'~/assets/images/navhome.png'" />
            <Label row="1"  text="Home" class="navText"></Label>
        </GridLayout>
        <GridLayout :class="selectedTab==1?'active':''" @tap="cart" rows="*,auto"
            cols="auto" class="nav" col="1" row="0" width="25%">
            <Image :class="selectedTab==1?'active':''" row="0" class="navIcon"
                :src="selectedTab==1?'~/assets/images/navcartm.png':'~/assets/images/navcart.png'" />
            <Label row="1"  text="Cart" class="navText"></Label>
        </GridLayout>
        <GridLayout :class="selectedTab==2?'active':''" @tap="history" rows="*,auto"
            cols="auto" class="nav" col="2" row="0" width="25%">
            <Image :class="selectedTab==2?'active':''" row="0" class="navIcon"
                :src="selectedTab==2?'~/assets/images/navordersm.png':'~/assets/images/navorders.png'" />
            <Label row="1"  text="History" class="navText"></Label>
        </GridLayout>

        <GridLayout :class="selectedTab==3?'active':''" @tap="about" rows="*,auto"
            cols="auto" class="nav" col="3" row="0" width="25%">

            <Image :class="selectedTab==3?'active':''" row="0" class="navIcon"
                :src="selectedTab==3?'~/assets/images/navusm.png':'~/assets/images/navus.png'" />
            <Label row="1"  text="About" class="navText"></Label>
        </GridLayout>
    </StackLayout>
</GridLayout>
</template>

<script>
import cart from "./views/Cart";
export default {
     name: 'masterNavbar',
    components: {
        cart
    },
   
    data() {
            return {
                selectedTab: 0
            };
        },
        methods: {
            home() {
                this.selectedTab = 0;
            },
            cart() {
                this.selectedTab = 1;
                this.$navigateTo(cart);
            },
            history() {
                this.selectedTab = 2;
            },
            about() {
                this.selectedTab = 3;
            }
        }
}
</script>

<style scoped>
.navBottom {
        background-color: #f4f4f4;
        border-color: red;
    }

    .nav {
        height: 100%;
        width: 100%;
    }

    .nav.active {
        background-color: #0Dc43776;
    }

    .navIcon {
        horizontal-align: center;
        vertical-align: center;
        height: 25
    }

    .navIcon.active {
        vertical-align: bottom;
    }

    .navText {
        margin-bottom: 2;
        font-size: 12;
        /* color: #c43776; */
        color: #d62526;
        horizontal-align: center;
    }
</style>
