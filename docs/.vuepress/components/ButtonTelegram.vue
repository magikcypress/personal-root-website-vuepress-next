<template>
    <div class="telegram-form" v-if="dead">
        <form @submit="submit">
            <input type="submit" class="action-button" value="Send me Love ❤️" name="Send message" :disabled="isLoading">
        </form>
    </div>
    <div class="telegram-response" v-if="ok">
        {{ messageSend }}
    </div>
</template>

<script>

  export default {
    name: "Telegram Button",
    data() {
        return {
            dead: true,
            ok: false,
            message: "I love you bro! ❤️",
            messageSend: '',
            apiUrl: 'http://api.textcaptcha.com/mirror.json',
            isLoading: null,
            botkey: botkey,
            chatid: chatid,
        }
    },
    methods: {
        async submit(e) {
            e.preventDefault()
            const requestOptions = {
                method: "POST"
            };
            console.log(this.botkey)
            const response = await fetch(`https://api.telegram.org/bot${this.botkey}/sendMessage?chat_id=${this.chatid}&text=${this.message}`, requestOptions)
            .then( function( response ){
                if( !response.ok ){
                    this.fetchError = response.status;
                    console.log(this.fetchError)
                    this.messageSend = "Error Bro! ☠️";
                    this.dead = false;
                    this.ok = true;
                }else{
                    response.json().then( function( data ){
                        this.fetchResponse = data;
                        console.log(this.fetchResponse)
                        this.messageSend = "Many Thanks Bro! 😘";
                        this.dead = false;
                        this.ok = true;
                        setTimeout(() => {
                            this.isLoading = false
                        }, 1000)
                    }.bind(this));
                }
            }.bind(this));
        }
    },
}
</script>