document.querySelectorAll(".tree li").forEach(function(e){var t=document.createElement("span");t.textContent=e.firstChild.textContent,t.style.cursor="pointer",e.insertBefore(t,e.firstChild),e.firstChild.nextSibling.remove(),t.addEventListener("click",function(){var t=e.querySelector("ul");t&&(t.hidden=!t.hidden)})});
//# sourceMappingURL=index.080863f2.js.map
