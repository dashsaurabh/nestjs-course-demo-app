import { Body, Controller, Delete, Get, Param, Post, Put, Req, Res } from "@nestjs/common";
import { ProductsService } from "./products.service";


@Controller('products')
export class ProductsController {

    constructor(private readonly productsService: ProductsService) {}

    @Get()
    getAllProducts() {
        return this.productsService.getAllProducts();
    }

    @Get(':id')
    getProduct(@Param('id') id: number) {
        return this.productsService.getProduct(id);
    }

    @Post()
    createProduct(@Body() productData) {
        return this.productsService.createProduct(productData)
    }

    @Put(':id')
    updateProduct(@Param('id') id: number, @Body() productData) {
        return this.productsService.updateProduct(id, productData);
    }

    @Delete(':id')
    deleteProduct(@Param('id') id: number) {
        return this.productsService.deleteProduct(id);
    }
}