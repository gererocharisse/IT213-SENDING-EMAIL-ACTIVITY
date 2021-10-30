const sendBtn = document.getElementById('sendBtn');






eventListeners();

function eventListeners() {
    document.addEventListeners('DOMContentLoaded', appInit);
}






function appInit() {
    sendBtn.disabled = true;
}
