
/**
 * 0 수 1 암 2 중성
 */
export type PetGender = 0 | 1 | 2

export interface Pet
{
    petId : string;
    userId : string;
    name : string;
    birthdate : string;
    gender : PetGender;
    profilePictureURL : string;
}

export interface PetDetail extends Pet
{
    breed : string;
    createdAt : string;
    updatedAt : string;
}