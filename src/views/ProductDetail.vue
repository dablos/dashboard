<template>
  <div>
    <h2>Product Details</h2>
    <pre>{{ JSON.stringify(product, null, 2) }}</pre>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";

interface ProductDetailProps {
  id: number;
}

export default defineComponent({
  props: {
    id: {
      type: Number as PropType<number>,
      required: true,
    },
  },
  data() {
    return {
      product: null,
    };
  },
  async mounted() {
    try {
      const response = await fetch(`https://dummyjson.com/products/${this.id}`);
      const data = await response.json();
      this.product = data;
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  },
});
</script>

<style scoped></style>
