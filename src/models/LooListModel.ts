
export interface LooListModel {
    id: number,
    level: string,
    levelName: string;
    gender: string,
    location: string,
    isAvailable: string
}

export interface groupedLooList {
    level : string;
    levelName: string;
    isAvailable: boolean;
    location: Array<groupedByLocation>;
}

export interface groupedByLocation {
    location: string,
    isAvailable: string,
    locationList: Array<LooListModel>
}
