//components.js
function loadComponent(id, file) {
    fetch(file)
        .then(response => {
            if (!response.ok) throw new Error(`Failed to fetch ${file}: ${response.statusText}`);
            return response.text();
        })
        .then(data => {
            const el = document.getElementById(id);
            if (!el) throw new Error(`Element with id "${id}" not found`);
            el.innerHTML = data;
        })
        .catch(error => {
            console.error(error);
        });
}

//load header and footer
loadComponent("header", "format/header.html");
loadComponent("footer", "format/footer.html");