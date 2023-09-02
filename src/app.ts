import { Product } from "./product.model";
import "reflect-metadata"
import { plainToClass } from "class-transformer";
import { validate } from "class-validator";

const products = [
  { title: "Carpet", price: 39.99 },
  { title: "Book 1", price: 12.99 },
];

const newProd = new Product('', -4.44)
validate(newProd).then(errors => {
  if (errors.length > 0) {
    console.log('Validation error.')
    console.log(errors)
  } else {
    console.log(newProd.getInfo())
  }
})

const loadedProducts = plainToClass(Product, products)
for (const prod of loadedProducts) {
    console.log(prod.getInfo());
}
