interface Category {
  name: string;
  items: string[];
}

export default class CatalogModel {
  public categories: Category[];

  constructor() {
    this.categories = [
      {
        name: "fruits and vegetables",
        items: [
          "Pre-cooked corn 450g",
          "Bananas",
          "Oranges",
          "Grapes",
          "Mangos",
          "Pineapples",
          "Strawberries",
          "Blueberries",
          "Raspberries",
          "Blackberries",
        ],
      },
      {
        name: "vegetables",
        items: [
          "Carrots",
          "Broccoli",
          "Spinach",
          "Tomatoes",
          "Cucumbers",
          "Peppers",
          "Lettuce",
          "Onions",
          "Garlic",
          "Potatoes",
        ],
      },
      {
        name: "meat",
        items: ["Chicken", "Beef", "Pork", "Lamb", "Turkey"],
      },
      {
        name: "fish",
        items: ["Salmon", "Tuna", "Cod", "Trout", "Sardines"],
      },
      {
        name: "beverages",
        items: ["Water", "Juice", "Soda", "Tea", "Coffee"],
      },
      {
        name: "pet",
        items: ["Dog Food", "Cat Food", "Bird Seed", "Fish Food", "Pet Toys"],
      },
    ];
  }
}
