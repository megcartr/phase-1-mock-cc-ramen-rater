const ramenMenu = document.querySelector('div#ramen-menu')
const newRamenForm = document.querySelector('#new-ramen')


fetch('http://localhost:3000/ramens')
    .then(response => response.json())
    .then(ramen => {
        ramen.forEach(ramenObject => {
            renderRamen(ramenObject)
        })
    })

newRamenForm.addEventListener('submit', event => {
    event.preventDefault()

    const nameInput = event.target.name.value
    const restaurantInput = event.target.restaurant.value
    const imageInput = event.target.image.value
    const ratingInput = event.target.rating.value
    const commentInput = event.target['new-comment'].value

    const newRamen = {
        name: nameInput,
        restaurant: restaurantInput,
        image: imageInput,
        rating: ratingInput,
        comment: commentInput
    }
    renderRamen(newRamen)
    event.target.reset()
})


function renderRamen(ramenObject) {

    const ramenImg = document.createElement('img')
    ramenImg.src = ramenObject.image
    ramenMenu.append(ramenImg)


    ramenImg.addEventListener('click', event => {
        const ramenDetailDiv = document.querySelector('div#ramen-detail')

        const detailImg = ramenDetailDiv.querySelector('img.detail-image')
        detailImg.src = ramenObject.image

        const ramenName = ramenDetailDiv.querySelector('.name')
        ramenName.textContent = ramenObject.name

        const restaurantName = ramenDetailDiv.querySelector('h3.restaurant')
        restaurantName.textContent = ramenObject.restaurant

        const ratingDisplay = document.querySelector('#rating-display')
        ratingDisplay.textContent = ramenObject.rating

        const commentDisplay = document.querySelector('#comment-display')
        commentDisplay.textContent = ramenObject.comment
    })
}