import axios from 'axios';

const api = axios.create({
  baseURL: '/',
  headers: { 'X-Auth-Token': process.env.REACT_APP_FOOTBALL_API_KEY }
});

/**
 * competition: 2–4‑letter code (PL, CL, WC, BL1, SA, PD, …) or numeric ID
 */
export const getFixtures    = competition => api.get(`/competitions/${competition}/matches`);
export const getLeagueTable = competition => api.get(`/competitions/${competition}/standings`);
export const getLiveMatches  = ()          => api.get(`/matches?status=LIVE`);
export const getMatchDetails= matchId      => api.get(`/matches/${matchId}`);
