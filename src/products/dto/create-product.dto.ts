import { Type } from "class-transformer";
import { IsNumber, IsString, Min } from "class-validator";

export class CreateProductDto {
    @IsString()
    public name: string;

    @IsNumber({
        maxDecimalPlaces: 4, //Maximo de decimales
    })
    @Min(0) //El valor minimo debe ser 0
    @Type(() => Number) //La propiedad debe ser un número y con esta anotacion la transforma
    public price: number;
}
