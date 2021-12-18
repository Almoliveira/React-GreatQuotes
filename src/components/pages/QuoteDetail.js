import { useParams, Route } from "react-router-dom/cjs/react-router-dom.min";
import { Fragment } from "react/cjs/react.production.min";
import Comments from "../comments/Comments";
import HighlightedQuote from '../quotes/HighlightedQuote';

const DUMMY_QUOTES = [
  {id: 'q1', author: 'Max', text: 'Learning React is Fun'},
  {id: 'q2', author: 'Maximillian', text: 'Learning Vue is Fun'},
  {id: 'q3', author: 'Mathew', text: 'Learning Angular is Fun'}
]

const QuoteDetail = () => {
  const params = useParams();


  const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId);

  if(!quote) {
    return <p>No quote found</p>
  }

  return (
    <Fragment>
      <h1>Quote Detail Page</h1>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
