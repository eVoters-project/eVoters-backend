export class ResponseVoteCountElectionPerLocation {
    id: string;
    position: string;
    candidates: Candidate[]
}

class Candidate {
    id: string;
    name: string;
    locations: Location[]
}

class Location {
    id: string;
    name: string;
    precincts: Precinct[]
}

class Precinct {
    id: string;
    name: string;
    total: number;
    votes: number;
    percentage: number;
}