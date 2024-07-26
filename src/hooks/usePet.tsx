import { useCallback, useEffect, useState } from "react"
import { Pet, PetGender } from "../types/pet"
import { petTestData } from "../data/petData"

export default function usePet() {
    const [list, setList] = useState<Pet[]>([])
    useEffect(()=>{
        const fetchPets = async () => {            
            try {
                const response = await fetch("http://10.0.2.2:5500/pet");
                if (!response.ok) {
                    const errorResult = await response.json();
                    throw new Error(errorResult.message || "Failed to fetch pets");
                }
                const result = await response.json();
                setList(result.list);
            } catch (error) {
                console.log(error)
            } 
        };

        fetchPets();
    }, [])
    return {
        list
    }
}