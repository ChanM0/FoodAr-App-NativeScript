<template>
    <Page enableSwipeBackNavigation="true" actionBarHidden="true">
		<FlexboxLayout class="page">
			<StackLayout class="form">
				<Label class="header" text="ARFood" />

				<StackLayout class="input-field" marginBottom="20">
					<TextField class="input" hint="Email" keyboardType="email" autocorrect="false" autocapitalizationType="none" v-model="user.email"
					 returnKeyType="next" fontSize="18" />
					<StackLayout class="hr-light" />
				</StackLayout>

				<StackLayout class="input-field" marginBottom="20">
					<TextField ref="password" class="input" hint="Password" secure="true" v-model="user.password" :returnKeyType="'next'"
					fontSize="18" />
					<StackLayout class="hr-light" />
				</StackLayout>

				<StackLayout class="input-field">
					<TextField ref="confirmPassword" class="input" hint="Confirm password" secure="true" v-model="user.confirmPassword" returnKeyType="done"
					 fontSize="18" />
					<StackLayout class="hr-light" />
				</StackLayout>

                 <Button :text="'Sign Up'" @tap="submit" class="btn btn-primary m-t-20" />
			</StackLayout>

			<Label class="login-label sign-up-label" @tap="$navigateBack" >
	          <FormattedString>
	            <Span :text="'Back to Login'" />
	          </FormattedString>
	        </Label>
		</FlexboxLayout>
	</Page>
    
</template>
<script>
import login from "./Login"
export default {
    components: {
        login
    },
    data() {
        return {
            isLoggingIn: true,
            user: {
                email: "",
                password: "",
                confirmPassword: ""
            }
        };
    },
    methods: {
        toggleLogin() {
            this.$navigateTo(login);
        },

        submit() {
            if (!this.user.email || !this.user.password) {
                this.alert(
                    "Please provide both an email address and password."
                );
                return;
            }
            if (this.isLoggingIn) {
                this.login();
            } else {
                this.register();
            }
        },

        login() {
            userService
                .login(this.user)
                .then(() => {
                    this.$navigateTo(Home);
                })
                .catch(() => {
                    this.alert("Unfortunately we could not find your account.");
                });
        },

        register() {
            if (this.user.password != this.user.confirmPassword) {
                this.alert("Your passwords do not match.");
                return;
            }
        },

        // focusPassword() {
        //     this.$refs.password.nativeView.focus();
        // },

        focusConfirmPassword() {
            if (!this.isLoggingIn) {
                this.$refs.confirmPassword.nativeView.focus();
            }
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



