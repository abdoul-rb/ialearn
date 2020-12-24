<template>
  <div>
    <div class="mt-8">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-lg leading-6 font-medium text-gray-900">Une nouvelle formation</h2>
        <section class="my-8">
          <!-- Create Courses Form -->
          <form class="space-y-8 divide-y divide-gray-200" @submit.prevent="submit">
            <div class="space-y-8 divide-y divide-gray-200">
              <div>
                <div>
                  <h3 class="text-2xl leading-6 font-medium text-gray-900 tracking-wide">Cours / {{ form.title }}</h3>
                  <p class="mt-1 text-sm text-gray-500">La description de votre nouveau cours.</p>
                </div>
                <div class="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6 mt-6">
                  <div class="sm:col-span-4">
                    <label for="title" class="block text-sm font-medium text-gray-700">Titre du cours</label>
                    <div class="mt-1">
                      <input type="text" name="title" id="title" v-model="form.title" autocomplete="given-name" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
                    </div>
                  </div>
                  <div class="sm:col-span-5">
                    <label for="description" class="block text-sm font-medium text-gray-700">Description</label>
                    <div class="mt-1">
                      <textarea id="description" name="description" v-model="form.description" rows="4" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"></textarea>
                    </div>
                    <p class="mt-2 text-sm text-gray-500">Un bref résumé du cours.</p>
                  </div>
                </div>
              </div>
              <div class="pt-5">
                <div class="flex justify-end space-x-2">
                  <PrimaryButton>Annuler</PrimaryButton>
                  <CyanButton :type="'submit'">Enregistrer</CyanButton>
                </div>
              </div>
            </div>
          </form>
          <div class="border-b border-gray-300 my-3"></div>

          <!-- Create Chapters Form -->
          <form class="space-y-8 divide-y divide-gray-200" @submit.prevent="submitChapters">
            <div class="space-y-8 divide-y divide-gray-200">
              <div>
                <div>
                  <h3 class="text-2xl leading-6 font-medium text-gray-900 tracking-wide">Les chapitres</h3>
                  <p class="mt-1 text-sm text-gray-500">Un cours peut avoir un à plusieurs chapitres.</p>
                </div>
                <div class="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6 mt-6">
                  <!-- Form input -->
                </div>
              </div>
              <div class="pt-5">
                <div class="flex justify-end space-x-2">
                  <PrimaryButton>Annuler</PrimaryButton>
                  <CyanButton :type="submit">Ajouter le chapitre</CyanButton>
                </div>
              </div>
            </div>
          </form>
        </section>
      </div>
    </div>
  </div>
</template>
<script>
  import PrimaryButton from "../../../components/Button/PrimaryButton";
  import CyanButton from "../../../components/Button/CyanButton";
  export default {
    components: { CyanButton, PrimaryButton },
    layout: 'admin',
    head () {
      return {
        title: 'Nouvelle formation'
      }
    },
    data() {
      return {
        typing: false,
        form: {
          title: '',
          description: '',
        },
        course: null,
      }
    },
    methods: {
      async submit() {
        try {
          await this.$axios.post('admin/courses', this.form)
          // this.resetForm()
          // this.$router.push({ name : 'admin-courses-create' })
        } catch (e) {
          console.log(e)
        }
      },
      async submitChapters() {
        console.log('Chapters submitted')
      },
      resetForm() {
        this.form.title = '',
        this.form.description = ''
      },
      addChapter() {
        this.form.chapters.push({ title: '', content: '' })
      },
      removeChapter() {
        this.form.chapters.pop()
      }
    }
  }
</script>
