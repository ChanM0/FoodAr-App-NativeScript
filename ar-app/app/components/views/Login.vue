<template>
    <Page enableSwipeBackNavigation="false" actionBarHidden="true">
		<FlexboxLayout class="page">
			<StackLayout class="form">
				<Label class="header" text="ARFood" />

				<StackLayout class="input-field" marginBottom="25">
					<TextField class="input" hint="Email" keyboardType="email" autocorrect="false" autocapitalizationType="none" v-model="user.email"
					 returnKeyType="next" fontSize="18" />
					<StackLayout class="hr-light" />
				</StackLayout>

				<StackLayout class="input-field" marginBottom="25">
					<TextField ref="password" class="input" hint="Password" secure="true" v-model="user.password" :returnKeyType="'done'"
					fontSize="18" />
					<StackLayout class="hr-light" />
				</StackLayout>

                 <Button :text="'Log In'" @tap="submit" class="btn btn-primary m-t-20" />
			</StackLayout>

			<Label class="login-label sign-up-label" @tap="toggleRegistration">
	          <FormattedString>
	            <Span :text="'Don’t have an account? '" />
	            <Span :text="'Sign up'" class="bold" />
	          </FormattedString>
	        </Label>
		</FlexboxLayout>
	</Page>
</template>
<script>
import register from "./Register"
import master from "../../Master"
export default {
    components: {
        register,
        master
    },
    data() {
        return {
            isLoggingIn: true,
            user: {
                email: "",
                password: "",
            }
        };
    },
    methods: {
        toggleRegistration() {
            this.$navigateTo(register);
        },

        submit() {
            if (!this.user.email || !this.user.password) {
                this.alert(
                    "Please provide both an email address and password."
                );
                return;
            }
            this.login();
        },

		login() {
			
            this.$navigateTo(master);
        },

        alert(message) {
            return alert({
                title: "ARFood",
                okButtonText: "OK",
                message: message
            });
        }
    }
}
</script>


