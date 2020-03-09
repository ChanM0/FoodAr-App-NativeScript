<template>
    <Page class="page">
        <ActionBar title="Settings" class="action-bar" />

        <StackLayout class="settings">

            <ListView class="list-group" for="setting in settings" @itemTap="onItemTap "
                style="height:1250px">
                <v-template>
                    <FlexboxLayout flexDirection="row" class="list-group-item">
                        <Label :text="setting.name" class="list-group-item-heading"
                            style="width: 60%" />
                    </FlexboxLayout>
                </v-template>
            </ListView>
        </StackLayout>

    </Page>
</template>

<script>
    export default {
        methods: {

            onItemTap: function(args) {
                alert("Your message").then(() => {
                    console.log("Alert dialog closed.");
                });

                // console.log("Item with index: " + args.index + " tapped");
            }
        },

        data() {
            return {
                settings: [{
                        name: "Setting1"
                    },
                    {
                        name: "Setting2"
                    },
                    {
                        name: "Setting3"
                    },
                    {
                        name: "Setting4"
                    }
                ]
            };
        }
    };
</script>

<style scoped>
    .settings {
        vertical-align: center;
        font-size: 20;
        margin: 15;
    }

    .description-label {
        margin-bottom: 15;
    }
</style>