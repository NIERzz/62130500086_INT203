const app = {
    data() {
        return {
            firstname: 'Wuttichai',
            lastname:'Arayasook',
            career:'IT Student',
            image:'/62130500086_Groupwork_2/images/2.jpg',
            article : '77',
            follower :'100K',
            rating :'10'
        }
    },
    created(){

        console.log('message is: '+this.msg)

    },
 updated(){
    console.log('message is changed to: '+this.msg)
    
}
 
}
mountedApp = Vue.createApp(app).mount('#app')