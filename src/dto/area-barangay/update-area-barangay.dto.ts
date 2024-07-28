import { PartialType } from "@nestjs/swagger";
import { CreateAreaBarangayDto } from "./create-area-barangay.dto";

export class UpdateAreaBarangayDto extends PartialType(CreateAreaBarangayDto) { }