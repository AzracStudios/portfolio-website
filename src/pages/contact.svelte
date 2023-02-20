<script lang="ts">
  // STYLES
  import "./styles/contact.scss";

</script>

<main id="contact">
  <p class="contact__title hide">Say Hello!</p>
  <form name="contact" method="post" data-netlify="true">
    <div class="contact__row">
      <div class="contact__container hide">
        <label for="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="John Doe"
          autocomplete="off"
          required
        />
      </div>

      <div class="contact__container hide">
        <label for="email">Email</label>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="john@gmail.com"
          autocomplete="off"
          required
        />
      </div>
    </div>

    <div class="contact__container hide">
      <label for="message">Message</label>
      <textarea
        name="message"
        id="message"
        cols="30"
        rows="10"
        placeholder="Write Something...."
        autocomplete="off"
        on:resize={(e) => {
          e.preventDefault();
        }}
        required
      />
    </div>

    <button class="contact__submit hide" type="submit">Submit</button>
  </form>
</main>
