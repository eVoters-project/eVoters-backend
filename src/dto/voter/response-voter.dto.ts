import { AreaBarangayInterface, AreaPurokInterface, VoterInterface } from "src/interface";

export class ResponseVoterDto implements VoterInterface {
    created_at?: Date;
    updated_at?: Date;
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
    id?: string;
    barangay: AreaBarangayInterface;
    purok: AreaPurokInterface;
    verified_voter: boolean;
    confirmed_leader: boolean;
    unassigned_voter: boolean;
}