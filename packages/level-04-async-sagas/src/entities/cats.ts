export interface Status {
    verified: boolean;
    sentCount: number;
    feedback: string;
}

export interface Cat {
    status: Status;
    type: string;
    deleted: boolean;
    _id: string;
    user: string;
    text: string;
    __v: number;
    source: string;
    updatedAt: Date;
    createdAt: Date;
    used: boolean;
}