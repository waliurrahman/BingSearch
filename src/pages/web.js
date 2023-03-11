import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
// import { getSearchResults } from '../lib/bing';

export default function Web({ data }) {
  const [results, setResults] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const { query } = router.query;
      setResults(data);
    };
    fetchData();
  }, [router.query]);

  return (
    <div className='container'>
      <div className='form-box'>
        <form onSubmit={(e) => {
          e.preventDefault();
          router.push(`/web?query=${e.target.query.value}`);
          // router.push(`/?query=${query}`);

        }}>
          
          <input type="text" name="query" value={router.query.query} />
          <button type="submit">Search</button>
        </form>
        </div>
        <ul>
          {results.map((result) => (
            <>
              {console.log(result)}
              <li key={result.id}>
                <a target='_blank' href={result.url}><h3 className='name'>{result.name}</h3>
                <span className='url'>{result.displayUrl}</span>
                <p className='snippet'>{result.snippet}</p>
                </a>
              </li>
            </>
          ))}
        </ul>
      
    </div>
  );
}

export async function getServerSideProps({ query }) {
  const res = await fetch(`https://sohaji.vercel.app/api/search/web?query=${query.query}`)
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data }, // will be passed to the page component as props
  }
}
