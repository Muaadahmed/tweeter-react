function TweetForm() {
  const placeholderText = "What are you humming about?";
  return (
    <section class="newtweet">
    <form method="post" action="/tweets" class="newtweet__form">
      <textarea class="form__textarea" name="text" placeholder={placeholderText} ></textarea>
      <input type="submit" value="Tweet" class="form__input" onClick = {(event) => event.preventDefault()}/>
      <span class="form__counter">140</span>
    </form>
  </section>
  );
}

export default TweetForm;