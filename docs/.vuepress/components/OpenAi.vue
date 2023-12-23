<template>
    <pre>{{ txtSrc }}</pre>
</template>

<script>
export default {
  name: 'Chat',
  data() {
    return {
      text: 'Chat',
      embedding: null,
      txtSrc: '',
    };
  },
  async mounted() {
    await this.$nextTick();
    this.getEmbedding('test');
  },
  computed : {
    imageSrc() {
      // manipulate the imageUrl as needed
      return this.txtSrc
    }
  },
  methods: {
    async getEmbedding() {
        // e.preventDefault()
            const requestOptions = {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${openapikey}`,
                },
                body: JSON.stringify({ 
                    "model": "gpt-3.5-turbo", "messages": [
                        {
                            "role": "system",
                            "content": "Can you see me a top 10 of eletronic music for 2023"
                        },
                        {
                            "role": "user",
                            "content": "Hello!"
                        }
                        ] 
                })
            };
            
            const response = await fetch(`https://api.openai.com/v1/chat/completions`, requestOptions)
            .then( function( response ){
                if( !response.ok ){
                    this.fetchError = response.status;
                }else{
                    response.json().then( function( data ){
                        this.txtSrc = data.choices[0].message.content;
                        setTimeout(() => {
                            this.isLoading = false
                        }, 1000)
                    }.bind(this));
                }
            }.bind(this));
    }
  }

};
</script>