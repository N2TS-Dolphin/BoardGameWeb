document.addEventListener("DOMContentLoaded", function() {
    const truthButton = document.querySelector(".truth");
    const dareButton = document.querySelector(".dare");
    const doneButtons = document.querySelectorAll(".done");
    const selectionScreen = document.getElementById("selection-screen");
    const contentScreen = document.getElementById("content-screen");
    const truthContent = document.getElementById("truth-content");
    const dareContent = document.getElementById("dare-content");

    truthButton.addEventListener("click", async function() {
        try {
            const response = await fetch('/truth');
            const data = await response.json();
            truthContent.querySelector('p').textContent = data.content;
            selectionScreen.classList.add("hidden");
            contentScreen.classList.remove("hidden");
            truthContent.classList.remove("hidden");
        } catch (error) {
            console.error('Error fetching truth:', error);
        }
    });

    dareButton.addEventListener("click", async function() {
        try {
            const response = await fetch('/dare');
            const data = await response.json();
            dareContent.querySelector('p').textContent = data.content;
            selectionScreen.classList.add("hidden");
            contentScreen.classList.remove("hidden");
            dareContent.classList.remove("hidden");
        } catch (error) {
            console.error('Error fetching dare:', error);
        }
    });

    doneButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            contentScreen.classList.add("hidden");
            selectionScreen.classList.remove("hidden");
            truthContent.classList.add("hidden");
            dareContent.classList.add("hidden");
        });
    });
});
