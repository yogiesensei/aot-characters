const endpoint = 'https://api.jikan.moe/v4/anime/16498/characters'
const container = document.getElementById('container')

const template = (data) => {
    return `
    <div class='anime-data'>
    <img src=${data.character.images.webp.image_url} />
    <p>Name: ${data.character.name}</p>
    <p>Role: ${data.role} Character</p>
    </div>
    `
}

const fetchCharacters = () => {
    fetch(endpoint)
        .then(data => data.json())
        .then(item => {
            // get all character
            let content = ''
            item.data.map(characterData => content += template(characterData))
            container.innerHTML = content

            // get only fist 10 characters
            // const selectedCharacters = [...item.data].slice(0, 10)
            // let content = ''
            // selectedCharacters.map(characterData => content += template(characterData))
            // container.innerHTML = content
        })
}

fetchCharacters()