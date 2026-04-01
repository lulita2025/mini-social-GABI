<script>
const dislikeBtn = document.querySelector(".dislikeBtn");
const countSpan = document.querySelector(".likeCount");

let count = 0;
let liked = false;
let disliked = false;

likeBtn.onclick = () => {
  if (!liked) {
    liked = true;
    disliked = false;

    likeBtn.classList.add("liked");
    dislikeBtn.classList.remove("disliked");

    count = count + 1;
  } else {
    liked = false;
    likeBtn.classList.remove("liked");

    count = count - 1;
  }

  // trava anti negativo
  if (count < 0) count = 0;

  countSpan.innerText = count;
};

dislikeBtn.onclick = () => {
  if (!disliked) {
    disliked = true;
    liked = false;

    dislikeBtn.classList.add("disliked");
    likeBtn.classList.remove("liked");

    // NÃO mexe no número
  } else {
    disliked = false;
    dislikeBtn.classList.remove("disliked");
  }

  // trava anti negativo
  if (count < 0) count = 0;

  countSpan.innerText = count;
};
</script>