import Product from "../../../domain/product/entity/product";
import UpdateProductUseCase from "./update.product.usecase";


const product = new Product("123", "Product 1", 10);

const input = {
  id: product.id,
  name: "Product 1 Updated",
  price: 20
};

const MockRepository = () => {
  return {
    create: jest.fn(),
    findAll: jest.fn(),
    find: jest.fn().mockReturnValue(Promise.resolve(product)),
    update: jest.fn(),
  };
};

describe("Unit test for product update use case", () => {
  it("should product a customer", async () => {
    const productRepository = MockRepository();
    const productUpdateUseCase = new UpdateProductUseCase(productRepository);

    const output = await productUpdateUseCase.execute(input);

    expect(output).toEqual(input);
  });
});
