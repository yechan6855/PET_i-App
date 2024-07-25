import { useEffect, useState } from "react"
import { Pet, PetGender } from "../types/pet"
import { petTestData } from "../data/petData"

export default function usePet() {
    const [list, setList] = useState<Pet[]>([])
    useEffect(()=>{
        // 테스트 데이터임 백엔드 API 생성시 ..
        // setList([...petTestData])
        fetch("http://10.0.2.2:5500/pet")
        .then(res => res.json())
        .then(result => {
            setList(result.list)
        })
        .catch(error => {
            console.log(error)
        })
    }, [])
    return {
        list,
        size : list.length
    }
}