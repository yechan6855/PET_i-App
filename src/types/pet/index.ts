
/**
 * 0 수 1 암 2 중성
 */
export type PetGender = 0 | 1 | 2

export interface Pet
{
    petId : string;    
    name : string;    
    gender : PetGender;
    breed : string;
    birthdate : string;
    profilePictureURL : string;
}

export interface PetDetail extends Pet
{    
    createdAt : string;
    updatedAt : string;
}