var bible = {
    "reference": "Romans 12:1-2,5-7,9,13:1-9,10",
    "verses": [
        {
            "book_id": "ROM",
            "book_name": "Romans",
            "chapter": 12,
            "verse": 1,
            "text": "Therefore I urge you, brothers, by the mercies of God, to present your bodies a living sacrifice, holy, acceptable to God, which is your spiritual service.\n"
        },
        {
            "book_id": "ROM",
            "book_name": "Romans",
            "chapter": 12,
            "verse": 2,
            "text": "Don’t be conformed to this world, but be transformed by the renewing of your mind, so that you may prove what is the good, well-pleasing, and perfect will of God.\n"
        },
        {
            "book_id": "ROM",
            "book_name": "Romans",
            "chapter": 12,
            "verse": 5,
            "text": "so we, who are many, are one body in Christ, and individually members one of another.\n"
        },
        {
            "book_id": "ROM",
            "book_name": "Romans",
            "chapter": 12,
            "verse": 6,
            "text": "Having gifts differing according to the grace that was given to us, if prophecy, let us prophesy according to the proportion of our faith;\n"
        },
        {
            "book_id": "ROM",
            "book_name": "Romans",
            "chapter": 12,
            "verse": 7,
            "text": "or service, let us give ourselves to service; or he who teaches, to his teaching;\n"
        },
        {
            "book_id": "ROM",
            "book_name": "Romans",
            "chapter": 12,
            "verse": 9,
            "text": "Let love be without hypocrisy. Abhor that which is evil. Cling to that which is good.\n"
        },
        {
            "book_id": "ROM",
            "book_name": "Romans",
            "chapter": 13,
            "verse": 1,
            "text": "Let every soul be in subjection to the higher authorities, for there is no authority except from God, and those who exist are ordained by God.\n"
        },
        {
            "book_id": "ROM",
            "book_name": "Romans",
            "chapter": 13,
            "verse": 2,
            "text": "Therefore he who resists the authority, withstands the ordinance of God; and those who withstand will receive to themselves judgment.\n"
        },
        {
            "book_id": "ROM",
            "book_name": "Romans",
            "chapter": 13,
            "verse": 3,
            "text": "For rulers are not a terror to the good work, but to the evil. Do you desire to have no fear of the authority? Do that which is good, and you will have praise from the same,\n"
        },
        {
            "book_id": "ROM",
            "book_name": "Romans",
            "chapter": 13,
            "verse": 4,
            "text": "for he is a servant of God to you for good. But if you do that which is evil, be afraid, for he doesn’t bear the sword in vain; for he is a servant of God, an avenger for wrath to him who does evil.\n"
        },
        {
            "book_id": "ROM",
            "book_name": "Romans",
            "chapter": 13,
            "verse": 5,
            "text": "Therefore you need to be in subjection, not only because of the wrath, but also for conscience’ sake.\n"
        },
        {
            "book_id": "ROM",
            "book_name": "Romans",
            "chapter": 13,
            "verse": 6,
            "text": "For this reason you also pay taxes, for they are servants of God’s service, attending continually on this very thing.\n"
        },
        {
            "book_id": "ROM",
            "book_name": "Romans",
            "chapter": 13,
            "verse": 7,
            "text": "Therefore give everyone what you owe: if you owe taxes, pay taxes; if customs, then customs; if respect, then respect; if honor, then honor.\n"
        },
        {
            "book_id": "ROM",
            "book_name": "Romans",
            "chapter": 13,
            "verse": 8,
            "text": "Owe no one anything, except to love one another; for he who loves his neighbor has fulfilled the law.\n"
        },
        {
            "book_id": "ROM",
            "book_name": "Romans",
            "chapter": 13,
            "verse": 9,
            "text": "For the commandments, “You shall not commit adultery,” “You shall not murder,” “You shall not steal,” “You shall not covet,”\n and whatever other commandments there are, are all summed up in this saying, namely, “You shall love your neighbor as yourself.”\n"
        },
        {
            "book_id": "ROM",
            "book_name": "Romans",
            "chapter": 13,
            "verse": 10,
            "text": "Love doesn’t harm a neighbor. Love therefore is the fulfillment of the law.\n"
        }
    ],
    "text": "Therefore I urge you, brothers, by the mercies of God, to present your bodies a living sacrifice, holy, acceptable to God, which is your spiritual service.\nDon’t be conformed to this world, but be transformed by the renewing of your mind, so that you may prove what is the good, well-pleasing, and perfect will of God.\nso we, who are many, are one body in Christ, and individually members one of another.\nHaving gifts differing according to the grace that was given to us, if prophecy, let us prophesy according to the proportion of our faith;\nor service, let us give ourselves to service; or he who teaches, to his teaching;\nLet love be without hypocrisy. Abhor that which is evil. Cling to that which is good.\nLet every soul be in subjection to the higher authorities, for there is no authority except from God, and those who exist are ordained by God.\nTherefore he who resists the authority, withstands the ordinance of God; and those who withstand will receive to themselves judgment.\nFor rulers are not a terror to the good work, but to the evil. Do you desire to have no fear of the authority? Do that which is good, and you will have praise from the same,\nfor he is a servant of God to you for good. But if you do that which is evil, be afraid, for he doesn’t bear the sword in vain; for he is a servant of God, an avenger for wrath to him who does evil.\nTherefore you need to be in subjection, not only because of the wrath, but also for conscience’ sake.\nFor this reason you also pay taxes, for they are servants of God’s service, attending continually on this very thing.\nTherefore give everyone what you owe: if you owe taxes, pay taxes; if customs, then customs; if respect, then respect; if honor, then honor.\nOwe no one anything, except to love one another; for he who loves his neighbor has fulfilled the law.\nFor the commandments, “You shall not commit adultery,” “You shall not murder,” “You shall not steal,” “You shall not covet,”\n and whatever other commandments there are, are all summed up in this saying, namely, “You shall love your neighbor as yourself.”\nLove doesn’t harm a neighbor. Love therefore is the fulfillment of the law.\n",
    "translation_id": "web",
    "translation_name": "World English Bible",
    "translation_note": "Public Domain"
}

    for (i = 0; i < bible.verses.length; i++) {
        let obj = bible.verses[i];

        if (obj.book_id === "ROM") {
            let list = document.getElementById("list");
            let listItem = document.createElement("li");
            list.appendChild(listItem);

            let text = `id: ${obj.book_id} 
            name: ${obj.book_name}
            chapter: ${obj.chapter}
            verse: ${obj.verse}
            text: ${obj.text}`;

            listItem.innerHTML += text;

            
        }


        
    }


