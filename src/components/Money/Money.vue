<template>
  <div data-testid="money">
    {{ formatedValue }}
  </div>
</template>
<script>
export default {
  props: {
    value: {
      default: '0',
      type: String
    },
    currency: {
      default: 'USD',
      type: String
    }
  },
  computed: {
    formatedValue () {
      return this.format(this.value, this.currency);
    }
  },
  methods: {
    format(val, currency) {
      const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency:
          currency === "$" || currency === "USD" || currency === "US$"
            ? "USD"
            : "BRL",
        minimumFractionDigits: 2
      });
      const _format = formatter.format(val);

      if (_format.includes("R$")) {
        return formatter.format(val).replace("$", "$ ");
      }
      return formatter.format(val).replace("$", "US$ ");
    }
  }
};
</script>
