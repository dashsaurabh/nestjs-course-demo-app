import { Body, Controller, Delete, ForbiddenException, Get, HttpException, HttpStatus, Param, Post, Put, Req, Res, UseFilters } from "@nestjs/common";
import { CustomExceptionFilter } from "src/exceptions/custom-exception.filter";
import { ProductsService } from "./products.service";

@Controller('products')
export class ProductsController {

    constructor(private readonly productsService: ProductsService) {}

    @Get('admin')
    @UseFilters(CustomExceptionFilter)
    getAdminDetails() {
        throw new ForbiddenException();
    }

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