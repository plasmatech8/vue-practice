new Vue({
    // el tells vue which HTML elements to control.
    el: '#app',

    // data that is used by vue. We have deccided to transfer hard-coded values
    // into dynamic vue data.
    // -> To insert these values into our HTML, we use {{ data }} syntax
    data: {
        event: {
            eventDate: 'August 14th - 16th',
            eventTitle: 'Summer Festival!',
            eventDesc: "It's back! This years summer festival will be in the " +
                       "beautiful countryside featuring our best line up ever!"
        }
    }
});
