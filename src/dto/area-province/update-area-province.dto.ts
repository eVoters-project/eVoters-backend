import { PartialType } from "@nestjs/swagger";
import { CreateAreaProvinceDto } from "./create-area-province.dto";

export class UpdateAreaProvinceDto extends PartialType(CreateAreaProvinceDto) { }