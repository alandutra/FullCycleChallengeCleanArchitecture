import Product from "../../../domain/product/entity/product";
import ProductRepositoryInterface from "../../../domain/product/repository/product-repository.interface";

import {
  InputListProductDto,
  OutputListProductDto,
} from "./list.product.dto";

export default class ListProductUseCase {
  private productRepository: ProductRepositoryInterface;
  constructor(CustomerRepository: ProductRepositoryInterface) {
    this.productRepository = CustomerRepository;
  }

  async execute(input: InputListProductDto): Promise<OutputListProductDto> {
    const customers = await this.productRepository.findAll();
    return OutputMapper.toOutput(customers);
  }
}

class OutputMapper {
  static toOutput(product: Product[]): OutputListProductDto {
    return {
      products: product.map((product) => ({
        id: product.id,
        name: product.name,
        price: product.price,
      })),
    };
  }
}
