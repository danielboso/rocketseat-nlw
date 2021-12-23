const linksSocialMedia = {
    github: "danielboso",
    youtube: "danielboso",
    facebook: "daniel.boso.9",
    instagram: "danielboso",
    twitter: "danielboso",
}

function changeSocialMediaLinks() {
    for (let li of socialLinks.children) {
        const social = li.getAttribute('class')
        li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
    }
}

changeSocialMediaLinks()

function getGithubProfileInfos() {
    const url = `https://api.github.com/users/${linksSocialMedia.github}`

    fetch(url)
    .then(response => response.json())
    .then(data => {
        userName.textContent = data.name
        userBio.textContent = data.bio
        userLink.src = data.html_url
        userImage.src = data.avatar_url
        userLogin.src = data.login
    })
}

getGithubProfileInfos()