// initierar sökfältet
const searchInput = document.querySelector(".search-input");
searchInput.addEventListener("input", filterPosts);
// initierar alla inlägg = skapar variabel med alla inlägg
const blogPosts = document.querySelectorAll(".oneblogpost");


// hämtar värdet på sökordet 
function filterPosts() {
  const searchValue = searchInput.value.toLowerCase();

  // söker om tags / tag matchar med sökordet
  blogPosts.forEach((post) => {
    const tags = post.querySelectorAll(".tags .tag");
    let match = false;

    // loopar igenom alla tagselement - jämför med input
    tags.forEach((tag) => {
      const tagText = tag.textContent.toLowerCase();
      if (tagText.includes(searchValue)) {
        match = true;
      }
    });
    // om match finns: filtrera ut blocket (inlägget)
    if (match) {
      post.style.display = "block";
    } else {
      post.style.display = "none";
    }
  });
}
