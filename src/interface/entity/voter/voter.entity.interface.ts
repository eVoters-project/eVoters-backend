import { BaseEntityInterface } from "src/interface/abstract/entity/base.entity.interface";
import { AreaBarangayInterface } from "../area-barangay/area-barangay.interface";
import { AreaPurokInterface } from "../area-purok/area-purok.interface";

export interface VoterInterface extends BaseEntityInterface {
    firstname: string;
    middlename: string;
    lastname: string;
    nickname: string;
    gender: string;
    date_of_birth: Date;
    address: string;
    precinct_no: string;
    vin_no: string;
    status: string;
    category: string;
    vote_group: string;
    vote_type: string;
    vote_status: string;
    longitude: string;
    latitude: string;
    barangay: AreaBarangayInterface;
    purok: AreaPurokInterface;
    verified_voter?: boolean;
    confirmed_leader?: boolean;
    unassigned_voter?: boolean;
}