let database = {
    users: []
};

function addUser(name, age, profession = "Belirtilmedi", email = "yok", linkedin = "#", github = "#", photo = "placeholder.jpg") {
    const user = {
        id: database.users.length + 1,
        name,
        age,
        profession,
        email,
        linkedin,
        github,
        photo
    };
    database.users.push(user);
}

function renderCVs() {
    const container = document.getElementById("cv-container");
    const template = document.getElementById("cv-template");

    database.users.forEach(user => {
        const clone = template.content.cloneNode(true);

        clone.querySelector(".cv-photo").src = user.photo;
        clone.querySelector(".cv-photo").alt = user.name;
        clone.querySelector(".cv-name").textContent = user.name;
        clone.querySelector(".cv-age").textContent = user.age;
        clone.querySelector(".cv-profession").textContent = user.profession;
        clone.querySelector(".cv-email").textContent = user.email;
        clone.querySelector(".cv-linkedin").href = user.linkedin;
        clone.querySelector(".cv-github").href = user.github;

        container.appendChild(clone);
    });
}

addUser("Oğuzcan Özdemir", 26, "Backend Developer", "ozdemircan@gmail.com", "https://www.linkedin.com/in/o%C4%9Fuzcan-%C3%B6zdemir-4497202a7", "https://github.com/canozdemir0");
addUser("Dila Şen", 23, "Graphic Designer", "dila@gmail.com", "https://linkedin.com/in/dilasen", "https://github.com/dilasen");

window.onload = renderCVs;
