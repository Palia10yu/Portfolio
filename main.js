const assignments = [
    { name: "Cinnamon Roll Wreath with Apples", link: "Assignment/assignment-3/recipe.html" },
    { name: "Pizza dip", link: "Assignment/assignment4/recipe.html" },
    { name: "Blog", link: "Assignment/assignment5/index.html" },
    { name: "Register and login", link: "Assignment/assignment-6/register.html" },
    { name: "Square game", link: "Assignment/assignment7/index.html" }
];

window.onload = pageLoad;

function pageLoad() {
    setTimeout(showGreeting, 1000);   
    addSidebarLinks();
    addMainLinks();

    const profilePic = document.getElementById("Profile");
    if (profilePic) {
        profilePic.onclick = toggleProfileBorder;
    }
}

function showGreeting() {
    const topRight = document.getElementById("top-right-content");
    if (topRight) {
        const p = document.createElement("p");
        p.textContent = "Welcome to my Portfolio!";
        p.classList.add("greeting");
        topRight.appendChild(p);
    }
}

function addSidebarLinks() {
    const sidebarUl = document.getElementById("sidebar-ul");
    if (sidebarUl) {
        for (const task of assignments) {
            const li = document.createElement("li");
            const a = document.createElement("a");
            a.textContent = "- " + task.name;
            a.href = task.link;
            a.classList.add("sub-link");
            li.appendChild(a);
            sidebarUl.appendChild(li);
        }
    }
}

function addMainLinks() {
    const area = document.getElementById("assignment-area");
    if (area) {
        const h3 = document.createElement("h3");
        h3.textContent = "Assignment ในห้องเรียน";
        area.appendChild(h3);

        const ul = document.createElement("ul");
        ul.classList.add("assignment-list");
        area.appendChild(ul);

        for (const task of assignments) {
            const li = document.createElement("li");
            const a = document.createElement("a");
            a.textContent = task.name;
            a.href = task.link;
            li.appendChild(a);
            ul.appendChild(li);
        }
    }
}

function toggleProfileBorder(event) {
    event.target.classList.toggle("profile-highlight");
}