import OpenAI from 'openai';
import { OPENAI_KEY } from '../constants/constant';

const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPEN_AI_KEY, // defaults to process.env["OPENAI_API_KEY"]
  dangerouslyAllowBrowser: true
});

export default openai;