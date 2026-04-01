<script>
let likeCount = 0;
let curtido = false;
let descurtido = false;

const likeBtn = document.querySelector(".likeBtn");
const dislikeBtn = document.querySelector(".dislikeBtn");
const countSpan = document.querySelector(".likeCount");

function atualizar() {
  countSpan.innerText = likeCount;
}

likeBtn.addEventListener("click", () => {
  if (!curtido) {
    likeCount++;
    curtido = true;
    likeBtn.classList.add("liked");

    // se estava descurtido, remove
    if (descurtido) {
      descurtido = false;
      dislikeBtn.classList.remove("disliked");
      likeCount++;
    }

  } else {
    likeCount--;
    curtido = false;
    likeBtn.classList.remove("liked");
  }

  atualizar();
});

dislikeBtn.addEventListener("click", () => {
  if (!descurtido) {
    likeCount--;
    descurtido = true;
    dislikeBtn.classList.add("disliked");

    // se estava curtido, remove
    if (curtido) {
      curtido = false;
      likeBtn.classList.remove("liked");
      likeCount--;
    }

  } else {
    likeCount++;
    descurtido = false;
    dislikeBtn.classList.remove("disliked");
  }

  atualizar();
});
</script>
