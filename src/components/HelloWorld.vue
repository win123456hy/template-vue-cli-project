<template>
    <div class="hello">
        <h3>Hello</h3>
        <h3>Now: {{ now }}</h3>
    </div>
</template>

<script>
    export default {
        name: 'HelloWorld',

        created() {
            this.fetchData();
        },

        data(){
          return{

          }
        },

        computed:{
          now(){
              return this.$moment();
          }
        },

        methods: {
            fetchData() {
                this.$axios.get("https://jsonplaceholder.typicode.com/todos/1")
                    .then(response => {
                    }).catch(error => {
                })
            }
        }
    }
</script>

