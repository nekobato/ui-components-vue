import AlternateButtonList from "./index.vue";

export default {
  title: "AlternateButtonList",
  component: AlternateButtonList,
};

export const Default = () => ({
  components: { AlternateButtonList },
  data() {
    return {
      list: [{ name: "Item 1" }, { name: "Item 2" }, { name: "Item 3" }],
    };
  },
  template:
    '<div><AlternateButtonList v-for="(item, index) in list" :key="index" :name="item.name" /></div>',
});
