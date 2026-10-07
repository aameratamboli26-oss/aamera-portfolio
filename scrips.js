function showProject(projectName) {
    alert(
        "You selected: " + projectName +
        "\n\nProject details can be added here."
    );
}


document.getElementById("contactForm").addEventListener(
    "submit",
    function(event) {

        event.preventDefault();

        let name = document.getElementById("name").value;

        document.getElementById("result").innerHTML =
            "Thank you, " + name + "! Your message has been received.";

        document.getElementById("contactForm").reset();
    }
);