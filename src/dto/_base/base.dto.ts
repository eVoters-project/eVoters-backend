import { IsNotEmpty, IsUUID } from "class-validator";
import { BaseEntityInterface } from "src/interface";

export class BaseDto implements BaseEntityInterface {

    @IsNotEmpty()
    @IsUUID()
    id: string;

}