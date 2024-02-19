const baseUrl = 'https://swapi.dev/api/'
const selectOption = document.getElementById('selected-value')
// const selectOption2 = document.getElementById('selected-value2')
const selectOption3 = document.getElementById('selected-value3')
const getInputValue = document.getElementById('get-input')
const getInputValue2 = document.getElementById('get-input2')
const getMovies = document.getElementById('the-movies')
const getMovies2 = document.getElementById('the-movies2')
const btn1 = document.getElementById('btn-select')
const btn2 = document.getElementById('btn-select2')

const starData = [
  'planets',
  'spaceships',
  'vehicles',
  'people',
  'films',
  'species',
]

selectOption.innerHTML = `
${starData
  .map(
    (option) => `
      <option value=${option}>${option}</option>
  `
  )
  .join('')}
`

btn1.addEventListener('click', async () => {
  try {
    const apiUrl = baseUrl + selectOption.value + '/' + getInputValue.value

    const response = await fetch(apiUrl)
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const movies = await response.json()
    console.log(movies)
    getMovies.innerHTML = `
    <h1>${movies?.name}</h1>
    <h1>${movies?.climate}</h1>
    <h1>${movies?.gravity}</h1>
    `
    let array1 = Object.entries(movies)
      .filter(([key, value]) => Array.isArray(value))
      .map(([key, value]) => key)
    selectOption3.innerHTML = `
      ${array1
        .map(
          (option) => `
            <option value=${option}  >${option}</option>
        `
        )
        .join('')}
      `
  } catch (error) {
    console.error('Error:', error)
    getMovies.innerText = error.message
    // Handle the error, e.g., display an error message to the user
  }

  btn2.addEventListener('click', async () => {
    try {
      const apiUrl2 = baseUrl + selectOption3.value + '/' + getInputValue2.value
      const response2 = await fetch(apiUrl2)
      if (!response2.ok) {
        throw new Error('Network response was not ok')
      }
      const movies2 = await response2.json()

      console.log(movies2)
      getMovies2.innerHTML = `
      <h3>${movies2?.title}</h3>
      <h3>${movies2?.director}</h3>
      <h3>${movies2?.producer}</h3>
      `
    } catch (error) {
      console.error('Error:', error)
      getMovies2.innerText = error.message
    }
  })
})
