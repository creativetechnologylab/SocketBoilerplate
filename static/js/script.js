const socket = io();


/** EXAMPLE CODE */
const button = document.getElementById('sender');
const input = document.getElementById('message');
const messages = document.getElementById('messages');

button.addEventListener('click', () => {
    socket.emit('test message', input.value);
    input.value = '';
});
socket.on('test message', function(msg) {
    messages.value += msg + "\n";
});