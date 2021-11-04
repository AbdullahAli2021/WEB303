/*
    Assignment 5
    Abdullah Ali
*/

$(document).ready(function(){
    // your code here
    class ContentCard {
        id;
        title;
        description;
        type;
        
        constructor (id, title, description, type) {
            this.id = id;
            this.title = title;
            this.description = description;
            this.type = type;
        }

            UpdateClass(title, description, type) {
            if((title || description || type) !== null) {
                this.title = title;
                this.description = description;
                this.type = type;
            }
        }

        ToString() {
            return `<div style = "border-style: solid " id="content-${this.id}">
            <h4>${this.title}</h4>
            <p>${this.description}</p>
            <div>${this.type}</div>
        </div>`
        }

    }

    let cards = [new ContentCard("1" ,"spiderman","A spider bite can change everything", "spider"), new ContentCard("2" ,"superman","The most powerful man on earth", "flying"), 
    new ContentCard("3" ,"batman","king of the night", "night"), new ContentCard("4" ,"ironman","the iron fist", "power"), new ContentCard("5" ,"wonderwoman","don' play with woman", "women"),]

    let card = new ContentCard("1" ,"spiderman","The most powerful man on earth", "superheroes")
    console.log(card.ToString());

      cards.forEach(element => {
        $('#content-list').append(`${element.ToString()}`); 
     }); 
          
      
        
    
});


