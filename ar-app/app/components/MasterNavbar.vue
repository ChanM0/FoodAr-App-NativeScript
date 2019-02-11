<template>

    <GridLayout class="navBottom" height="60" width="100%" row="5" rows="auto"
        columns="auto,auto,auto,auto,auto">
        <GridLayout :class="selectedTab === 'Scan' ? 'active' : ''" @tap="routeToTab('Scan')" rows="*,auto" cols="auto" class="nav" col="0" row="0" width="20%">
             <Label :class="selectedTab === 'Scan' ? 'active' : ''" class="fas" row="0" :text="'fa-qrcode' | fonticon" fontSize="24" ></Label>
            <Label row="1" v-show="selectedTab === 'Scan'" text="Scan" class="navText"></Label>
        </GridLayout>
        <GridLayout :class="selectedTab === 'Profile' ? 'active' : ''" @tap="routeToTab('Profile')" rows="*,auto" cols="auto" class="nav" col="1" row="0" width="20%">
            <Label class="fas" row="0" :class="selectedTab === 'Profile' ? 'active' : ''" :text="'fa-user' | fonticon" fontSize="24" ></Label>
            <Label row="1" v-show="selectedTab === 'Profile'" text="Profile" class="navText"></Label>
        </GridLayout>
        <GridLayout :class="selectedTab == 'Search' ? 'active' : ''" @tap="routeToTab('Search')" rows="*,auto" cols="auto" class="nav" col="2" row="0" width="20%">
            <Label class="fas" :class="selectedTab === 'Search' ? 'active' : ''" row="0" :text="'fa-search' | fonticon" fontSize="24" ></Label>
            <Label row="1" v-show="selectedTab == 'Search'" text="Search" class="navText"></Label>
        </GridLayout>
        <GridLayout :class="selectedTab == 'Bookmarks' ? 'active' : ''" @tap="routeToTab('Bookmarks')" rows="*,auto" cols="auto" class="nav" col="3" row="0" width="20%">
            <Label class="fas" row="0" :class="selectedTab === 'Bookmarks' ? 'active' : ''" :text="'fa-bookmark' | fonticon" fontSize="24" ></Label>
            <Label row="1" v-show="selectedTab == 'Bookmarks'" text="Bookmarks" class="navText"></Label>
        </GridLayout>
        <GridLayout :class="selectedTab == 'Settings' ? 'active' : ''" @tap="routeToTab('Settings')" rows="*,auto" cols="auto" class="nav" col="4" row="0" width="20%">
            <Label class="fas" :class="selectedTab === 'Settings' ? 'active' : ''" row="0" :text="'fa-cog' | fonticon" fontSize="24" ></Label>
            <Label row="1" v-show="selectedTab == 'Settings'" text="Settings" class="navText"></Label>
        </GridLayout>
    </GridLayout>

</template>
<script>
    import { mapGetters, mapActions } from 'Vuex';
    export default {
        methods: {
            ...mapActions([
                'routeToTab'
            ]),
        },
        computed: {
            ...mapGetters([
                'selectedTab'
            ])
        }
    };
</script>

<style>
    .nav {
        height: 100%;
        width: 100%;
    }

    .nav.active {
        background-color: #dddddd;
    }

    .navIcon {
        horizontal-align: center;
        vertical-align: center;
        height: 20
    }

    .navIcon.active {
        vertical-align: bottom;
    }

    .navText {
        margin-bottom: 2;
        font-size: 12;
        /* color: #c43776; */
        color: #282828;
        horizontal-align: center;
    }
</style>