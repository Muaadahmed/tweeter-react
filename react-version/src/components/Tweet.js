function Tweet(){
  const tweetObj = {
    name: "Descartes",
    handle: "@SirIsaac",
    avatar: "https://i.imgur.com/nlhLi3I.png",
    body: "Je pense , donc je suis",
    age: "10 days ago"
  } 
  return(
    <article className="tweet">
      <header className="tweet--header">
        <img className="tweet--avatar" src={tweetObj.avatar} alt="..."/>
        <h2 className="tweet--name">{tweetObj.name}</h2>
        <small className="tweet--handle">{tweetObj.handle}</small>
      </header>

      <div className="tweet--body">
        <p>{tweetObj.body}</p>
      </div>

      <footer className="tweet--footer">
        <small className="footer--age">{tweetObj.age}<small>
            <span className="footer--actions">
              <a href="#"><i className="fa fa-flag"></i></a>
              <a href="#"><i className="fa fa-retweet"></i></a>
              <a href="#"><i className="fa fa-heart"></i></a>'
            </span>
          </small></small></footer>
    </article>
  );
}

export default Tweet;