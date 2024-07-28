import { PartialType } from "@nestjs/swagger";
import { CreateAreaLGUDto } from "./create-area-lgu.dto";

export class UpdateAreaLGUDto extends PartialType(CreateAreaLGUDto) { }