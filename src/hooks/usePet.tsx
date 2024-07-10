import { useEffect, useState } from "react"
import { Pet, PetGender } from "../types/pet"
import { petTestData } from "../data/petData"

interface PetProps
{
    userId : string
}
export default function usePet({userId} : PetProps) {
    const [list, setList] = useState<Pet[]>([])
    useEffect(()=>{
        // 테스트 데이터임 백엔드 API 생성시 ..
        setList([...petTestData])
    }, [])
    return [
        list
    ]
}