

/* ---------------------------------- Footer link modal to external page */

document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById("footer-link-modal");
    var btn = document.getElementById("external-link");
    var span = document.getElementsByClassName("close")[0];
    var acceptBtn = document.getElementById("accept");
    var declineBtn = document.getElementById("decline");

    var externalURL = "https://portal.aestheticnursesoftware.com/book-online/8300";

    // When the user clicks the link, open the modal
    btn.onclick = function(event) {
        event.preventDefault();
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks the "Accept" button, redirect to the external site
    acceptBtn.onclick = function() {
        window.open(externalURL, '_blank');
        modal.style.display = "none";
    }

    // When the user clicks the "Decline" button, close the modal
    declineBtn.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});