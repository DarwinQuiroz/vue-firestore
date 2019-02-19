<template>
    <v-snackbar :timeout="timeOut" :color="color" v-model="showSnack">
        {{ text }}
        <v-btn dark flat @clik="showSnack = false">
            {{ $t('messages.close') }}
        </v-btn>
    </v-snackbar>
</template>

<script>
    export default {
        name: "app-snack-bar",
        props: ['snackBar', 'timeOut', 'text'],
        data() {
            return {
                color: 'primary',
                mode: 'horizontal',
                showSnack: this.snackBar
            }
        }
    }
</script>