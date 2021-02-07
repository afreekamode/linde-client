const flash = {
  data() {
    return {
      show: false,
      body: ""
    };
  },
  created() {
    if (this.message) {
      this.flash(this.message);
    }
    window.events.on("flash", message => this.flash(message));
  },
  methods: {
    flash(message) {
      this.show = true;
      this.body = message;
      setTimeout(() => {
        this.hide();
      }, 3500);
    },
    hide() {
      this.show = false;
    }
  }
};

export default flash;
