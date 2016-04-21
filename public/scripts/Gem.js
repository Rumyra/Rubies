function createGem(uniqueId) {

var svgNs = "http://www.w3.org/2000/svg";

var svgOuterDiv = document.createElement('div');
svgOuterDiv.setAttribute("id", uniqueId);

var svgGemTop = document.createElementNS(svgNs, "svg");
svgGemTop.setAttribute("width", "80px");
svgGemTop.setAttribute("height", "80px");
svgGemTop.setAttribute("version", "1.1");
svgGemTop.setAttribute("viewBox", "0 0 88 100");
svgGemTop.setAttribute("class", "svgTop");

var svgGemSide = document.createElementNS(svgNs, "svg");
svgGemSide.setAttribute("width", "80px");
svgGemSide.setAttribute("height", "80px");
svgGemSide.setAttribute("version", "1.1");
svgGemSide.setAttribute("viewBox", "0 0 90 90");
svgGemSide.setAttribute("class", "svgSide");
        

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

svgGemTop.appendChild(createFacet({
  "fill": "hsla(152, 100%, 50%, 1)",
  "points": "44.001,0.002 87.302,25.002 87.302,74.998 44.001,99.998 0.698,74.998 0.698,25.002",
  "class": "outerHex"
}))

svgGemTop.appendChild(createFacet({
  "fill": "hsla(152, 100%, 10%, 0.5)",
  "points": "44.001,0.002 44,25.174 65.499,37.588 87.302,25.002"
}))

svgGemTop.appendChild(createFacet({
  "fill": "hsla(152, 100%, 90%, 0.5)",
  "points": "87.302,25.002 65.499,37.588 65.499,62.416 87.302,74.998"
}))

svgGemTop.appendChild(createFacet({
  "fill": "hsla(152, 100%, 10%, 0.5)",
  "points": "87.302,74.998 65.499,62.416 44,74.826 44.001,99.998"
}))

svgGemTop.appendChild(createFacet({
  "fill": "hsla(152, 100%, 50%, 0)",
  "points": "44.001,99.998 44,74.826 22.499,62.416 0.698,74.998"
}))

svgGemTop.appendChild(createFacet({
  "fill": "hsla(152, 100%, 50%, 0)",
  "points": "0.698,74.998 22.499,62.416 22.499,37.588 0.698,25.002"
}))

svgGemTop.appendChild(createFacet({
  "fill": "hsla(152, 100%, 90%, 0.5)",
  "points": "0.698,25.002 22.499,37.588 44,25.174 44.001,0.002"
}))

svgGemTop.appendChild(createFacet({
  "fill": "hsla(152, 100%, 50%, 0)",
  "points": "44,25.174 65.499,37.588 65.499,62.416 44,74.826 22.499,62.416 22.499,37.588"
}))

// --------------------

svgGemSide.appendChild(createFacet({
  "fill": "hsla(152, 100%, 50%, 1)",
  "points": "15.498,11.825 74.517,11.825 89.607,31.167 45.95,80.825 0.405,31.167"
}))

svgGemSide.appendChild(createFacet({
  "fill": "hsla(152, 100%, 50%, 0)",
  "points": "0.405,31.167 23.043,31.167 35.979,11.825 15.498,11.825"
}))

svgGemSide.appendChild(createFacet({
  "fill": "hsla(152, 100%, 90%, 0.5)",
  "points": "54.034,11.825 66.97,31.167 23.043,31.167 35.979,11.825"
}))

svgGemSide.appendChild(createFacet({
  "fill": "hsla(152, 100%, 10%, 0.5)",
  "points": "89.607,31.167 66.97,31.167 54.034,11.825 74.517,11.825"
}))

svgGemSide.appendChild(createFacet({
  "fill": "hsla(152, 100%, 10%, 0.5)",
  "points": "45.95,80.825 89.607,31.167 66.97,31.167"
}))

svgGemSide.appendChild(createFacet({
  "fill": "hsla(152, 100%, 50%, 0)",
  "points": "23.043,31.167 66.97,31.167 45.95,80.825"
}))

svgGemSide.appendChild(createFacet({
  "fill": "hsla(152, 100%, 90%, 0.5)",
  "points": "45.95,80.825 23.043,31.167 0.405,31.167"
}))


svgOuterDiv.appendChild(svgGemTop);
svgOuterDiv.appendChild(svgGemSide);
// screenEl.appendChild(svgOuterDiv);
return svgOuterDiv;

}

//Object.keys(attributes).each(function(key)