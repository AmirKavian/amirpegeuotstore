const loadData = () => {
    fetch("assets/JSON/product.json")
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {

            console.log(data);

            const productContainer = document.querySelector(".product-container");
            for (let i = 0; i < data.length; i++) {

                const productItem = document.createElement("div");
                productItem.classList.add("product-item", "item");
                // document.querySelector(".item").style.width="200px";
                productContainer.appendChild(productItem);

                const productItemImage = document.createElement("div");
                productItemImage.classList.add("product-item-img");
                productItem.appendChild(productItemImage);


                const productLabel = document.createElement("span");
                productLabel.classList.add("product-label");
                productLabel.appendChild(document.createTextNode(data[i].productLabel));
                productItemImage.appendChild(productLabel);

                const productImage = document.createElement("img");
                productImage.classList.add("product-img");
                productImage.setAttribute("src", data[i].productImage);
                productItemImage.appendChild(productImage);



                const productTitleBlock = document.createElement("div");
                productTitleBlock.classList.add("product-title-block");
                productItem.appendChild(productTitleBlock);


                const productId = document.createElement("span");
                productId.classList.add("product-ld");
                productId.appendChild(document.createTextNode(data[i].id));
                productTitleBlock.appendChild(productId);

                const productName = document.createElement("h2");
                productName.classList.add("product-name");
                productName.appendChild(document.createTextNode(data[i].productTitle));
                productTitleBlock.appendChild(productName);

                const productFooter = document.createElement("div");
                productFooter.classList.add("product-footer");
                productItem.appendChild(productFooter);

                const productPrice = document.createElement("span");
                productPrice.classList.add("product-price");
                productPrice.appendChild(document.createTextNode(data[i].productPrice));
                productFooter.appendChild(productPrice);

                const productIcon = document.createElement("i");
                productIcon.classList.add("fa-solid", "fa-cart-shopping");
                productIcon.appendChild(document.createTextNode(data[i].productIcon));
                productFooter.appendChild(productIcon);


            }
        })

        .catch((error) => console.error("Error fetching data:", error));


};
loadData()