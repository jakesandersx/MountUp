import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

type Team = {
  _id: string;
  school: string;
  sport: string;
  games: number;
  conferenceRecord: string;
  overallRecord: string;
  stats: {};
}

type Sport = {
    name: string;
    gender: string;
    id: string;
}

type State = {
    sports: Sport[] | null;
    teams: {
        [key: string]: Team[] 
    } | null;
};

const initialState: State = {
    sports: [
        //Men's Sports
        {name: 'Baseball', gender: "Men\'s", id: 'baseball'},
        {name: 'Basketball', gender: 'Men\'s', id: 'mbball'},
        {name: 'Cross Country', gender: 'Men\'s', id: 'mcross'},
        {name: 'Football', gender: "Men\'s", id: 'football'},
        {name: 'Golf', gender: 'Men\'s', id: 'mgol'},
        {name: 'Lacrosse', gender: 'Men\'s', id: 'mlax'},
        {name: 'Soccer', gender: 'Men\'s', id: 'msoc'},
        {name: 'Swimming & Diving', gender: 'Men\'s', id: 'mswim'},
        {name: 'Tennis', gender: 'Men\'s', id: 'mten'},
        {name: 'Track & Field', gender: 'Men\'s', id: 'mtrack'},

        //Women's Sports
        {name: 'Basketball', gender: 'Women\'s', id: 'wbball'},
        {name: 'Cross Country', gender: 'Women\'s', id: 'wcross'},
        {name: 'Golf', gender: 'Women\'s', id: 'wgol'},
        {name: 'Softball', gender: "Women\'s", id: 'softball'},
        {name: 'Soccer', gender: 'Womens\'s', id: 'wsoc'},
        {name: 'Swimming & Diving', gender: 'Women\'s', id: 'wswim'},
        {name: 'Tennis', gender: 'Women\'s', id: 'wten'},
        {name: 'Track & Field', gender: 'Women\'s', id: 'wtrack'},
        {name: 'Lacrosse', gender: 'Women\'s', id: 'wlax'},
        {name: 'Volleyball', gender: 'Women\'s', id: 'wvol'}
    ],
    teams: null,
};

export const teamSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        
    }
  });

  export const {
    
  } = teamSlice.actions;

  export default teamSlice.reducer;