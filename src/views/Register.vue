<template>
    <div>
        <auth-form action="register" v-on:process="register($event)"/>
        <app-snack-bar v-if="snackBar" :snackBar="snackBar" :text="message" :timeOut="timeOut"/>
    </div>
</template>

<script>
    import AppSnackBar from "../components/SnackBar";
    import AuthForm from "../components/Auth";
    import {db} from '../main';

    export default {
        name: "Register",
        components: {AuthForm, AppSnackBar},
        data() {
            return {
                snackBar: false,
                message: '',
                timeOut: 5000
            }
        },
        methods: {
            register(user) {
                this.$store.dispatch('firebaseRegister', user).then((userRegistered) => {
                    const data = {
                        uid: userRegistered.user.uid,
                        email: user.email,
                        role: 'customer'
                    };


                    db.collection('users').doc(userRegistered.user.uid).set(data).then(() => {
                        this.$store.commit('setRole', data.role);
                        this.$router.push('/');
                    }).catch((error) => {
                        this.message = error.message.substr(0, 60);
                        this.snackBar = true;

                        setTimeout(() => {
                            this.snackBar = false;
                        }, this.timeOut);
                    });
                });
            }
        }
    }
</script>