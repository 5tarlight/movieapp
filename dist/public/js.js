$(async () => {
  $( ".dialog" ).draggable();

  const tag = $('#tag')

  tag.html('<h1>Loading... Please wait...</h1>')
  let movies

  await $.ajax({
    url: "https://yts.am/api/v2/list_movies.json?sort_by=rating",
    dataType: 'json',
    success: (data) => {
      tag.html('')
      movies = data.data.movies
      
      for(let i in movies) {
        tag.append(`<div class="container con${i}" />`)

        let con = $('.con' + i)

        con.css('background-image', `url(${movies[i].medium_cover_image})`)
      }
    }
  })

  for(let i in movies) {
    $('.con' + i).on('click', (event) => {
      window.scrollTo(0, 0)
      $('.dialog').show()
    })
  }

  $('.dismiss').on('click', (event) => {
    $('.dialog').hide()
  })
})
