function load_achievements(n) {
    var achievment_container = document.getElementById("achievements_container");
    for(var i =0;i<n;i++){
        var item_cell = document.createElement("div");
        item_cell.className = "achievement_item_small";
        var achievement_h1 = document.createElement("h2");
        var achievement_h2 = document.createElement("h3");
        var achievement_p = document.createElement("p");
        achievement_h1.innerHTML = "رئيس جامعة اﻷزهر";
        achievement_h2.innerHTML = "28 سبتمبر 2003 - 19 مارس 2010";
        achievement_p.innerHTML = "قال فضيلة الإمام اﻷكبر: إن القرءآن الكريم استعمل منذ البداية أسلوب الحوار مع الشباب, وليس أسلوب الإملاء واﻷمر والنهى, وعرض ﻷنموذجين: أحدهما للشاب المتمرد الذي يسعلي ويستكبر ولا يستجيب.";
        
        item_cell.appendChild(achievement_h1);
        item_cell.appendChild(achievement_h2);
        item_cell.appendChild(achievement_p);
        achievment_container.appendChild(item_cell);
    }
}