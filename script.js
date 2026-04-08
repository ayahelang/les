function contactWA(){
    window.open("https://wa.me/6285158822803","_blank");
  }
  
  /* NAVBAR */
  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");
  
  toggle.onclick = () => {
    menu.classList.toggle("active");
  };
  
  /* ACCORDION */
  document.querySelectorAll(".accordion-header").forEach(btn=>{
    btn.addEventListener("click",()=>{
      const content = btn.nextElementSibling;
  
      if(content.style.maxHeight){
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });
  
  /* SCROLL ANIMATION */
  const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add("show");
      }
    });
  });
  
  document.querySelectorAll(".fade-in").forEach(el=>{
    observer.observe(el);
  });

/* LESSON INTERAKTIF */
document.querySelectorAll(".lesson-header").forEach(btn => {
  btn.addEventListener("click", () => {
    const content = btn.nextElementSibling;

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});
