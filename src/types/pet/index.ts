
/**
 * 0 수 1 암 2 중성
 */
export type PetGender = 0 | 1 | 2

export interface Pet
{
    birthdate: string;
    petId : number;    
    name : string;    
    gender : PetGender;
    breed : string;
    birth : string;
    profilePictureURL : string;
}

export interface PetDetail extends Pet
{    
    createdAt : string;
    updatedAt : string;
    gender : PetGender;
}

export interface vitalData
{
    bpm : number,
    temperature : number
}