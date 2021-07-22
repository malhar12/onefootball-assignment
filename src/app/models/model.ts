export interface PlayerAvaibility {
    id: string;
    active: boolean;
    profileId: string;
}

export interface PlayerProfile {
    age: string;
    role: string;
    team: string;
    picture: string;
}

export interface PlayerStats {
    blocks: number;
    totalTackles: string;
    interceptions: string;
    tacklesWon: string;
    yellowCards: string;
    passingAccuracy: string;
    clearances: string;
    totalCrosses: string;
    aerialDuelsWon: string;
    minutesPlayed: string;
    minutesPerGoal: string;
    headedGoals: string;
    foulsConceded: string;
    totalPasses: string;
    totalShots: string;
    otherGoals: string;
    duelsWon: string;
    shotsOnTarget: string;
    leftFootGoals: string;
    rightFootGoals: string;
    starts:  string;
    goalsFromInsideBox: string;
    substitutionOff: string;
    foulsWon: string;
    assists : string;
    gamesPlayed : string;
    substitutionOn : string;
    redCards : string;
    goals : string;
    successfulCrosses : string;
    goalsFromOutsideBox : string;
}

export interface PlayerDetails {
    id: string;
    profile: PlayerProfile;
    stats: PlayerStats
}

export interface FormEventDetails {
    status: boolean;
    details: PlayerDetails | null;
    message: string;
}