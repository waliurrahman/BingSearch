import { getSearchResults } from '../../../lib/bing';

export default async function handler(req, res) {
  const { query } = req.query;
  // const query = req.body.query;
  const results = await getSearchResults(query);
  res.status(200).json(results);
}