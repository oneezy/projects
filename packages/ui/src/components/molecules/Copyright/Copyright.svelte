<script>
  import { APP_NAME, APP_DESCRIPTION } from '@packages/metadata';
  export let date = new Date().getFullYear();
</script>

<div class="flex items-center justify-center text-center py-4">
  <span class="text--dim">
    &#169; Copyright {date}, <slot>{APP_NAME}</slot>
  </span>
</div>