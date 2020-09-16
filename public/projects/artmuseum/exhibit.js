// --- Angie Ta ECS162 Spring 2018 --- 
  function changeImage(img) {

  //  string source = img.src;

    document.getElementById("LargeImageId").src = img.src;


      // split the url or use inner html to change the image caption??
      if(img.src.includes("Toys")){
          document.getElementById("CaptionTitle").innerHTML = "Wind Toys";
          document.getElementById("CaptionDesc").innerHTML = "(1962. oil on canvas)";
      }
      else if(img.src.includes("Pancake")){
        document.getElementById("CaptionTitle").innerHTML = "Pancake Breakfast";
        document.getElementById("CaptionDesc").innerHTML = "(2008. oil on canvas)";
      }
      else if(img.src.includes("Cake")){
        document.getElementById("CaptionTitle").innerHTML = "Around the Cake";
        document.getElementById("CaptionDesc").innerHTML = "(1962. oil on canvas)";
      }
      else if(img.src.includes("Machines")){
        document.getElementById("CaptionTitle").innerHTML = "Three Machines";
        document.getElementById("CaptionDesc").innerHTML = "(1963. oil on canvas)";
      }
      else if(img.src.includes("Creems")){
        document.getElementById("CaptionTitle").innerHTML = "Boston Cremes";
        document.getElementById("CaptionDesc").innerHTML = "(1962. oil on canvas)";
      }
      else if(img.src.includes("Bananas")){
        document.getElementById("CaptionTitle").innerHTML = "Bananas";
        document.getElementById("CaptionDesc").innerHTML = "(1963. oil on canvas)";
      }
  }
