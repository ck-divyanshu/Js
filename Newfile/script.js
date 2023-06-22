document.addEventListener("DOMContentLoaded", function() {
    const divElements = document.querySelectorAll('[attribute-gallery]');
  
    divElements.forEach((div) => {
      const id = div.getAttribute('attribute-gallery');
      const textValue = `ID : ${id} - Hello`;
  
      const textNode = document.createTextNode(textValue);
      div.innerHTML = "";
      div.appendChild(textNode);
  
      console.log(`ID ${id} - Script loaded`);
  
      div.addEventListener('click', function(event) {
        const id = div.getAttribute('attribute-gallery');
  
        const scriptElement = document.createElement('script');
        scriptElement.src = `https://ck-divyanshu.github.io/Dynamic/Dynamicfile.js?id=${id}`;
  
        const existingScript = document.querySelector(`[src="https://ck-divyanshu.github.io/Dynamic/Dynamicfile.js?id=${id}"]`);
        if (existingScript) {
          existingScript.remove();
        }
        document.head.appendChild(scriptElement);
      });
    });
  });
  