<template>

    <GridLayout class="navBottom" height="50" width="100%" row="3" rows="auto"
        columns="auto,auto,auto,auto, auto">
        <GridLayout :class="selectedTab === 'scan' ? 'active' : ''" @tap="routeToTab('Scan')" rows="*,auto"
            cols="auto" class="nav" col="0" row="0" width="20%">
            <Image :class="selectedTab === 'scan' ? 'active' : ''" row="0" class="navIcon" :src="'~/assets/images/thermometer.png'" />
            <Label row="1" v-show="selectedTab === 'scan'" text="scan" class="navText"></Label>
        </GridLayout>
        <GridLayout :class="selectedTab === 'profile' ? 'active' : ''" @tap="routeToTab('Profile')" rows="*,auto" cols="auto" class="nav" col="1" row="0" width="20%">
            <Image :class="selectedTab === 'profile' ? 'active' : ''" row="0" class="navIcon" :src="'~/assets/images/calendar.png'" />
            <Label row="1" v-show="selectedTab === 'profile'" text="profile" class="navText"></Label>
        </GridLayout>
        <GridLayout :class="selectedTab == 'search' ? 'active' : ''" @tap="routeToTab('Search')" rows="*,auto" cols="auto" class="nav" col="2" row="0" width="20%">
            <Image :class="selectedTab == 'search' ? 'active' : ''" row="0" class="navIcon" :src="'~/assets/images/home.png'" />
            <Label row="1" v-show="selectedTab == 'search'" text="search" class="navText"></Label>
        </GridLayout>
        <GridLayout :class="selectedTab == 'bookmarks' ? 'active' : ''" @tap="routeToTab('Bookmarks')" rows="*,auto" cols="auto" class="nav" col="3" row="0" width="20%">
            <Image :class="selectedTab == 'bookmarks' ? 'active' : ''" row="0" class="navIcon" :src="'~/assets/images/bell.png'" />
            <Label row="1" v-show="selectedTab == 'bookmarks'" text="bookmarks" class="navText"></Label>
        </GridLayout>
        <GridLayout :class="selectedTab == 'settings' ? 'active' : ''" @tap="routeToTab('Settings')" rows="*,auto" cols="auto" class="nav" col="4" row="0" width="20%">
            <Image :class="selectedTab == 'settings' ? 'active' : ''" row="0" class="navIcon" :src="'~/assets/images/cog.png'" />
            <Label row="1" v-show="selectedTab == 'settings'" text="settings" class="navText"></Label>
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