<template>
    <page>
       
<GridLayout rows="*,60">
    <ScrollView row="0">
        <WrapLayout orientation="horizontal">
            <GridLayout width="50%" height="150">
                <!-- <Label class="fa" :text="'youtube'" fontFamily="Font Awesome 5 Brands, fa-brands-400" style="color: red; font-size: 50px"></Label> -->
                <Label
                    row="1"
                    horizontalAlignment="center"
                    verticalAlignment="bottom"
                    backgroundColor="rgb(81,197,247, 0.8)"
                    width="100%"
                    padding="10"
                    fontSize="13"
                    color="white"
                ></Label>
                <Label class="fas,fa">{{'\uf133' | fonticon}} Search</Label>
                <!-- <Label class="fa" text="\uf293"></Label> -->
                
            </GridLayout>
        </WrapLayout>
    </ScrollView>
    <StackLayout class="fa" row="1" orientation="horizontal">
        <Button class="fa" textWrap="true" width="25%" textAlignment="text">
            <FormattedString class="fa">
                <Span text="&#xf015;" fontFamily="FontAwesome"></Span>
                <Span text="Home"></Span>
            </FormattedString>
            <!-- <FormattedString >
                <Span :text="tab.icon | fonticon" class="fa" fontSize="24" />
            </FormattedString> -->
        </Button>
        <Button textWrap="true" width="25%" textAlignment="text">
            <FormattedString>
                <Span class="fas" :text="'fa-calendar' | fonticon" fontSize="24"></Span>
                <!-- <Label class="fa" :text="'fa-user' | fonticon" color="black" /> -->
                <Span text="All Cocktails"></Span>
            </FormattedString>
        </Button>
        <Button textWrap="true" width="25%" textAlignment="text">
            <FormattedString>
                <Span :text="'\uf167'" fontFamily="Font Awesome 5 Brands, fa-brands-400"></Span>
                <Span text="Favorite"></Span>
            </FormattedString>
        </Button>
        <Button textWrap="true" width="25%" textAlignment="text">
            <FormattedString>
                <Span :text="'\uf167'" fontFamily="fa-solid-900"></Span>
                <Span text="Profile"></Span>
            </FormattedString>
        </Button>
    </StackLayout>
</GridLayout>
    </page>
</template>

<script>
import master_navbar from "../MasterNavbar"
export default {
    name: "Home",
    components: {
        master_navbar,
    }
}
</script>

<style scoped>

</style>
