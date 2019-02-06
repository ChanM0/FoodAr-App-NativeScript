<template>
	<Page actionBarHidden="true" backgroundSpanUnderStatusBar="true">
		<GridLayout rows="auto,auto,*,auto" columns="auto">
			<GridLayout 
					row="0" 
					ref="navStatusBar" 
					class="navStatusBar" 
					verticalAlignment="top" 
					height="40"
			 		width="100%" 
					rows="auto" 
					columns="*,auto,auto,auto">
				<Label col="0" row="0" text="ARFood" horizontalAlignment="center" class="status-title"></Label>
			</GridLayout>
			<GridLayout row="1">
				<search v-if="selectedTab === 'Search'"></search>
				<bookmarks v-if="selectedTab === 'Bookmarks'"></bookmarks>
				<scan v-if="selectedTab === 'Scan'"></scan>
				<profile v-if="selectedTab === 'Profile'"></profile>
				<settings v-if="selectedTab === 'Settings'"></settings>
			</GridLayout>
			<navBottom row="3" />
		</GridLayout>
	</Page>
</template>
<script src="http://172.28.30.210:8098"></script>
<script>

import navBottom from "./components/MasterNavbar";
import search from './components/views/Search';
import scan from './components/views/Scan';
import settings from './components/views/Settings';
import profile from './components/views/Profile';
import bookmarks from './components/views/BookMarks';

import { mapGetters } from 'vuex';
export default {
	computed: {
		...mapGetters(['selectedTab'])
	},

	components: {
		navBottom,
		scan,
		settings,
		search,
		profile,
		bookmarks
	},
};
</script>

<style>

.navStatusBar{
	background-color: orange;
}

.status-title {
	color: white;
	font-size: 18;
	margin-left: 15;
	margin-top: 8;
	horizontal-align: left;
	vertical-align: center;
}
</style>