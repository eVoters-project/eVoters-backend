import { AreaBarangayInterface, AreaPurokInterface, VoterInterface } from "src/interface";

export class ResponseVoterDto {
    id?: string;
    precinct_no: string;
    lastname: string;
    firstname_middlename: string;
    longitude: string;
    latitude: string;
    barangay: AreaBarangayInterface;
    purok: AreaPurokInterface;
    party: string;
    group: string;
    verified_voter: boolean;
    confirmed_leader: boolean;
    unassigned_voter: boolean;
    vote_status: string;
}