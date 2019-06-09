// import { Injectable } from '@angular/core';
// import { Property } from '../models';

// @Injectable({
//   providedIn: 'root'
// })
// export class PropertyService {

//   public properties: Array<Property> = [];

//   constructor() { }

//   getAllProperties() {
//     this.properties = [];

//     let property1 = new Property();
//     property1.id = "New York City, New York";
//     property1.imgName = "https://assets3.thrillist.com/v1/image/1388258/size/tmg-article_default_mobile.jpg";
//     property1.price=  130;
//     property1.startdate= "May 25, 2019";
//     property1.enddate= "July 6, 2019";


//     let property2 = new Property();
//     property2.id = "Rome, Italy";
//     property2.imgName = "https://cdn-image.travelandleisure.com/sites/default/files/styles/1600x1000/public/1505425500/06-spanish-steps-rome-airbnb-vacation-rental-ROMEBNB0917.jpg?itok=KHMF4O_X";
//     property2.price=  90;
//     property2.startdate= "May 25, 2019";
//     property2.enddate= "July 6, 2019";

//     let property3 = new Property();
//     property3.id = "Miami, Florida";
//     property3.imgName = "https://media.timeout.com/images/104092384/1372/772/image.jpg";
//     property3.price=  100;
//     property3.startdate= "May 25, 2019";
//     property3.enddate= "July 6, 2019";

//     let property4 = new Property();
//     property4.id = "Moscow, Russia";
//     property4.imgName = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhFJJFqyHRt0fIudhRFAxTdp-W0O0ITihi7GUrv41H_y2FJMb2";
//     property4.price=  80;
//     property4.startdate= "May 25, 2019";
//     property4.enddate= "July 6, 2019";

   

//     this.properties.push(property1);
//     this.properties.push(property2);
//     this.properties.push(property3);
//     this.properties.push(property4);
   
//   }

//   // Returns null if not found.
//   findPropertyById(id: string): Property {
//     let foundProperty: Property = null;

//     this.properties.forEach(
//       (property: Property) => {
//         if (property.id == id) {
//           foundProperty = property;
//         }
//       }
//     );

//     return foundProperty;
//   }

// }





