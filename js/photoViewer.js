const photoViewer = (() => {
  let isOpen = false;

  function openPhoto(photoData) {
    $('.big-picture__img').attr('src', photoData.url);
    $('.likes-count').text(photoData.likes);
    $('.comments-count').text(photoData.comments.length);
    $('.social__comments').empty();

    photoData.comments.forEach(comment => {
      const commentHtml = `
        <li class="social__comment">
          <img
            class="social__picture"
            src="${comment.avatar}"
            alt="${comment.name}"
            width="35" height="35">
          <p class="social__text">${comment.text}</p>
        </li>
      `;
      $('.social__comments').append(commentHtml);
    });

    $('.social__caption').text(photoData.description);
    $('.social__comment-count, .comments-loader').addClass('hidden');
    $('.big-picture').removeClass('hidden');
    $('body').addClass('modal-open');
    $(document).on('keydown', closeOnEsc);
    $('.big-picture__cancel').on('click', closePhoto);
  }

  function closePhoto() {
    $('.big-picture').addClass('hidden');
    $('body').removeClass('modal-open');
    $(document).off('keydown', closeOnEsc);
    $('.big-picture__cancel').off('click', closePhoto);
  }

  function closeOnEsc(event) {
    if (event.key === 'Escape') {
      closePhoto();
    }
  }

  return {
    openPhoto,
    closePhoto
  };
})();

photoViewer.openPhoto(photoData);
