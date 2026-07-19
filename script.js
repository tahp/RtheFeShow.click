document.addEventListener("DOMContentLoaded", () => {
    fetch('repos.html')
        .then(response => response.text())
        .then(data => {
            const repoContainer = document.getElementById('repo-content');
            if (repoContainer) {
                repoContainer.innerHTML = data;
            }
        })
        .catch(err => {
            const repoContainer = document.getElementById('repo-content');
            if (repoContainer) {
                repoContainer.innerText = "Failed to load.";
            }
        });
});

