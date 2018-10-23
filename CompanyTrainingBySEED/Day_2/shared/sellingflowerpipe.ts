import { Pipe, PipeTransform } from "@angular/core";
import { Seller } from "../catalog/sellingflowers";

@Pipe({ name: 'sellingflowers' })
export class SellingflowersPipe implements PipeTransform {
transform(allfloweres: Seller[]) {
  return allfloweres.filter(flower => flower.canSell);
}
}