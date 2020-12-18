<template>
  <div>
    <transition leave-active-class="duration-200">
      <div v-if="show" class="fixed z-50 top-0 inset-x-0 px-4 pt-6 sm:px-0 sm:flex sm:items-center sm:justify-center">
        <div class="fixed inset-0 transform transition-all" @click.prevent="$modal.hide(name)">
          <div class="absolute inset-0 bg-black opacity-75"></div>
        </div>
        <transition enter-active-class="ease-out duration-300" enter-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to-class="opacity-100 translate-y-0 sm:scale-100" leave-active-class="ease-in duration-200" leave-class="opacity-100 translate-y-0 sm:scale-100" leave-to-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
          <div v-if="show" class="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full" :class="maxWidthClass">
            <div class="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
              <button @click.prevent="$modal.hide(name)" type="button" class="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <span class="sr-only">Close</span>
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <slot></slot>
          </div>
        </transition>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    props: {
      name : {
        required : true,
        type : String
      },
      maxWidth: {
        default: '2xl'
      },
      closeable: {
        default: true
      },
    },

    data () {
      return {
        show : false,
        params : {}
      }
    },

    methods: {
      close() {
        if (this.closeable) {
          this.$modal.hide(this.name)
        }
      }
    },

    beforeMount () {
      this.$modal.$event.$on('show', (modal, params) => {
        if (this.name === modal) {
          this.params = params
          this.show = true
        }
      })
      this.$modal.$event.$on('hide', (modal) => {
        if (this.name === modal) {
          this.show = false
        }
      })
    },

    mounted() {
      const closeOnEscape = (e) => {
        if (e.key === 'Escape' && this.show) {
          this.close()
        }
      }

      document.addEventListener('keydown', closeOnEscape)

      this.$once('hook:destroyed', () => {
        document.removeEventListener('keydown', closeOnEscape)
      })
    },

    computed: {
      maxWidthClass() {
        return {
          'sm': 'sm:max-w-sm',
          'md': 'sm:max-w-md',
          'lg': 'sm:max-w-lg',
          'xl': 'sm:max-w-xl',
          '2xl': 'sm:max-w-2xl',
        }[this.maxWidth]
      }
    }
  }
</script>
