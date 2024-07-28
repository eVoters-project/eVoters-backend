import { PartialType } from "@nestjs/swagger";
import { CreateAreaPurokDto } from "./create-area-purok.dto";

export class UpdateAreaPurokDto extends PartialType(CreateAreaPurokDto) { }