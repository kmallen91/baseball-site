import { createContext, useContext } from 'react'

export const BaseballContext = createContext()

export const BaseballProvider = ({ children }) => {
    const [baseballState, setBaseballState] = useContext({
        players: [],
        teams: [],
        selectedTeam1: [],
        selectedTeam2: [],
        selectedPlayer1: [],
        selectedPlayer2: [],
    
    })
} 

