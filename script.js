
function addNote() {

    const title = document.getElementById("noteTitle").value;
    const content = document.getElementById("noteContent").value;

    if (title === "" || content === "") {
        alert("Please enter both title and content.");
        return;
    }

    const notesList = document.getElementById("notesList");

    const note = document.createElement("div");
    note.className = "note";

    const heading = document.createElement("h3");
    heading.textContent = title;

    const paragraph = document.createElement("p");
    paragraph.textContent = content;

    note.appendChild(heading);
    note.appendChild(paragraph);

    if (notesList.querySelector("p") &&
        notesList.children.length === 1 &&
        notesList.textContent === "No notes added yet.") {
        notesList.innerHTML = "";
    }

    notesList.appendChild(note);

    document.getElementById("noteTitle").value = "";
    document.getElementById("noteContent").value = "";
}
