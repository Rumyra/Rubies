function createGem(uniqueId, screenEl) {

var svgNs = "http://www.w3.org/2000/svg";

var svgGem = document.createElementNS(svgNs, "svg");
svgGem.setAttribute("id", uniqueId);
svgGem.setAttribute("width", "50px");
svgGem.setAttribute("height", "50px");
svgGem.setAttribute("version", "1.1");
svgGem.setAttribute("viewBox", "0 0 88 100");
        

function createFacet (attributes) {
  var sg_bit = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
  attributes["stroke"] = attributes["stroke"] || "#fff"
  attributes["stroke-width"] = attributes["stroke-width"] || "0.7"
  attributes["stroke-linejoin"] = attributes["stroke-linejoin"] || "round"

  for(var key in attributes) {
    sg_bit.setAttribute(key, attributes[key]);
  }
  return sg_bit
}

svgGem.appendChild(createFacet({
  "fill": "hsla(346, 100%, 50%, 1)",
  "points": "44.001,0.002 87.302,25.002 87.302,74.998 44.001,99.998 0.698,74.998 0.698,25.002",
  "class": "outerHex"
}))

svgGem.appendChild(createFacet({
  "fill": "hsla(346, 100%, 10%, 0.5)",
  "points": "44.001,0.002 44,25.174 65.499,37.588 87.302,25.002"
}))

svgGem.appendChild(createFacet({
  "fill": "hsla(346, 100%, 90%, 0.5)",
  "points": "87.302,25.002 65.499,37.588 65.499,62.416 87.302,74.998"
}))

svgGem.appendChild(createFacet({
  "fill": "hsla(346, 100%, 10%, 0.5)",
  "points": "87.302,74.998 65.499,62.416 44,74.826 44.001,99.998"
}))

svgGem.appendChild(createFacet({
  "fill": "hsla(346, 100%, 50%, 0)",
  "points": "44.001,99.998 44,74.826 22.499,62.416 0.698,74.998"
}))

svgGem.appendChild(createFacet({
  "fill": "hsla(346, 100%, 50%, 0)",
  "points": "0.698,74.998 22.499,62.416 22.499,37.588 0.698,25.002"
}))

svgGem.appendChild(createFacet({
  "fill": "hsla(346, 100%, 90%, 0.5)",
  "points": "0.698,25.002 22.499,37.588 44,25.174 44.001,0.002"
}))

svgGem.appendChild(createFacet({
  "fill": "hsla(346, 100%, 50%, 0.5)",
  "points": "44,25.174 65.499,37.588 65.499,62.416 44,74.826 22.499,62.416 22.499,37.588"
}))

screenEl.appendChild(svgGem);

}

//Object.keys(attributes).each(function(key)