import axios from 'axios';
import Constants from '@/constants';

/**
 * Created an instance for the axios for http calls
 */
class AxiosInstance {
  public instance = axios.create({
    baseURL: Constants.API_BASE_URL,
    timeout: Constants.API_TIMEOUT,
  });
}

export default new AxiosInstance();
