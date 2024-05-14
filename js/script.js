let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');

}
window.onscroll = () => {
    login.classList.remove('active');

}
document.addEventListener('DOMContentLoaded', function() {
    const membersList = document.getElementById('students-list');

    function Reorder_randomly() {
        for (let i = membersList.children.length; i >= 0; i--) {
            membersList.appendChild(membersList.children[Math.random() * i | 0]);
        }
    }

    Reorder_randomly();

});