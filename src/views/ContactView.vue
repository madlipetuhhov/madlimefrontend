<template>
  <section class="section-contact section-first">
    <div class="container grid grid--2-cols">
      <img class="contact-img" src="../assets/img/other/contact_madli.png" alt="Photo of photographer Madli."/>

      <section class="contact-text-box">
        <h1 class="heading-primary">Saada mulle kiri ja lähme pildistama!</h1>
        <form class="contact-form" action="#">
          <div>
            <label for="full-name">Sinu nimi</label>
            <input
                id="full-name"
                type="text"
                placeholder="Eesnimi Perekonnanimi"
                required
            />
          </div>
          <div>
            <label for="email">E-posti aadress</label>
            <input
                id="email"
                type="email"
                placeholder="mina@näidis.ee"
                required
            />
          </div>
          <div>
            <label for="email">Telefon</label>
            <input
                id="phone"
                type="number"
                placeholder="+372 1234 1234"
            />
          </div>
          <div>
            <label for="select-where">Millist fotosessiooni soovid?</label>
            <select name="" id="select-where" required>
              <option value="">Palun vali üks</option>
              <option value="friends">Portree</option>
              <option value="ad">Paar</option>
              <option value="youtube">Lapseootus</option>
              <option value="podcast">Pere</option>
              <option value="others">Muu</option>
            </select>
          </div>
        </form>
        <Button class="contact-btn" text="Saada kiri" link="#" variant="btn--dark"/>
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
.contact-text-box {
  font-size: 1.8rem;
  line-height: 1.5;
}

.contact-form {
  margin-bottom: 1.8rem;
}

.contact-img{
  width: 100%;
}

</style>