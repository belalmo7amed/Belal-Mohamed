// typing code 

  const words = ["Web designer", "Web Development", "Front-end"];
  const dynamicText = document.getElementById("dynamic-text");
  let wordIndex = 0;
  let charIndex = 0;

  function type() {
    if (charIndex < words[wordIndex].length) {
      dynamicText.innerHTML += words[wordIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, 100); // Adjust the typing speed here (in milliseconds)
    } else {
      setTimeout(erase, 1000); // Wait for a second before erasing
    }
  }

  function erase() {
    if (charIndex > 0) {
      dynamicText.innerHTML = words[wordIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, 50); // Adjust the erasing speed here (in milliseconds)
    } else {
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(type, 500); // Wait for half a second before typing the next word
    }
  }

  // Start the typing animation
  setTimeout(type, 500);



/* =====================ASIDE================= */
const nav =document.querySelector('.nav'),
  navList = nav.querySelectorAll('li'),
  totalNavList = navList.length,
  allSection = document.querySelectorAll(".section"),
  totalSection = allSection.length;
  for(let i = 0 ; i < totalNavList ; i++) 
  {
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function()
    {
      removeBackSection();
      for(let j = 0 ; j<totalNavList ; j++)
      {
        if(navList[j].querySelector("a").classList.contains("active"))
        {
          addBackSection(j);
        }
        navList[j].querySelector("a").classList.remove("active");
      }
      this.classList.add("active")
      showSection(this);

      if(window.innerWidth < 1200)
      {
        asideSectionTogglerBtn();
      }
    })
  }

  function removeBackSection()
  {
    for(let i = 0; i<totalSection; i++) 
    {
      allSection[i].classList.remove("back-section");
    }
  }

  function addBackSection(num)
  {
      allSection[num].classList.add("back-section");
  }


  function showSection(element)
  {
    for(let i = 0; i<totalSection; i++) 
    {
      allSection[i].classList.remove("active");
    }

    const target= element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active");
  }

  function updateNav(element)
  {
    for(let i =0; i <totalNavList; i++)
    {
      navList[i].querySelector("a").classList.remove("active");
      const target= element.getAttribute("href").split("#")[1];
      if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1])
      {
        navList[i].querySelector("a").classList.add("active");
      }
    }
  }
  document.querySelector(".hire-me").addEventListener("click", function()
  {
    const sectionIndex = this.getAttribute("data-section-index");
    // console.log(sectionIndex);
    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSection(sectionIndex);
  })

  const navtogglerBtn = document.querySelector(".nav-toggler"),
        aside = document.querySelector(".aside");
        navtogglerBtn.addEventListener("click", ()=>{
          asideSectionTogglerBtn(); 
        })

        function asideSectionTogglerBtn()
        {
            aside.classList.toggle("open");
            navtogglerBtn.classList.toggle("open");

            for(let i =0; i<totalSection; i++){
              allSection[i].classList.toggle("open");
            }
        }