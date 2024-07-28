import { PartialType } from "@nestjs/swagger";
import { CreateAreaRegionDto } from "./create-area-region.dto";

export class UpdateAreaRegionDto extends PartialType(CreateAreaRegionDto) { }