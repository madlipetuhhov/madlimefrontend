<template>
  <section class="section-contact section-first">
    <div class="container grid grid--2-cols">
      <img class="contact-img" src="../assets/img/other/contact_madli.png" alt="Photo of photographer Madli."/>
      <section class="contact-text-box">
        <h1 class="heading-primary">Võta minuga ühendust ja lähme pildistama!</h1>
        <form class="contact-form" action="#">
          <div>
            <label class="label-contact" for="full-name">Nimi *</label>
            <input
                id="full-name"
                type="text"
                placeholder="ees- ja perekonnanimi"
                required
            />
          </div>
          <div>
            <label class="label-contact" for="email">E-post *</label>
            <input
                id="email"
                type="email"
                placeholder="e-posti aadress"
                required
            />
          </div>
          <div>
            <label class="label-contact" for="phone">Telefon</label>
            <input
                id="phone"
                type="tel"
                placeholder="telefoninumber"
            />
          </div>
          <div>
            <label class="label-contact">Milline fotosessioon sind huvitab?</label>
            <div class="grid--radio">
              <input type="radio" id="portrait" name="selected-photosession" value="portrait">
              <label class="label-radio" for="portrait">Portree</label>
              <input type="radio" id="couple" name="selected-photosession" value="couple">
              <label class="label-radio" for="couple">Paar</label>
              <input type="radio" id="family" name="selected-photosession" value="family">
              <label class="label-radio" for="family">Pere</label>
              <input type="radio" id="pregnancy" name="selected-photosession" value="pregnancy">
              <label class="label-radio" for="pregnancy">Lapseootus</label>
              <input type="radio" id="others" name="selected-photosession" value="others">
              <label class="label-radio" for="others">Muu</label>
            </div>
          </div>
          <div>
            <label class="label-contact" for="description">Sinu mõtted ja soovid *</label>
            <textarea id="comments" name="comments" rows="4"
                      placeholder="Saada mulle oma mõtted ja soovid seoses fotosessiooniga (nt aeg, asukoht, erilised detailid jms)"
                      required></textarea>
          </div>
        </form>
        <Button class="contact-btn" text="Saada kiri" link="#" variant="btn--medium"/>
      </section>
    </div>
  </section>

  <section class="section-instagram">
    <InstagramFeed/>
  </section>

  <div class="section-footer">
    <Footer/>
  </div>
</template>

<script>
import InstagramFeed from "@/components/InstagramFeed.vue";
import Footer from "@/components/Footer.vue";
import Button from "@/components/Button.vue";

export default {
  name: "ContactView",
  components: {Button, Footer, InstagramFeed}
}
</script>

<style>
.contact-img {
  width: 100%;
  margin-bottom: 3.2rem;
}

.contact-form {
  display: grid;
  gap: 3.2rem;
}

.label-radio,
.label-contact {
  font-size: 1.6rem;
  font-weight: 500;
}

.label-contact {
  display: inline-block;
  margin-bottom: 1.2rem;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 1.2rem;
  font-size: 1.8rem;
  border: solid 1px #9A9A9A;
  color: inherit;
  font-family: inherit;
  resize: vertical;
}

.contact-form input::placeholder {
  color: #9A9A9A;
}

.grid--radio {
  display: grid;
  grid-template-columns: auto 95fr;
  gap: 1.2rem;
  align-items: center;
}

.contact-form input[type="radio"] {
  cursor: pointer;
  width: 1rem;
  height: 1rem;
  appearance: none;
  border: 1px solid #9A9A9A;
  border-radius: 50%;
  outline: none;
}

.contact-form input[type="radio"]:checked {
  background-color: #9A9A9A;
}

.contact-form *:focus {
  outline: none;
  box-shadow: 0 0 0 0.4rem rgba(154, 154, 154, 0.2);
}

.contact-btn {
  margin-top: 3.2rem;
}

</style>