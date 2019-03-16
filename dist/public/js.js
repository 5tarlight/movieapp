$(() => {
  const tag = $('#tag')

  tag.html('<h1>Loading... Please wait...</h1>')

  $.ajax({
    url: "https://yts.am/api/v2/list_movies.json?sort_by=rating",
    dataType: 'json',
    success: (data) => {
      tag.html('')
      let movies = data.data.movies
      

      for(let i in movies) {
        tag.append(`<div class="container con${i}">`
        + `  <div class="cover cover${i}">`
        + '  </div>'
        + '</div>')

        let con = $('.con' + i)

        con.css('background-image', `url(${movies[i].medium_cover_image})`)
      }
    }
  })
})
