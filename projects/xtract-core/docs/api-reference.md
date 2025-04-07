---
title: API Reference
description: Learn how to use the Xtract Core endpoints.
api: true
hide:
  - navigation
  - tags
  - toc
---


<style>
  .md-typeset h1,
  .md-content__button {
    display: none;
  }
</style>

<swagger-ui src="swagger.yaml"/>


<script>
function scroll() {
    let iframe = document.querySelector("iframe")
    let doc = null
    if(iframe == null) {
        doc = document
    } else {
        doc = iframe.contentDocument
    }

    let href = window.location.hash.substring(1).toLowerCase()

    if(href.length == 0) {
        return
    }

    let anchor = doc.getElementById(href)

    if(anchor == null || anchor.getAttribute("is-anchor") != "true") {
        return
    }

	
    var elementPosition = anchor.getBoundingClientRect().top;
   
    window.scrollTo({
         top: elementPosition,
         behavior: "smooth"
    });
	
    let anchor_parent = anchor.parentElement
    let btn = anchor_parent.querySelector(".opblock-control-arrow, .expand-operation")
    if(btn != null) {
        if(!anchor_parent.classList.contains("is-open") && anchor_parent.getAttribute("data-is-open") != "true") {
            btn.click()
        }
    }

}

function setUpAnchors() {
    iframe = document.querySelector("iframe")
    let doc = null
    if(iframe == null) {
        doc = document
    } else {
        doc = iframe.contentDocument
    }

    let refs = doc.querySelectorAll(".opblock-tag, .opblock")
    for(let i = 0; i < refs.length; i++) {
        let ref = refs[i]
        let href = ''
        let anchor = doc.createElement("a")
        if(ref.tagName.toLowerCase().includes("h")) {
            href = ref.id.substring(ref.id.lastIndexOf('-') + 1)
            href = "/" + href[0].toLowerCase() + href.substring(1)
            let lhref = href.toLowerCase()
            anchor.id = lhref
            anchor.href = "#" + lhref
        } else if (ref.tagName.toLowerCase() == "div") {
            href = ref.id.substring(ref.id.indexOf('-') + 1).replace('-', '/')
            href = "/" + href[0].toLowerCase() + href.substring(1)
            let lhref = href.toLowerCase()
            anchor.id = lhref
            anchor.href = "#" + lhref
        }
        anchor.setAttribute('is-anchor', "true")
        ref.appendChild(anchor)

        setUpButtons(ref, href)
    }
}

function setUpButtons(btn, href) {
    btn.addEventListener("click", function(event){
        window.location.href = "#" + href
    });
}

document.querySelector('iframe').onload = function() {
    setTimeout(function() {
        setUpAnchors();
        scroll();
    }, 1000);
}</script>
