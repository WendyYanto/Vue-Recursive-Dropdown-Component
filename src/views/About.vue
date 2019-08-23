<template>
  <div class="about">
    <h1>This is an Dropdown Page</h1>
    <div class="dropdown-menu">
      <DropdownItem
        v-for="(item,index) in items"
        :key="item.title"
        :item="item"
        :index="index"
        :callback="handleToggle"
      />
    </div>
  </div>
</template>

<script>
import DropdownItem from "@/components/DropdownItem";
import DropdownToggle from "@/mixins/dropdown-toggle";

export default {
  name: "DropdownPage",
  components: {
    DropdownItem
  },
  mixins: [DropdownToggle],
  data() {
    return {
      items: [
        {
          title: "Title_1",
          content: "Content_1",
          active: false,
          children: [
            { title: "Title_1.1", content: "Content_1.1", active: false },
            { title: "Title_1.2", content: "Content_1.2", active: false }
          ]
        },
        {
          title: "Title_2",
          content: "Content_2",
          active: false,
          children: [
            { title: "Title_2.1", content: "Content_2.1", active: false },
            { title: "Title_2.2", content: "Content_2.2", active: false }
          ]
        },
        { title: "Title_3", content: "Content_3", active: false },
        { title: "Title_4", content: "Content_4", active: false }
      ],
      activeItemIndex: -1
    };
  }
};
</script>