const works = [
    { author: "Micheal Jackson",lifetime:"1022-1055",tips: "Human", photos: ["human1.jpg","human2.jpg","human3.jpg"] },
    { author: "Maria JK",lifetime:"1920-2001", tips: "Classical", photos: ["classical1.jpg","classical2.jpg"] },
    { author: "John Herry UY", lifetime:"1894-1928",tips: "Abstract", photos: ["abstract1.jpg","abstract2.jpg","abstract3.jpg","abstract4.jpg","abstract5.jpg"] },
    { author: "Coco",lifetime:"1777-1799", tips: "Beauty",  photos: ["beauty1.jpg","beauty2.jpg"] }
];


for (let i = 0; i < 4; i++) {
    let item_div = document.createElement("div");                                   //创建包含下面所有元素的div节点。
    item_div.setAttribute("class", "item");                               //设置它的class为item。


    let genre_h = document.createElement("h4");                                     //创建genre标题元素的节点。
    genre_h.appendChild(document.createTextNode("Genre : " + works[i].tips));           //创建其文本节点，设置标题内容。
    item_div.appendChild(genre_h);


    let first_div = document.createElement("div");                                  //创建第一个子div元素的节点。
    first_div.setAttribute("class", "inner-box");

    let name_h = document.createElement("h3");
    name_h.style.display = "inline";
    name_h.appendChild(document.createTextNode(works[i].author));

    let lifetime_h = document.createElement("h5");
    lifetime_h.style.display = "inline";
    lifetime_h.style.marginLeft = "0.8em";
    lifetime_h.appendChild(document.createTextNode("lifetime:" + works[i].lifetime));

    first_div.appendChild(name_h);
    first_div.appendChild(lifetime_h);
    item_div.appendChild(first_div);


    let second_div = document.createElement("div");                                 //创建第二个子div元素的节点。
    second_div.setAttribute("class", "inner-box");

    let photo_h = document.createElement("h3");
    photo_h.appendChild(document.createTextNode("Popular Photos"));
    photo_h.style.display = "block";
    second_div.appendChild(photo_h);

    for (let j = 0; j < works[i].photos.length; j++) {                                       //利用循环，创建对应数量的img元素的节点。
        let img = document.createElement("img");
        img.setAttribute("class", "photo");
        img.src = works[i].photos[j];
        second_div.appendChild(img);
    }
    item_div.appendChild(second_div);


    let button = document.createElement("button");                                  //创建button元素的节点。
    button.appendChild(document.createTextNode("Visit"));
    item_div.appendChild(button);


    let box = document.getElementsByClassName("justify");                         //找到父节点，将item_div放入其中。
    box[0].appendChild(item_div);
}