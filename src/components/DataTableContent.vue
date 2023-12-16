<template>
  <div>
    <h1>Products Information</h1>
    <div class="search-container">
      <div class="titleSearchWrapper">
        <label for="titleSearch">Title:</label>
        <input
          v-model="titleSearchTerm"
          type="text"
          id="titleSearch"
          @input="searchTable"
          placeholder="Enter Title"
        />
      </div>

      <div class="brandSearchWrapper">
        <label for="brandSearch">Brand:</label>
        <input
          v-model="brandSearchTerm"
          type="text"
          id="brandSearch"
          @input="searchTable"
          placeholder="Enter Brand"
        />
      </div>
    </div>

    <div class="table-container">
      <table v-if="filteredProducts.length">
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                v-model="selectAll"
                @change="selectAllRows"
              />
            </th>
            <th @click="sortColumn('title')">
              Title <i :class="titleSortIcon"></i>
            </th>
            <th>Category</th>
            <th @click="sortColumn('brand')">
              Brand <i :class="brandSortIcon"></i>
            </th>
            <th>Price</th>
            <th>Stock</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in sortedProducts" :key="product.id">
            <td>
              <input
                type="checkbox"
                v-model="selectedRows"
                :value="product.id"
              />
            </td>
            <td>
              <router-link
                :to="{
                  name: 'ProductDetail',
                  params: { id: Number(product.id) },
                }"
              >
                {{ product.title }}
              </router-link>
            </td>
            <td>{{ product.category }}</td>
            <td>{{ product.brand }}</td>
            <td>{{ product.price }}</td>
            <td>{{ product.stock }}</td>
            <td>{{ product.rating }}</td>
          </tr>
        </tbody>
      </table>
      <p v-else>Loading data...</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

interface Product {
  id: number;
  title: string;
  category: string;
  brand: string;
  price: number;
  stock: number;
  rating: number;
}

export default defineComponent({
  data() {
    return {
      products: [] as Product[],
      selectedRows: [] as number[],
      selectAll: false,
      loading: true,
      sortDirection: "asc" as "asc" | "desc",
      sortColumnKey: "" as string,
      titleSearchTerm: "" as string,
      brandSearchTerm: "" as string,
    };
  },
  computed: {
    sortedProducts(): Product[] {
      if (this.sortColumnKey) {
        return this.filteredProducts.slice().sort((a: any, b: any) => {
          const valueA = a[this.sortColumnKey].toLowerCase();
          const valueB = b[this.sortColumnKey].toLowerCase();

          if (this.sortDirection === "asc") {
            return valueA.localeCompare(valueB);
          } else {
            return valueB.localeCompare(valueA);
          }
        });
      } else {
        return this.filteredProducts;
      }
    },
    filteredProducts(): Product[] {
      let filtered = this.products;

      if (this.titleSearchTerm) {
        filtered = filtered.filter((product: any) =>
          product.title
            .toLowerCase()
            .includes(this.titleSearchTerm.toLowerCase())
        );
      }

      if (this.brandSearchTerm) {
        filtered = filtered.filter((product: any) =>
          product.brand
            .toLowerCase()
            .includes(this.brandSearchTerm.toLowerCase())
        );
      }

      return filtered;
    },
    titleSortIcon(): string {
      return this.sortColumnKey === "title"
        ? this.sortDirection === "asc"
          ? "fa-solid fa-sort-up"
          : "fa-solid fa-sort-down"
        : "fa-solid fa-sort";
    },
    brandSortIcon(): string {
      return this.sortColumnKey === "brand"
        ? this.sortDirection === "asc"
          ? "fa-solid fa-sort-up"
          : "fa-solid fa-sort-down"
        : "fa-solid fa-sort";
    },
  },
  methods: {
    fetchData(): void {
      fetch("https://dummyjson.com/products")
        .then((response) => response.json())
        .then((data: { products: Product[] }) => {
          this.products = data.products;
          this.loading = false;
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    },
    selectAllRows(): void {
      if (this.selectAll) {
        this.selectedRows = this.products.map((product) => product.id);
      } else {
        this.selectedRows = [];
      }
    },
    sortColumn(columnKey: string): void {
      if (this.sortColumnKey === columnKey) {
        this.sortDirection = this.sortDirection === "asc" ? "desc" : "asc";
      } else {
        this.sortColumnKey = columnKey;
        this.sortDirection = "asc";
      }
    },
    searchTable(): void {
      console.log("Search by Title:", this.titleSearchTerm);
      console.log("Search by Brand:", this.brandSearchTerm);
    },
  },
  mounted() {
    this.fetchData();
  },
});
</script>

<style scoped>
/* Default styles */
.search-container {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
}

.titleSearchWrapper,
.brandSearchWrapper {
  margin-right: 0;
}

.titleSearchWrapper,
.brandSearchWrapper {
  width: 100%;
}

.search-container input {
  height: 30px;
  margin-top: 8px;
  text-indent: 10px;
  width: 100%;
}

.table-container {
  height: 50vh;
  overflow-y: auto;
  width: 100%;
  position: fixed;
  width: 90%;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
  cursor: pointer;
  white-space: normal;
  overflow: hidden;
  text-overflow: ellipsis;
}

th {
  background-color: #333;
  color: #fff;
  position: sticky;
  top: 0;
  z-index: 2;
}

td input[type="checkbox"] {
  margin-right: 5px;
}

i {
  margin-left: 5px;
}

.search-container label {
  margin-right: 5px;
}

@media (min-width: 650px) {
  .table-container {
    height: 75vh;
    position: relative;
  }
}

@media (min-width: 768px) {
  .table-container {
    width: 100%;
  }
  .search-container {
    flex-direction: row;
  }

  .titleSearchWrapper,
  .brandSearchWrapper {
    width: 20%;
    margin-right: 20px;
  }

  .search-container input {
    width: 100%;
  }
}
</style>
