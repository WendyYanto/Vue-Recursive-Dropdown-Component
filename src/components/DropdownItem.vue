<template>
  <div class="dropdown-item" :class="item.active ? 'active': null">
    <div class="dropdown-title">
      <h4 @click="toggleDropdown">{{item.title}}</h4>
    </div>
    <div class="dropdown-content">
      <p>{{item.content}}</p>
      <DropdownItem
        v-for="(item, i) in item.children"
        :key="item.title"
        :index="i"
        :item="item"
        :callback="handleToggle"
      />
    </div>
  </div>
</template>

<script>
import DropdownToggle from "@/mixins/dropdown-toggle";

export default {
  name: "DropdownItem",
  mixins: [DropdownToggle],
  props: {
    item: Object,
    index: Number,
    callback: Function
  },
  data() {
    return {
      items: [],
      activeItemIndex: -1
    };
  },
  methods: {
    toggleDropdown() {
      const { callback, index } = this.$props;
      callback(index);
    }
  },
  mounted() {
    const children = this.$props.item.children;
    if (children) {
      this.items = children;
    }
  }
};
</script>

<style scoped>
.dropdown-title {
  cursor: pointer;
}

.active > .dropdown-title {
  color: red;
}

.dropdown-content {
  display: none;
}

.active > .dropdown-content {
  display: block;
}
</style>