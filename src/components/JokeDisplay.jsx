// Step 1: Accept `joke` and `loading` as props

const JokeDisplay = ({ joke, loading }) => {
  return (
    <div className="joke-container">
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <p>{joke}</p>
      )}
    </div>
  );
}

export default JokeDisplay