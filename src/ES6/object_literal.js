import React, { useEffect } from "react";

const ObjLiteral = () => {
  useEffect(() => {
    function creteBookShop(inventory) {
      return {
        // 下はこの省略（オブジェクトリテラル）
        // inventory: inventory,
        inventory,
        // inventoryValue: function ()の省略
        inventoryValue() {
          return this.inventory.reduce((total, book) => {
            return total + book.price;
          }, 0);
        },
        // inventoryPrice: function ()の省略
        inventoryPrice(title) {
          return this.inventory.find((book) => {
            return book.title === title;
          }).price;
        },
      };
    }
    const inventory = [
      {
        title: "ハリーポッター",
        price: 1000,
      },
      {
        title: "JavaScript入門",
        price: 1500,
      },
    ];
    const bookShop = creteBookShop(inventory);
    console.log(bookShop.inventoryValue());
    console.log(bookShop.inventoryPrice("ハリーポッター"));
  });
  return <li>Object Literal</li>;
};

export default ObjLiteral;
