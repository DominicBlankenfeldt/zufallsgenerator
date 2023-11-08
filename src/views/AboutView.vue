<template>
  <div v-if="!losungspartner" class="about">
    <h1 class="mt-3">Lass die Auslosung beginnen.</h1>
    <h3>Wer bist du?</h3>
    <p>Bitte wähle die Karte auf der du zu sehen bist.</p>
    <div class="cards">
      <div
        class="d-flex justify-content-center my-4"
        v-for="(e, index) in teilnehmer"
        :key="index"
      >
        <div class="card shadow" style="width: 20rem">
          <img :src="`./pics/${e}.png`" alt="bild" class="p-4" />
          <div class="card-body">
            <h1 class="card-title">{{ e }}</h1>
            <div
              class="btn btn-dark thatsme"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              @click="dasbinichfestlegen(e, index)"
            >
              Das bin ich!
            </div>
          </div>
        </div>
      </div>
      <!-- modal -->
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Bist du dir sicher?
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              Bist du dir sicher das du die Auslosung für
              <h1>{{ dasbinich }}</h1>
              starten möchtest?
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Abbrechen
              </button>
              <button
                type="button"
                class="btn btn-success"
                data-bs-dismiss="modal"
                @click="starteauslosung()"
              >
                Auslosung starten
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-if="losungspartner" class="about">
    <h1 class="mt-3">Hurra Hurra.</h1>
    <h3>Hier kommt dein Los!</h3>
    <div class="alert alert-warning d-flex m-2" role="alert">
      Bitte denke daran Niemandem zu verraten wer dein Los ist.
      <img alt="" class="wmann" src="../assets/weihnachtsmann.jpg" />
    </div>
    <div class="d-flex justify-content-center my-4">
      <div class="card shadow" style="width: 20rem">
        <img :src="`./pics/${losungspartner}.png`" alt="bild" class="p-4" />
        <div class="card-body">
          <h1 class="card-title">{{ losungspartner }}</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
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
  onSnapshot,
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
  created() {
    this.loadStorage();
    this.getTeilnehmer();
    this.getVerpartnert();
    this.getWerhatwen();
  },
  data() {
    return {
      teilnehmer: [] as string[],
      teilnehmerhelper: [] as string[],
      verpartnert: [] as string[],
      werhatwen: [] as string[],
      helper: "",
      dasbinich: "",
      myindex: 0,
      losungspartner: "",
    };
  },
  methods: {
    dothis() {
      localStorage.clear();
    },
    starteauslosung() {
      this.teilnehmer.splice(this.myindex, 1);
      this.removeallreadychoosen();
      this.teilnehmerhelper = this.teilnehmer;
      let a = this.teilnehmerhelper.length;
      let b = this.getRandomInt(a);
      this.losungspartner = this.teilnehmerhelper[b];
      this.updateVerpartnert();
      this.updateWerhatwen();
      localStorage.setItem("losungspartner", this.losungspartner);
    },
    removeallreadychoosen() {
      for (let i = this.teilnehmer.length - 1; i >= 0; i--) {
        const teilnehmer = this.teilnehmer[i];
        if (this.verpartnert.includes(teilnehmer)) {
          this.teilnehmer.splice(i, 1);
        }
      }
    },
    dasbinichfestlegen(a: string, b: number) {
      this.dasbinich = a;
      this.myindex = b;
    },
    getRandomInt(max: number) {
      return Math.floor(Math.random() * max);
    },
    async getTeilnehmer() {
      const docSnap = await getDoc(doc(db, "familie", "teilnehmer"));
      if (docSnap.exists()) {
        let a = docSnap.data();
        a.teilnehmer.forEach((e: any) => {
          this.teilnehmer.push(e);
        });
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
    },
    async getWerhatwen() {
      // const docSnap = await getDoc(doc(db, "familie", "werhatwen"));
      // if (docSnap.exists()) {
      //   let a = docSnap.data();
      //   a.werhatwen.forEach((e: any) => {
      //     this.werhatwen.push(e);
      //   });
      // } else {
      //   // docSnap.data() will be undefined in this case
      //   console.log("No such document!");
      // }

      onSnapshot(collection(db, "familie"), (snapshot) => {
        let werhatwenhelper = [] as any[];
        snapshot.docs.forEach((doc) => {
          werhatwenhelper.push({ ...doc.data() });
        });
        let a = werhatwenhelper[2];
        this.werhatwen = [];
        a.werhatwen.forEach((e: any) => {
          this.werhatwen.push(e);
        });
      });
    },
    async getVerpartnert() {
      // const docSnap = await getDoc(doc(db, "familie", "verpartnert"));
      // let a = docSnap.data();
      // if (docSnap.exists() && a.verpartnert.length > 0) {
      //   a.verpartnert.forEach((e: any) => {
      //     this.verpartnert.push(e);
      //   });
      // } else {
      //   // docSnap.data() will be undefined in this case
      //   console.log("No such document!");
      // }
      onSnapshot(collection(db, "familie"), (snapshot) => {
        let verpartnerthelper = [] as any[];
        snapshot.docs.forEach((doc) => {
          verpartnerthelper.push({ ...doc.data() });
        });
        let a = verpartnerthelper[1];
        this.verpartnert = [];
        a.verpartnert.forEach((e: any) => {
          this.verpartnert.push(e);
        });
      });
    },
    async updateVerpartnert() {
      this.verpartnert.push(this.losungspartner);
      await updateDoc(doc(db, "familie", "verpartnert"), {
        verpartnert: this.verpartnert,
      });
    },
    async updateWerhatwen() {
      this.helper = this.dasbinich + " + " + this.losungspartner;
      this.werhatwen.push(this.helper);
      await updateDoc(doc(db, "familie", "werhatwen"), {
        werhatwen: this.werhatwen,
      });
    },
    loadStorage() {
      let a = localStorage.getItem("losungspartner");
      if (a === null) {
        return;
      } else {
        this.losungspartner = a;
      }
    },
  },
});
</script>

<style scoped>
img {
  border-radius: 50%;
}
.thatsme {
  font-size: xx-large;
}
.wmann {
  max-height: 70px;
  max-width: 70px;
}
</style>
