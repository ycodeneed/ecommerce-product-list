document.writeln('<link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900&display=swap">');
var products = {
    1: { id: 1, name: 'Smartphone', category: 'electronics', price: 699, image: '/shopping.png' },
    2: { id: 2, name: 'Laptop', category: 'electronics', price: 999, image: '/shopping4.png' },
    3: { id: 3, name: 'T-Shirt', category: 'fashion', price: 19, image: '/shopping.png' },
    4: { id: 4, name: 'Sofa', category: 'home', price: 499, image: '/shopping.png' }
};
document.addEventListener("DOMContentLoaded", function (event) {
    encodeLib.init();
    STORE.init();
    STORE.productList = document.getElementById('product-list');

    setTimeout(() => {STORE.loader.remove();encodeLib.showSkeletonLoader();}, 500);
    setTimeout(() => {encodeLib.renderProducts(Object.values(products));}, 1500);
});

var STORE = {
    init: function () {
        let loaderDiv = encodeLib.loader({ id: "loader", position: "absolute", backgroundColor: "#f2f2f2", zIndex: "6000", top: "0", left: "0" });
        encodeLib.insert(encodeLib.BODY, loaderDiv, { addOn: "prepend" });

        var categoryFilter = document.getElementById('categoryFilter');
        var sortOptions = document.getElementById('sortOptions');

        categoryFilter.addEventListener('change', encodeLib.filterAndSortProducts);
        sortOptions.addEventListener('change', encodeLib.filterAndSortProducts);

        STORE.loader = $("#loader");
        STORE.HTML = $("#outerBody");
        STORE.BODY = $("#outerBody").children(".content").first();

    },
    appElement: function (appInfoObj, listId) {

        if (!appInfoObj || !listId) {
            return;
        }

        if(appInfoObj.hideApp) {
            appInfoObj.helpDocLink[platform] = "";
        }

        let appElement = `<div class="product" id="${appInfoObj.id}">
                                <div class="product-inner" title="${appInfoObj.name}">
                                    <div id="skeletonLoader" class="skeletonLoader">
                                        <div class="skeleton skeleton-image"></div>
                                        <div class="skeleton skeleton-title"></div>
                                        <div class="skeleton skeleton-price"></div>
                                        <div class="skeleton skeleton-button"></div>
                                    </div>
                                    <div>
                                        <div class="product-image">
                                            <span>
                                                <a class="product-image-link" target="_blank" href="#">
                                                    <div class="product-image-inner">
                                                        <img src="${appInfoObj.image ? appInfoObj.image : '/shopping.png'}" alt="${appInfoObj.name}" class="lazy-image" onload="$('#'+${appInfoObj.id}+' .skeletonLoader').remove();">
                                                    </div>
                                                </a>
                                            </span>
                                        </div>
                                        <div class="product-name">${appInfoObj.name}</div>
                                        <div class="product-price">
                                            <span class="product-price-inner">
                                                <span class="product-price-symbol">₹</span>
                                                <span class="product-price-whole">${appInfoObj.price}</span>
                                            </span>
                                        </div>
                                        <div class="product-addCart">
                                            <button onclick="encodeLib.rippleAction(this, event);" class="product-addCart-button">
                                                <svg class="cart-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="20" height="20" viewBox="0 0 256 256" xml:space="preserve"> <defs> </defs> <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"> <circle cx="33.718" cy="73.438" r="6.848" style="stroke: none;stroke-width: 1;stroke-dasharray: none;stroke-linecap: butt;stroke-linejoin: miter;stroke-miterlimit: 10;fill: rgb(255 255 255);fill-rule: nonzero;opacity: 1;" transform="  matrix(1 0 0 1 0 0) "></circle> <circle cx="69.928" cy="73.438" r="6.848" style="stroke: none;stroke-width: 1;stroke-dasharray: none;stroke-linecap: butt;stroke-linejoin: miter;stroke-miterlimit: 10;fill: rgb(255 255 255);fill-rule: nonzero;opacity: 1;" transform="  matrix(1 0 0 1 0 0) "></circle> <path d="M 16.209 25.922 c -1.348 0 -2.563 -0.935 -2.864 -2.306 l -0.542 -2.467 c -0.708 -3.225 -3.617 -5.565 -6.919 -5.565 h -2.95 C 1.314 15.583 0 14.269 0 12.649 s 1.314 -2.935 2.935 -2.935 h 2.95 c 6.037 0 11.357 4.28 12.651 10.176 l 0.542 2.467 c 0.348 1.583 -0.654 3.148 -2.237 3.496 C 16.629 25.9 16.417 25.922 16.209 25.922 z" style="stroke: none;stroke-width: 1;stroke-dasharray: none;stroke-linecap: butt;stroke-linejoin: miter;stroke-miterlimit: 10;fill: rgb(255 255 255);fill-rule: nonzero;opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"></path> <path d="M 60.166 73.837 c -0.005 -0.133 -0.02 -0.264 -0.02 -0.398 c 0 -2.025 0.619 -3.908 1.677 -5.471 H 41.825 c 1.058 1.563 1.677 3.446 1.677 5.471 c 0 0.134 -0.015 0.265 -0.02 0.398 H 60.166 z" style="stroke: none;stroke-width: 1;stroke-dasharray: none;stroke-linecap: butt;stroke-linejoin: miter;stroke-miterlimit: 10;fill: rgb(255 255 255);fill-rule: nonzero;opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"></path> <path d="M 23.937 73.438 c 0 -2.036 0.626 -3.927 1.695 -5.495 c -1.377 -0.121 -2.464 -1.267 -2.464 -2.674 c 0 -1.487 1.21 -2.698 2.698 -2.698 c 1.621 0 2.935 -1.314 2.935 -2.935 c 0 -1.621 -1.314 -2.935 -2.935 -2.935 c -4.725 0 -8.568 3.843 -8.568 8.567 c 0 4.063 2.846 7.468 6.648 8.343 C 23.945 73.554 23.937 73.497 23.937 73.438 z" style="stroke: none;stroke-width: 1;stroke-dasharray: none;stroke-linecap: butt;stroke-linejoin: miter;stroke-miterlimit: 10;fill: rgb(255 255 255);fill-rule: nonzero;opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"></path> <path d="M 83.903 70.902 L 83.903 70.902 c 0 -1.621 -1.314 -2.935 -2.935 -2.935 h -2.808 c 1.058 1.563 1.677 3.446 1.677 5.471 c 0 0.134 -0.015 0.265 -0.02 0.398 h 1.151 C 82.589 73.837 83.903 72.523 83.903 70.902 z" style="stroke: none;stroke-width: 1;stroke-dasharray: none;stroke-linecap: butt;stroke-linejoin: miter;stroke-miterlimit: 10;fill: rgb(255 255 255);fill-rule: nonzero;opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"></path> <path d="M 89.251 21.027 c -0.557 -0.621 -1.352 -0.976 -2.186 -0.976 H 16.211 c -0.889 0 -1.73 0.403 -2.287 1.095 c -0.557 0.693 -0.77 1.601 -0.579 2.469 l 8.043 36.651 c 0.295 1.346 1.488 2.305 2.866 2.305 h 53.688 c 4.965 0 8.139 -3.722 8.681 -8.658 l 3.359 -30.607 C 90.073 22.478 89.807 21.649 89.251 21.027 z M 61.201 44 H 56 v 5.201 c 0 1.657 -1.343 3 -3 3 s -3 -1.343 -3 -3 V 44 h -5.201 c -1.657 0 -3 -1.343 -3 -3 s 1.343 -3 3 -3 H 50 v -5.201 c 0 -1.657 1.343 -3 3 -3 s 3 1.343 3 3 V 38 h 5.201 c 1.657 0 3 1.343 3 3 S 62.858 44 61.201 44 z" style="stroke: none;stroke-width: 1;stroke-dasharray: none;stroke-linecap: butt;stroke-linejoin: miter;stroke-miterlimit: 10;fill: rgb(255 255 255);fill-rule: nonzero;opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"></path> </g> </svg>
                                                <span class="cart-item">Add to cart</span>
                                                <span class="ripple"></span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>`;

        encodeLib.insert(listId, appElement, { addOn: "append" });
        // $(".skeletonLoader").remove();

    }
};


