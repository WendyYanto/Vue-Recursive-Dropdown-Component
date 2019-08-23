export default {
  methods: {
    handleToggle(index) {
      const item = this.items[index];
      const active = this.activeItemIndex;
      if (!item.active) {
        if (active !== -1) {
          this.items[active].active = false;
        }
      }
      item.active = !item.active;
      this.activeItemIndex = index;
    }
  },
}