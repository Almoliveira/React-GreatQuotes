import QuoteList from '../quotes/QuoteList';

const DUMMY_DATA = [
    {id: 'q1', author: 'Max', text: 'Learning React is Fun'},
    {id: 'q2', author: 'Maximillian', text: 'Learning Vue is Fun'},
    {id: 'q3', author: 'Mathew', text: 'Learning Angular is Fun'}
]

const AllQuotes = () =>{
    return <QuoteList quotes={DUMMY_DATA} />
}

export default AllQuotes;