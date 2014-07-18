document.getElementById('edituser').onclick = function() {

    var className = ' ' + myButton.className + ' ';

    if ( ~className.indexOf(' active ') ) {
        this.className = className.replace(' active ', ' ');
    } else {
        this.className += ' active';
    }              
}