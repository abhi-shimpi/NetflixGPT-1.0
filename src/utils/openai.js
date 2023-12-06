import OpenAI from 'openai';
import { OPENAI_KEY } from '../constants/constant';

const openai = new OpenAI({
  apiKey: "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", // defaults to process.env["OPENAI_API_KEY"]
  dangerouslyAllowBrowser: true
});

export default openai;