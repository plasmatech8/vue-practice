new Vue({
    el: '#app',

    data: {
        event: {
            eventDate: 'August 14th - 16th',
            eventTitle: 'Summer Festival!',
            eventDesc: "It's back! This years summer festival will be in " +
                       "the beautiful countryside featuring our best line " +
                       "up ever!",
            signUpText: "Add your name to the guest list for " +
                        "<em>exclusive</em> offers:",
            eventCapacity: 25,
        },
        newNameText: 'default_value',
        guestName: [],
        formSubmitClass: '',
        appStyles: {
            marginTop: '25px'
        }
    },

    methods: {
        formSubmitted: function(){
            if(this.newNameText.length > 0 && this.guestName.length < this.event.eventCapacity){
                console.log(this.newNameText)
                this.guestName.push(this.newNameText)
                this.newNameText = '',
                this.formSubmitClass = 'submitted'
            }
        },
        keyPressed: function(){
            console.log("keyPressed method triggered (32: space)")
        }
    },

    computed: {
        sortNames: function(){
            return this.guestName.sort()  // Will cause guestName watch to trigger
        }
    },

    watch: {
        guestName: function(data){
            console.log('guestName watch triggered')
        }
    },

    filters: {
        formatName: function(value){
            return value.slice(0, 1).toUpperCase() + value.slice(1).toLowerCase()
        }
    }
});

new Vue({
    el: '#navigation',
    data: {
        appName: 'Guest List'
    }

})