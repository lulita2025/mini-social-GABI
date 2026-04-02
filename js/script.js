const likeBtn = document.querySelector(".likeBtn");
const dislikeBtn = document.querySelector(".dislikeBtn");
const countSpan = document.querySelector(".likeCount");

let count = 0;
let liked = false;
let disliked = false;

likeBtn.addEventListener("click", function() {

  if (!liked) {
    liked = true;
    likeBtn.classList.add("liked");
    count++;

    if (disliked) {
      disliked = false;
      dislikeBtn.classList.remove("disliked");
    }

  } else {
    liked = false;
    likeBtn.classList.remove("liked");
    count--;
  }

  countSpan.textContent = count;
});

dislikeBtn.addEventListener("click", function() {

  if (!disliked) {
    disliked = true;
    dislikeBtn.classList.add("disliked");

    if (liked) {
      liked = false;
      likeBtn.classList.remove("liked");
      count--;
    }

  } else {
    disliked = false;
    dislikeBtn.classList.remove("disliked");
  }

  countSpan.textContent = count;
});