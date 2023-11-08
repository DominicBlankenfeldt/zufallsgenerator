<template>
  <div class="hello">
    <div class="title mt-3">{{ msg }}</div>

    <div class="rules mx-3 mt-3">
      <p class="ruletitle">Regelwerk für Wichteln</p>
      <p class="ruleone">1. Keiner verrät wer für wen wichtelt!</p>
      <p class="ruleone">
        2. Jeder Wichtel sollte sich für den Kauf von Geschenken in ein
        Ladengeschäft begeben! (Sollte das absolut nicht möglich sein kann
        natürlich auch übers Internet bestellt werden)
      </p>
      <p class="ruleone">
        3. Der Wert darf den Gesamtbetrag von 30€ nicht überschreiten, dabei ist
        die Anzahl der Geschenke unrelevant!
      </p>
      <p class="ruleone">
        4. Die Wichtelgeschenke sollten so ausgesucht werden das der zu
        Beschenkende diese auch gut nutzen kann.
      </p>
    </div>
    <div v-if="myerror">
      <div class="alert alert-danger d-flex m-2" role="alert">
        {{ myerror }}
        <img alt="" class="wmann" src="../assets/weihnachtsmann.jpg" />
      </div>
    </div>
    <div class="form-check d-flex p-5 m-2 bg-c">
      <input
        class="form-check-input"
        type="checkbox"
        value=""
        id="flexCheckDefault"
        v-model="checked"
      />
      <label class="form-check-label" for="flexCheckDefault">
        Ich habe die Regeln verstanden und bin damit einverstanden, dass ich bei
        Nichteinhaltung die Rute vom Weihnachtsmann zu spüren bekomme. 😀
      </label>
    </div>
    <div class="btn btn-dark my-5 follow-button" @click="weiterzurauslosung()">
      Weiter zu Auslosung
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import firebase from "firebase/app";
import "firebase/database";
import {
  deleteDoc,
  DocumentData,
  getFirestore,
  QueryDocumentSnapshot,
  doc,
  DocumentReference,
  UpdateData,
  setDoc,
  getDoc,
  limitToLast,
  where,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  query,
  orderBy,
} from "firebase/firestore";
import db from "../main";

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      checked: false,
      myerror: "",
    };
  },
  methods: {
    weiterzurauslosung() {
      if (this.checked == true) {
        this.$router.push("/auslosung");
      } else {
        this.myerror =
          "Du hast die Regeln nicht akzeptiert! Das solltest du lieber tun der Weihnachtsmann sieht Alles!";
      }
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.title {
  font-size: 1.3rem;
  text-decoration: underline;
}
.ruletitle {
  font-size: 2rem;
  font-weight: bolder;
}
.rules {
  font-size: 1.4rem;
}

.follow-button {
  font-size: 2rem;
}
.bg-c {
  background-color: #c7c7c72c;
  border-radius: 10px;
  border: solid 1px #4c4c4c5a;
}
.wmann {
  max-height: 100px;
  max-width: 100px;
  border-radius: 50%;
}
</style>