var encodeLib = {
    init: function() {

        document.body.parentNode.style.width = "100%";
        document.body.parentNode.style.height = "100%";
        document.body.parentNode.style.margin = "0";
        document.body.parentNode.style.overflow = "hidden";
        document.body.parentNode.style.position = "relative";

        document.body.style.width = "100%";
        document.body.style.height = "100%";
        document.body.style.margin = "0";
        document.body.style.overflow = "hidden";
        document.body.style.position = "relative";

        encodeLib.BODY = $("body");
        encodeLib.HTML = $("html");

        document.onclick = encodeLib.outerClickFunction;
        
    },
    renderProducts: function(filteredProducts) {
        STORE.productList.innerHTML = '';
        filteredProducts.forEach(async function (appObj, index) {
            let thisAppObj = JSON.parse(JSON.stringify(appObj));
            STORE.appElement(thisAppObj, $("#product-list"));
        });
        encodeLib.lazyLoadImages();
    },
    filterAndSortProducts: function() {

        let filteredProducts = Object.values(products);
        let category = categoryFilter.value;
        let sort = sortOptions.value;
    
        if (category !== 'all') {
          filteredProducts = filteredProducts.filter(product => product.category === category);
        }
    
        if (sort === 'low-to-high') {
          filteredProducts.sort((a, b) => a.price - b.price);
        }
        else if (sort === 'high-to-low') {
          filteredProducts.sort((a, b) => b.price - a.price);
        }
    
        encodeLib.renderProducts(filteredProducts);
        
    },
    showSkeletonLoader: function() {
        STORE.productList.innerHTML = '';
        for(let i = 0; i < 6; i++) {
            STORE.productList.innerHTML += `
            <div class="skeleton-card">
                <div class="skeletonImage"></div>
                <div class="skeletonText"></div>
            </div>`;
        }
    },
    lazyLoadImages: function() {
        let lazyImages = document.querySelectorAll('.lazy-image');
        lazyImages.forEach(img => {
          const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                img.src = img.src;
                img.classList.add('lazy-loaded');
                observer.unobserve(img);
              }
            });
          });
          observer.observe(img);
        });
    },
    rippleAction: function(thisElement, e) {
        document.querySelector(".platformInfoAction").innerText = "Adding...";
        document.querySelector(".platformInfoAction").style.transform = "scale(1)";

        let ripple = thisElement.querySelector('.ripple');
        let rect = thisElement.getBoundingClientRect();
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;
    
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
    
        ripple.classList.add('ripple-active');
    
        setTimeout(() => {
            ripple.classList.remove('ripple-active');
            document.querySelector(".platformInfoAction").innerText = "Added";
            $("#customer-cart").text(Number($("#customer-cart").text())+1);
            $(thisElement).find(".cart-").text("Added");
            $(thisElement).find(".cart-icon").hide();
            $(thisElement).attr("onclick", "");
        }, 600);

        setTimeout(() => {
            document.querySelector(".platformInfoAction").style.transform = "scale(0)";
        }, 1000);
    },
    toggleEvent: function(thisElement, trueFunction, falseFunction, onName="on") {
        if(!thisElement) {
            return;
        }
        if(thisElement && typeof(thisElement) == "string" || thisElement.length == undefined) {
            thisElement = $(thisElement);
        }
        if(thisElement.attr(onName) == "true") {
            thisElement.attr(onName, "false");
            falseFunction(thisElement);
        }
        else {
            thisElement.attr(onName, "true");
            trueFunction(thisElement);
        }
    },
    openFilterBar: function(thisElement) {
        $('.filter-bar').width("256px");
    },
    closeFilterBar: function(thisElement) {
        $('.filter-bar').width("0");
    },
    insert: function(parentElement, addElements="", insertObject = {}) {
        if(!parentElement) {
            return;
        }
        if(parentElement && typeof(parentElement) == "string" || parentElement.length == undefined) {
            parentElement = $(parentElement);
        }
    
        if(typeof(insertObject.before) == 'function') {
            insertObject.before();
        }
        if(!insertObject.addOn) {
            parentElement.html(addElements);
        }
        else if(insertObject.addOn == "append") {
            parentElement.append(addElements);
        }
        else if(insertObject.addOn == "prepend") {
            parentElement.prepend(addElements);
        }
        else if(insertObject.addOn == "after") {
            parentElement.after(addElements);
        }
        else if(insertObject.addOn == "before") {
            parentElement.before(addElements);
        }
        else {
            parentElement.html(addElements);
        }
        if(typeof(insertObject.after) == 'function') {
            insertObject.after();
        }
    },
    outerClickFunctions: [],
    outerClickFunction: function(e) {
        encodeLib.outerClickFunctions.forEach(function(func) {
            func(e);
        });
    },
    loader: function(outerObject={}) {
        if(!$('.loaderStyle').length) {
            let styleElement = `<style class="loaderStyle">/* message loading style */ .enLoadingInner { margin: 0 auto; background-color: #fff; border-radius: 50%; box-shadow: 0 1px 1px 0 rgba(0,0,0,.06),0 2px 5px 0 rgba(0,0,0,.2); display: flex; align-items: center; justify-content: center; width: 35px; height: 35px; } .enLoadingOuter { display: flex; flex: none; justify-content: center; padding: 15px 0px; box-sizing: border-box; } .enLoadingSvgCircle { stroke: #ccc; stroke-dasharray: 1,150; stroke-dashoffset: 0; stroke-linecap: round; animation: enLoadingSvgCircle 1.5s ease-in-out infinite; } .enLoadingSVG { animation: enLoadingSVG 2s linear infinite; } @keyframes enLoadingSVG{ to{transform:rotate(1turn)} } @keyframes enLoadingSvgCircle{ 0%{stroke-dasharray:1,150;stroke-dashoffset:0} 50%{stroke-dasharray:90,150;stroke-dashoffset:-35} to{stroke-dasharray:90,150;stroke-dashoffset:-124} } /* message loading style */</style>`;
            encodeLib.insert(encodeLib.BODY, styleElement, {addOn: "append"});
        }
        let loaderSVG = `<svg class="enLoadingSVG" width="17" height="17" viewBox="0 0 46 46" role="status"><circle class="enLoadingSvgCircle" cx="23" cy="23" r="20" fill="none" stroke-width="6" style="stroke: rgb(57 82 234);"></circle></svg>`;
        if(outerObject && outerObject.svg) {
            loaderSVG = changeOuterObject.svg.replaceAll("<svg ", `<svg class="enLoadingSVG" `);
        }
        return `<div id="${outerObject.id ? outerObject.id : ''}" class="enContent" style="height: 100%; background-color: ${outerObject.backgroundColor ? outerObject.backgroundColor : '#f2f2f2'};color: black; overflow: hidden;  line-height: initial; resize: none; display: flex; align-items: center; justify-content: center; flex-direction: column; font-size: inherit; font-weight: inherit; word-break: break-word; word-wrap: break-word; box-sizing: border-box; width: 100%; padding: 0; cursor: default; font-family: sans-serif; z-index: ${outerObject.zIndex ? outerObject.zIndex : '5000'}; position: ${outerObject.position ? outerObject.position : 'absolute'}; left: 0;  top: 0; max-width: 100%; min-width: 0; text-align: left; white-space: normal;"><div style="display: flex; align-items: center; justify-content: center; flex-direction: column; width: 100%; height: 100%;   max-width: 100%; min-width: 0; overflow: hidden; word-break: break-word; word-wrap: break-word; white-space: normal; text-align: left;" class='content'><div class="enLoadingInner" title="loading…">
        ${loaderSVG}
        </div></div></div>`;
    },
    autoAlignDivPosition: function(element, elementWidth, elementGap={x: 0, y: 0}, maxWidthSet=null) {
        if(!element) {
            return;
        }
        if(element && typeof(element) == "string" || element.length == undefined) {
            element = $(element);
        }
        element.parent().css({"max-width": "unset"});
        if(element.parent().css("position") != "relative" && element.parent().css("position") != "absolute") {
            element.parent().css({"position": "relative"});
        }
        element.css({"position": "absolute"});
        elementWidth = Number(elementWidth);
        elementGapX = Number(elementGap.x);
        elementGapY = Number(elementGap.y);
        let split = Math.floor(element.parent().width()/(elementWidth+elementGapX));
        let boxs = Array(split).fill(0);
        let maxX = 0;
        element.each(function(elementCount) {
            let boxY = Object.entries(boxs).sort((val1, val2) => { return val1[1] - val2[1]; }).shift();		
            if(Number(boxY[0]) <= split) {
                maxX = maxX <= (elementWidth*Number(boxY[0]))+(elementGapX*Number(boxY[0])) ? (elementWidth*Number(boxY[0]))+(elementGapX*Number(boxY[0]))+elementWidth : maxX;
                boxs[boxY[0]] = boxs[boxY[0]]+$(this).height()+elementGapY;
                $(this).css({"left": (elementWidth*Number(boxY[0]))+(elementGapX*Number(boxY[0]))+"px", "top": boxY[1]+"px"});
            }
            if(elementCount == element.length-1) {
                if(maxWidthSet) {
                    element.parent().css({"max-width": maxWidthSet});
                }
                else {
                    element.parent().css({"max-width": maxX+"px"});
                }
                element.parent().css({"height": (boxs[boxY[0]]-elementGapY)+"px", "min-height": (boxs[boxY[0]]-elementGapY)+"px"});
            }
        });
    }
};
