import axios from 'axios';

var config = {
	site: '119.23.46.215:8081/yhyhotel/',
	method: ''
}
export const API_ROOT = 'http://'.concat( config.site, config.method )

export const getRoom = params => { return axios.get( API_ROOT + 'to/userlist', { params: params }); };

export const getInside = params => { return axios.get( API_ROOT + 'inside.php', { params: params }); };


