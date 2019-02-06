<template>
  <Page enableSwipeBackNavigation="false" actionBarHidden="true">
    <FlexboxLayout class="page">
      <StackLayout class="form">
        <!-- <Image class="logo" src="https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwik9or8h5DgAhWIh1QKHWGbA4gQjRx6BAgBEAU&url=http%3A%2F%2Fpngimg.com%2Fimgs%2Fanimals%2Fdog%2F&psig=AOvVaw3hfdxA_mhIcc6kgI0LYEab&ust=1548750666196544" /> -->
        <Label class="header" text="APP NAME"/>

        <StackLayout class="input-field" marginBottom="25">
          <TextField
            class="input"
            hint="Email"
            keyboardType="email"
            autocorrect="false"
            autocapitalizationType="none"
            v-model="user.email"
            returnKeyType="next"
            @returnPress="focusPassword"
            fontSize="18"
          />
          <StackLayout class="hr-light"/>
        </StackLayout>

        <StackLayout class="input-field" marginBottom="25">
          <TextField
            ref="password"
            class="input"
            hint="Password"
            secure="true"
            v-model="user.password"
            :returnKeyType="'done'"
            @returnPress="focusConfirmPassword"
            fontSize="18"
          />
          <StackLayout class="hr-light"/>
        </StackLayout>

        <Button :text="'Log In'" @tap="submit" class="btn btn-primary m-t-20"/>
        <!-- <Label v-show="isLoggingIn" text="Forgot your password?" class="login-label" @tap="forgotPassword" /> -->
      </StackLayout>

      <Label class="login-label sign-up-label" @tap="toggleRegistration">
        <FormattedString>
          <Span :text="'Don’t have an account? '"/>
          <Span :text="'Sign up'" class="bold"/>
        </FormattedString>
      </Label>
    </FlexboxLayout>
  </Page>
</template>
<script>
import register from "./Register";
// import home from "./Home"
import home from "./../BookmarksPage/BookMarks";
export default {
  name: "Login",
  comoponents: {
    register,
    home
  },
  data() {
    return {
      isLoggingIn: true,
      user: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    toggleRegistration() {
      this.$navigateTo(register);
    },

    submit() {
      if (!this.user.email || !this.user.password) {
        this.alert("Please provide both an email address and password.");
        return;
      }
      this.login();
    },

    login() {
      this.$navigateTo(home);
    },

    focusPassword() {
      this.$refs.password.nativeView.focus();
    },

    alert(message) {
      return alert({
        title: "APP NAME",
        okButtonText: "OK",
        message: message
      });
    }
  }
};
</script>
<style scoped>
.page {
  align-items: center;
  flex-direction: column;
}

.form {
  margin-left: 30;
  margin-right: 30;
  flex-grow: 2;
  vertical-align: middle;
}

.logo {
  margin-bottom: 12;
  height: 90;
  font-weight: bold;
}

.header {
  horizontal-align: center;
  font-size: 25;
  font-weight: 600;
  margin-bottom: 70;
  text-align: center;
  color: #d51a1a;
}

.input-field {
  margin-bottom: 25;
}

.input {
  font-size: 18;
  placeholder-color: #a8a8a8;
}

.input-field .input {
  font-size: 54;
}

.btn-primary {
  height: 50;
  margin: 30 5 15 5;
  background-color: #d51a1a;
  border-radius: 5;
  font-size: 20;
  font-weight: 600;
}

.login-label {
  horizontal-align: center;
  color: #a8a8a8;
  font-size: 16;
}

.sign-up-label {
  margin-bottom: 20;
}

.bold {
  color: #000000;
}
</style>


