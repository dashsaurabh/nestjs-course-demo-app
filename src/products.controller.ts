import { Body, Controller, Delete, Get, Param, Post, Put, Req, Res } from "@nestjs/common";
import { Request } from "express";

@Controller('products')
export class ProductsController {

    @Get()
    getAllProducts(@Req() request: Request, @Res() response): any {
        console.log(request.headers)
        response.status(200).send('This endpoint returns a list of all products')
    }

    @Get(':id')
    getProduct(@Param() params) {
        console.log(params.id);
        return `This action returns the product details for product id #${params.id}`;
    }

    @Post()
    createProduct(@Body() productData: any): string {
        console.log(productData);
        return 'This endpoint creates a new product';
    }

    @Put()
    updateProduct(): string {
        return 'This endpoint updates an existing product';
    }

    @Delete()
    deleteProduct(): string {
        return 'This endpoint deletes an existing product';
    }
}