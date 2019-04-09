<template>
  <div class="edit-smoothie container">
    <div v-if="!smoothie" class="loader">
      <div class="preloader-wrapper big active">
        <div class="spinner-layer spinner-green-only">
          <div class="circle-clipper left">
            <div class="circle"></div>
          </div>
          <div class="gap-patch">
            <div class="circle"></div>
          </div>
          <div class="circle-clipper right">
            <div class="circle"></div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <h2>Edit {{ smoothie.title }} Smoothie</h2>
      <form @submit.prevent="EditSmoothie">
        <div class="field title">
          <label for="title">Smoothie Title:</label>
          <input type="text" name="title" v-model="smoothie.title" />
        </div>
        <div
          class="field add-ingredient"
          v-for="(ingredient, index) in smoothie.ingredients"
          :key="index"
        >
          <label for="ingredient">Ingredient:</label>
          <input
            type="text"
            name="ingredient"
            v-model="smoothie.ingredients[index]"
          />
          <i class="material-icons delete" @click="deleteIng(ingredient)"
            >delete</i
          >
        </div>
        <div class="field add-ingredient">
          <label for="add-ingredient">Add an ingredient (tab to add)</label>
          <input
            type="text"
            name="add-ingredient"
            @keydown.tab.prevent="addIng"
            v-model="another"
          />
        </div>
        <div class="field center-align">
          <p v-if="feedback" class="red-text">{{ feedback }}</p>
          <button class="btn pink">Update Smoothie</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import db from "@/firebase/init";
import slugify from "slugify";

export default {
  name: "EditSmoothie",
  data() {
    return {
      smoothie: null,
      another: null,
      feedback: null
    };
  },
  methods: {
    addIng() {
      if (this.another) {
        this.smoothie.ingredients.push(this.another);
        this.another = null;
        this.feedback = null;
      } else {
        this.feedback = "You must enter a value to add an ingredient";
      }
    },
    deleteIng(ing) {
      this.smoothie.ingredients = this.smoothie.ingredients.filter(
        e => e !== ing
      );
    },
    EditSmoothie() {
      if (this.smoothie.title) {
        this.feedback = null;
        // create a slug
        this.smoothie.slug = slugify(this.smoothie.title, {
          replacement: "-",
          remove: /[$*_+~.()'"!\-:@]/g,
          lower: true
        });
        if (this.another) {
          this.smoothie.ingredients.push(this.another);
          this.another = null;
        }
        db.collection("smoothies")
          .doc(this.smoothie.id)
          .update({
            title: this.smoothie.title,
            ingredients: this.smoothie.ingredients,
            slug: this.smoothie.slug
          })
          .then(() => this.$router.push({ name: "Index" }))
          .catch(err => console.log(err));
      } else {
        this.feedback = "You must enter a smoothie title";
      }
    }
  },
  created() {
    let ref = db
      .collection("smoothies")
      .where("slug", "==", this.$route.params.smoothie_slug);
    ref.get().then(snapshot => {
      snapshot.forEach(doc => {
        this.smoothie = doc.data();
        this.smoothie.id = doc.id;
      });
    });
  }
};
</script>

<style>
.loader {
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.edit-smoothie {
  margin-top: 60px;
  padding: 20px;
  max-width: 500px;
}

.edit-smoothie h2 {
  font-size: 2em;
  margin: 20px auto;
}

.edit-smoothie .field {
  margin: 20px auto;
  position: relative;
}

.edit-smoothie .delete {
  position: absolute;
  right: 0;
  bottom: 16px;
  color: #aaa;
  font-size: 1.4em;
  cursor: pointer;
}
</style>
